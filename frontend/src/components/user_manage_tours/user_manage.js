import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { getToursUser } from '../../services/user_manage/user_manage_services';
import { createnewBookingTour } from '../../services/user_manage/user_manage_services';
import "../../styles/buttons.css"

const UserManageTours = () => {
    const [accordionOpen, setAccordionOpen] = useState(true);
    var [tableData, setTableData] = useState([]);


    const toggleAccordion = () => {
        setAccordionOpen(!accordionOpen);
    };


    // Booking function frontend service
    const handleBook = async (index) => {

        let email_from_session = sessionStorage.getItem("email");
        console.log("email", email_from_session);
        console.log("handle book", tableData[index]);
        const data_dic = tableData[index];
        data_dic["email"] = email_from_session
        console.log(data_dic)
        // calling the service
        let newBooking = await createnewBookingTour(data_dic)
            .then((newBooking => {
                toast.success('Tour booked successfull !', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }))
    }


    // Load tours for user frontend service

    const getTourdetails = async () => {
        console.log("tours button is clicked");
        let tours = await getToursUser();
        let toursarray = Object.values(tours.get_tours)
        tableData = toursarray
        setTableData(toursarray)
        console.log("table frontend", tableData)
    }
    //   useEffect(() => {
    //     getTourdetails();
    //   }, []);


    return (
        <div>
            <div className='my-heading'><h2> Our <span>packages</span> </h2></div>
            <div className="accordion">
                <div className={`accordion-header ${accordionOpen ? 'open' : ''}`} onClick={toggleAccordion}>
                    <p> Our Trending Packages</p>
                </div>
                {accordionOpen && (
                    <div className="accordion-content">
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    {/* <th>S.NO</th> */}
                                    <th>Tour Name</th>
                                    <th>Tour Description</th>
                                    <th>Tour Offer Price</th>
                                    <th>Tour Original Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((record, index) => (
                                    <tr key={index}>
                                        {/* <td>{index}</td> */}
                                        <td>{record.tour_name}</td>
                                        <td>{record.description}</td>
                                        <td>{record.tour_original_price}</td>
                                        <td>{record.tour_discount_price}</td>
                                        <td>
                                            <button className="my-btn" onClick={() => handleBook(index)}>Book</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <br /><button onClick={getTourdetails} className="my-btn">
                view tours
            </button>
        </div>
    );
};

export default UserManageTours;


