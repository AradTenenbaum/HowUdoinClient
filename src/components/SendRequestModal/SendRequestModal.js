import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { useForm } from "../../hooks/useForm";

export default function SendRequestModal({
  showSendRequestModal,
  setShowSendRequestModal,
}) {

    const sendRequest = () => {
        
    };

    const { onChange, onSubmit, Clear, values } = useForm(sendRequest, {
        userID: ""
      });
      console.log(values)

      const endModal = () => {
        Clear();
        setShowSendRequestModal(false)
      };

  return (
    <div>
      <Modal
        size="lg"
        show={showSendRequestModal}
        onHide={() => endModal()}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add a friend by ID
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter a user ID" name="userID" value={values.userID} onChange={onChange} />
            </Form.Group>
            <Button size="md" block type="submit" onClick={(e) => {
                e.preventDefault();
                endModal()
            }}>Send</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
