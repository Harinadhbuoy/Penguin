import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getToursUser } from '../../services/user_manage/user_manage_services';
import { getUserBookings } from '../../services/user_manage/user_manage_services';
import { createnewBookingTour } from '../../services/user_manage/user_manage_services';
import { getUserComplaints } from '../../services/admin_manage/admin_manage_services';

const AdminViewBookings = () =>  {
  const [accordionOpen, setAccordionOpen] = useState(true);
  var [tableData, setTableData] = useState([]);


  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };


const viewBookingDetailsAdmin = async () => {

    // let email = sessionStorage.getItem("email");
    // console.log(email);
    console.log("view tours button is clicked");
    let complaints = await getUserComplaints();
    let complaintsarray = Object.values(complaints.get_complaints)
    tableData = complaintsarray
    setTableData(complaintsarray)
    console.log("table frontend", tableData)
  }
  useEffect(() => {
    viewBookingDetailsAdmin ();
  }, []);


return (
    <div>
      <div className='my-heading'><h2><span>User Complaints</span> </h2></div>
      <div className="accordion">
        <div className={`accordion-header ${accordionOpen ? 'open' : ''}`} onClick={toggleAccordion}>
          <p>Users Complaints</p>
        </div>
        {accordionOpen && (
          <div className="accordion-content">
            <table className="responsive-table">
              <thead>
                <tr>
                  {/* <th>S.NO</th> */}
                  <th>Complaint Category</th>
                  <th>Complaint Description</th>
                  <th>Complaint Reason</th>
                  {/* <th></th> */}
                  {/* <th>Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {tableData.map((record , index) => (
                  <tr key={index}>
                    {/* <td>{index}</td> */}
                    <td>{record.complaint_category}</td>
                    <td>{record.description}</td>
                    <td>{record.complaint_reason}</td>
                    {/* <td>{record.tour_discount_price}</td> */}
                    {/* <td>
                      <button className= "my-btn" onClick={() => handleBook(index)}>Book</button>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeleteTour(record.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <br/><button onClick={viewBookingDetailsAdmin} className="my-btn">
        View User Complaints
      </button>
    </div>
  );
};

export default AdminViewBookings;
        