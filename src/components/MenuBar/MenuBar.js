import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircle } from "@fortawesome/free-solid-svg-icons";

import { LOGOUT } from "../../constants/actionTypes";
import UserDetailsModal from "../Modals/UserDetailsModal/UserDetailsModal";
import AddFriendModal from "../Modals/AddFriendModal/AddFriendModal";
import SendRequestModal from "../Modals/SendRequestModal/SendRequestModal";
import "./MenuBar.css";

function MenuBar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const users = useSelector((state) => state.users);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showAddFriendModal, setShowAddFriendModal] = useState(false);
  const [showSendRequestModal, setShowSendRequestModal] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

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
        Requests
      </Nav.Link>
      <Nav.Link
        active
        as={Button}
        variant="link"
        style={{ outline: "none" }}
        onClick={() => setShowSendRequestModal(true)}
      >
        Add Friend
      </Nav.Link>
      <Nav.Link
        active
        as={Button}
        variant="link"
        style={{ outline: "none" }}
        onClick={() => setShowUserDetails(true)}
      >
        Me
      </Nav.Link>
    </Nav>
  );

  const sideBar = (
    <div className="sidenav" style={{width: showSideBar ? "250px" : "0"}}>
      <div className="closebtn" onClick={() => setShowSideBar(false)}>&times;</div>
      <h1>Users</h1>
      {users.length > 0 ? users.map((user, index) => (
        <div className="d-flex justify-content-between hoveranim">
          <span key={index}>{user.username}</span>
          <FontAwesomeIcon
          color="green"
          className="available"
          icon={faCircle}
          />
        </div>
      )) : <div/>}
      {user ? (user.friends ? user.friends.map((friend, index) => {
        if(users.find((user) => user.username === friend)){
          return null;
        } return <span key={index} className="hoveranim">{friend}</span>
      }) : <div/>) : <div/>}
    </div>
  );

  return (
    <div id="main" >
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
      <Navbar style={{ background: "#343a40" }} variant="dark">
        <FontAwesomeIcon
          color="white"
          className="mr-3"
          icon={faBars}
          style={{cursor: "pointer"}}
          onClick={() => setShowSideBar(true)}
        />
        <Navbar.Brand as={Link} to="/">
          HowUdoin
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        {LeftNav}
      </Navbar>
      {showSideBar ? sideBar : <div />}
    </div>
  );
}

export default MenuBar;
