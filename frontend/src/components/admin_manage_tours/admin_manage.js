import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { createnewTour } from '../../services/admin_manage/admin_manage_services';
import { getTours } from '../../services/admin_manage/admin_manage_services';
import { deletetour } from '../../services/admin_manage/admin_manage_services';
import "../../styles/admin_manage.css"
import TourForm from '../addtour_package/addtour_package';
import "bootstrap/dist/css/bootstrap.min.css";

const ManageTourPackages = () => {
  const Navigate = useNavigate();
  const [tour, setTour] = useState([]);
  // const [OriginalToursData, setoriginaltoursData] = useState("");
  const [isModalOPen, setModalOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(true);
  var [tableData, setTableData] = useState([]);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  // const handleEdit = (id) => {
  //   console.log(`Edit record with ID: ${id}`);
  // };


  // Delete function frontend service

  const handleDelete = async (tourId) => {
    try {
      console.log("boom boom", tourId);

      await deletetour(tourId);
      toast.error('Tour deleted !', {
        position: toast.POSITION.TOP_RIGHT
      });
      const updatedtours = tour.filter((t) => t.id !== tourId);
      setTour(updatedtours);
      getTourdetails()
    } catch (error) {
      console.error(" error ", error);
    }
  };


  // Add function frontend service

  const handleAddtour = async (newTour) => {
    console.log("new tour", newTour);
    setTour([...tour, newTour]);
    await createnewTour(newTour);
    getTourdetails()
    // alert("Tour added successfully");
  };


  // Load tours function frontend service 
  const getTourdetails = async () => {
    console.log("tours button is clicked");
    let tours = await getTours();
    let toursarray = Object.values(tours.get_tours)
    tableData = toursarray
    setTableData(toursarray)
    console.log("table frontend", tableData)
  }
  useEffect(() => {
    getTourdetails();
  }, []);


  return (
    <div>
      <div className='my-heading'><h2> Our <span>packages</span></h2></div>
      <div className="accordion">
        <div className={`accordion-header ${accordionOpen ? 'open' : ''}`} onClick={toggleAccordion}>
          <p> Our Trending Packages</p>
        </div>
        {accordionOpen && (
          <div className="accordion-content">
            <table className="responsive-table">
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>Tour Name</th>
                  <th>Tour Description</th>
                  <th>Tour Original Price</th>
                  <th>Tour Offer Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((record) => (
                  <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{record.tour_name}</td>
                    <td>{record.description}</td>
                    <td>{record.tour_original_price}</td>
                    <td>{record.tour_discount_price}</td>
                    <td>
                      <button className="my-btn" onClick={() => handleDelete(record.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <br /><button onClick={() => setModalOpen(true)} className="my-btn">
        Add
      </button>
      <TourForm isOpen={isModalOPen}
        onClose={() => setModalOpen(false)}
        onSave={handleAddtour}
      />
    </div>
  );
};

export default ManageTourPackages;















// const loadData = async () => {
//   console.log("get tours is called")
//   let getToursDetails = await getTours();
//   console.log('Tours Details' , getToursDetails);
//   try{
//       if(getToursDetails.status === 200) {
//           setoriginaltoursData(getToursDetails.data.getTours)
//           setTour(getToursDetails.data.getTours)
//       } else{
//           setoriginaltoursData("");
//           setTour("");
//       }
//   } catch (error) {
//       console.log(error);
//   }
// };

// useEffect(() => {
//   loadData();
// }, [tour]);