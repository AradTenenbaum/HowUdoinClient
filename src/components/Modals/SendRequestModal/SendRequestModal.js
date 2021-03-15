import React from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

import { useForm } from "../../../hooks/useForm";
import { friendRequest } from "../../../api/user";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function SendRequestModal({
  showSendRequestModal,
  setShowSendRequestModal,
}) {
  const user = useSelector((state) => state.user);
  const [serverMessage, setServerMessage] = useState(null);

  const sendRequest = async () => {
    if (values.userID !== "") {
      try {
        const { data } = await friendRequest({
          username: user.username,
          requestedUserID: values.userID,
        });
        Clear();
        setServerMessage({ isError: false, message: data });
      } catch (error) {
        setServerMessage({ isError: true, message: error.response.data });
      }
    } else {
      setServerMessage({ isError: true, message: "User ID can't be empty" });
    }
  };

  const { onChange, onSubmit, Clear, values } = useForm(sendRequest, {
    userID: "",
  });

  const endModal = () => {
    Clear();
    setServerMessage(null);
    setShowSendRequestModal(false);
  };

  return (
    <div>
      <Modal
        size="lg"
        show={showSendRequestModal}
        onHide={() => endModal()}
        centered
      >
        <Modal.Header style={{backgroundColor: "#343a40", color: "white"}} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Send a friend request by the user's ID
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter a user ID"
                name="userID"
                value={values.userID}
                onChange={onChange}
              />
            </Form.Group>
            {serverMessage ? (
              <Alert className="mt-3" variant={serverMessage.isError ? "danger" : "success"}>
                <h6>{serverMessage.message}</h6>
              </Alert>
            ) : (
              <div />
            )}
            <Button size="md" block type="submit">
              Send
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
