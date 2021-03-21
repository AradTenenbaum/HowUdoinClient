import React, { useEffect } from "react";
import { Navbar, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";

import "./Chat.css";
import { userConnected, userDisconnected } from "../../actions/users";
import { sendMessage } from "../../actions/messages";
import {noUser} from '../../actions/currentUser';
import { useForm } from "../../hooks/useForm";
import Messages from "../Messages/Messages";

let socket;

function Chat() {
  const ENDPOINT = "http://localhost:5000/";

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const messages = useSelector((state) => state.messages);
  const currentUser = useSelector((state) => state.currentUser);
  

  const sendMsg = () => {
    if(currentUser){
      socket.emit("sendMessage", {toUserId: currentUser.id, message: values.text});
      dispatch(sendMessage({ usernameFrom: user.username, usernameTo: currentUser.username, message: values.text }));
      Clear();
    }

  };

  const { onChange, onSubmit, Clear, values } = useForm(sendMsg, { text: "" });

  useEffect(() => {
    // Connect socket to url
    socket = io(ENDPOINT);

    socket.emit("join", { username: user.username, friends: user.friends });

    return () => {
      //   socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on("friendsConnected", ({ friendsConnected }) => {
      console.log(friendsConnected);
      friendsConnected.map((friend) => dispatch(userConnected(friend)));
    });
    socket.on("friendConnected", ({ username, id }) => {
      console.log(username, id);
      dispatch(userConnected({ username, id }));
    });
    socket.on("friendDisconnected", ({ username, id }) => {
      console.log(username, id);
      dispatch(noUser());
      dispatch(userDisconnected(id));
    });
    socket.on("message", ({ usernameFrom, usernameTo, message }) => {
      console.log(usernameFrom, usernameTo, message);
      dispatch(sendMessage({ usernameFrom, usernameTo, message }));
    });
  }, []);

  console.log(messages);

  return (
    <div>
      <Messages messages={messages} user={user} currentUser={currentUser} />
      <footer className="fixed-bottom">
        <Form onSubmit={onSubmit} autoComplete="off">
        <Form.Group style={{ margin: "0", display: "flex" }}>
          <Form.Control name="text" value={values.text} onChange={onChange} size="lg" type="text" placeholder="Write somthing..." />
          <Button type='submit'>SEND</Button>
        </Form.Group>
        </Form>
      </footer>
    </div>
  );
}

export default Chat;
