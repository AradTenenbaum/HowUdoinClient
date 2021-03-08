import React from "react";
import {Modal} from 'react-bootstrap';

function UserDetailsModal({showUserDetails, setShowUserDetails, user}) {
  return (
    <div>
      <Modal
        show={showUserDetails}
        onHide={() => setShowUserDetails(false)}
        dialogClassName="modal-90w"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {user.username}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ID: {user.userID}
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UserDetailsModal;
