import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../styles/add_complaint.css";


function ComplaintForm({ isOpen, onClose, onSave }) {
  const [complaint, setComplaint] = useState({
    complaint_category: "",
    description: "",
    complaint_reason: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaint({
      ...complaint,
      [name]: value,
    });
  };



  const handleSubmit = () => {
    onSave(complaint);

    //Business logic here 
    setComplaint({
      complaint_category: " ",
      description: " ",
      complaint_reason: " "
    });

    onClose();
  };





  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Complaint</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Complaint Category</Form.Label>
            <Form.Control
              type="text"
              name="complaint_category"
              value={complaint.complaint_category}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Label>Complaint Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={complaint.description}
            onChange={handleChange}
          />
          <Form.Group>
            <Form.Label>Complaint Reason</Form.Label>
            <Form.Control
              type="text"
              name="complaint_reason"
              value={complaint.complaint_reason}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>

        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}



export default ComplaintForm;