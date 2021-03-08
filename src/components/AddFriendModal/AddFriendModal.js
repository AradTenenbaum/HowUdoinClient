import React from "react";
import {Modal, Button} from 'react-bootstrap';


export default function AddFriendModal({
  showAddFriendModal,
  setShowAddFriendModal,
}) {
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
            Friend requests
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
        
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowAddFriendModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
