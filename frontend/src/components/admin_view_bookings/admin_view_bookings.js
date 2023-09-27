import React, { useEffect, useState } from 'react';
import { getUserComplaints } from '../../services/admin_manage/admin_manage_services';

const AdminViewComplaints = () => {
    const [accordionOpen, setAccordionOpen] = useState(true);
    var [tableData, setTableData] = useState([]);


    const toggleAccordion = () => {
        setAccordionOpen(!accordionOpen);
    };

    // View complaints frontend service
    const viewComplaintsAdmin = async () => {

        console.log("view tours button is clicked");
        let complaints = await getUserComplaints();
        let complaintsarray = Object.values(complaints.get_complaints)
        tableData = complaintsarray
        setTableData(complaintsarray)
        console.log("table frontend", tableData)
    }
    useEffect(() => {
        viewComplaintsAdmin();
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
                                {tableData.map((record, index) => (
                                    <tr key={index}>
                                        {/* <td>{index}</td> */}
                                        <td>{record.complaint_category}</td>
                                        <td>{record.description}</td>
                                        <td>{record.complaint_reason}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            <br /><button onClick={viewComplaintsAdmin} className="my-btn">
                View User Complaints
            </button>
        </div>
    );
};

export default AdminViewComplaints;
