import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { LOGOUT } from "../../constants/actionTypes";
import UserDetailsModal from "../UserDetailsModal/UserDetailsModal";
import AddFriendModal from "../AddFriendModal/AddFriendModal";
import SendRequestModal from "../SendRequestModal/SendRequestModal";

function MenuBar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showAddFriendModal, setShowAddFriendModal] = useState(false);
  const [showSendRequestModal, setShowSendRequestModal] = useState(false);

  useEffect(() => {
    if (user) {
      if (user.error) {
        dispatch({ type: LOGOUT });
      }
    }
  }, [location.pathname]);

  const LeftNav = !user ? (
    <Nav>
      <Nav.Link active as={Link} to="/">
        Login
      </Nav.Link>
      <Nav.Link active as={Link} to="/register">
        Register
      </Nav.Link>
    </Nav>
  ) : (
    <Nav>
      <Nav.Link
        active
        as={Button}
        variant="link"
        style={{ outline: "none" }}
        onClick={() => setShowAddFriendModal(true)}
      >
        Add Friend
      </Nav.Link>
      <Nav.Link
        active
        as={Button}
        variant="link"
        style={{ outline: "none" }}
        onClick={() => setShowSendRequestModal(true)}
      >
        Send request
      </Nav.Link>
      <Nav.Link
        active
        as={Button}
        variant="link"
        style={{ outline: "none" }}
        onClick={() => setShowUserDetails(true)}
      >
        {user.username}
      </Nav.Link>
    </Nav>
  );

  return (
    <div>
      {user ? (
        <UserDetailsModal
          showUserDetails={showUserDetails}
          setShowUserDetails={setShowUserDetails}
          user={user}
        />
      ) : (
        <div />
      )}
      <SendRequestModal
        showSendRequestModal={showSendRequestModal}
        setShowSendRequestModal={setShowSendRequestModal}
      />

      <AddFriendModal
        showAddFriendModal={showAddFriendModal}
        setShowAddFriendModal={setShowAddFriendModal}
      />
      <Navbar style={{ background: "#1b4332" }} variant="dark">
        <Navbar.Brand as={Link} to="/">
          HowUdoin
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        {LeftNav}
      </Navbar>
    </div>
  );
}

export default MenuBar;
