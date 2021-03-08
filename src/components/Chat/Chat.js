import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from "socket.io-client";

import {userConnected, userDisconnected} from '../../actions/users';

let socket;

function Chat() {

    const ENDPOINT = "http://localhost:5000/";

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const users = useSelector((state) => state.users);


    useEffect(() => {
        // Connect socket to url
        socket = io(ENDPOINT);

        socket.emit('join', { username: user.username, friends: user.friends });

        return () => {
            socket.emit("disconnect");
            socket.off();
          };
    },[ENDPOINT]);

    useEffect(() => {
        socket.on('friendsConnected', ({friendsConnected}) => {
            console.log(friendsConnected);
            friendsConnected.map((friend) => dispatch(userConnected(friend)));
        });
        socket.on('friendConnected', ({username, id}) => {
            console.log(username, id);
            dispatch(userConnected({username, id}));
        });
        socket.on('friendDisconnected', ({username, id}) => {
            console.log(username, id);
            dispatch(userDisconnected(id));
        }, [users]);
    });

    console.log(users);

    return (
        <div>
            Chat
        </div>
    );
}

export default Chat;
