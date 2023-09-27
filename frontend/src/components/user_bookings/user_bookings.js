import React, {useState } from 'react';
import { getUserBookings } from '../../services/user_manage/user_manage_services';


const UserBookings = () => {
    const [accordionOpen, setAccordionOpen] = useState(true);
    var [tableData, setTableData] = useState([]);


    const toggleAccordion = () => {
        setAccordionOpen(!accordionOpen);
    };


    // View bookings frontend service 
    const viewBookingDetails = async () => {

        let email = sessionStorage.getItem("email");
        console.log(email);

        console.log("view tours button is clicked");
        let tours = await getUserBookings(email);
        let toursarray = Object.values(tours.get_bookings)
        tableData = toursarray
        setTableData(toursarray)
        console.log("table frontend", tableData)
    }
    //   useEffect(() => {
    //     getTourdetails();
    //   }, []);


    return (
        <div>
            <div className='my-heading'><h2>Your <span>Bookings</span> </h2></div>
            <div className="accordion">
                <div className={`accordion-header ${accordionOpen ? 'open' : ''}`} onClick={toggleAccordion}>
                    <p>Your Booked Packages</p>
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
                                    {/* <th>Actions</th> */}
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
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <br /><button onClick={viewBookingDetails} className="my-btn">
                view bookings
            </button>
        </div>
    );
};

export default UserBookings;
