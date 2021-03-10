import React from "react";
import { useEffect } from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { addFriend } from "../../actions/user";

export default function AddFriendModal({
  showAddFriendModal,
  setShowAddFriendModal,
}) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const approveRequest = (requestUsername) => {
    dispatch(addFriend({ username: user.username, requestUsername }));
  };

  return (
    <div>
      <Modal
        size="lg"
        show={showAddFriendModal}
        onHide={() => setShowAddFriendModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            My requests
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {user ? (
              user.requests.length > 0 ? (
                user.requests.map((request, index) => (
                  <ListGroup.Item
                    key={index}
                    className="d-flex justify-content-between"
                  >
                    <h5>{request}</h5>{" "}
                    <Button onClick={() => approveRequest(request)}>
                      Approve
                    </Button>
                  </ListGroup.Item>
                ))
              ) : (
                <h5>No requests...</h5>
              )
            ) : (
              <div />
            )}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
}
