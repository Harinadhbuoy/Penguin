import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../../styles/addtour_package.css";


function TourForm({ isOpen, onClose, onSave }) {
  const [tour, setTour] = useState({
    tour_name: "",
    description: "",
    tour_original_price: "",
    tour_discount_price:"",
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTour({
      ...tour,
      [name]: value,
    });
  };

 

  const handleSubmit = () => {
    onSave(tour);

    //Business logic here 
    setTour({
        tour_name: " ",
      description: " ",
      tour_original_price: " ",
      tour_discount_price: " "
    });

    onClose();
  };

 

 

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Tour</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Tour Name</Form.Label>
            <Form.Control
              type="text"
              name="tour_name"
              value={tour.tour_name}
              onChange={handleChange}
            />
          </Form.Group>
            <Form.Label>Tour Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={tour.description}
              onChange={handleChange}
            />
          <Form.Group>
            <Form.Label>Tour Original Price</Form.Label>
            <Form.Control
              type="number"
              name="tour_original_price"
              value={tour.tour_original_price}
              onChange={handleChange}
            />

          </Form.Group>
          <Form.Group>
            <Form.Label>Tour Discount Price</Form.Label>
            <Form.Control
              type="number"
              name="tour_discount_price"
              value={tour.tour_discount_price}
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

 

export default TourForm;







