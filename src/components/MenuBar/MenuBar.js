import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import {LOGOUT} from '../../constants/actionTypes'

function MenuBar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user);


  useEffect(() => {
    if(user){
      if(user.error) {
        dispatch({type: LOGOUT});
      }
    }
  }, [location.pathname]);

  return (
    <div>
      <Navbar style={{ background: "#4f6d7ac0" }} variant="dark">
        <Navbar.Brand as={Link} to="/">
          Navbar
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link active as={Link} to="/">
            Login
          </Nav.Link>
          <Nav.Link active as={Link} to="/register">
            Register
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MenuBar;
