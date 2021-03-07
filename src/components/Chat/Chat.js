import React, { useEffect } from 'react';
import io from "socket.io-client";


let socket;

function Chat() {

    const ENDPOINT = "http://localhost:5000/";

    useEffect(() => {
        // Connect socket to url
        socket = io(ENDPOINT);

        socket.emit('join', { username: 'Amit', friends: ['Amit', 'lil'] });

        return () => {
            socket.emit("disconnect");
            socket.off();
          };
    },[ENDPOINT]);

    useEffect(() => {
        socket.on('friendsConnected', ({friendsConnected}) => {
            console.log(friendsConnected);
        });
        socket.on('friendConnected', ({username, id}) => {
            console.log(username, id);
        });
        socket.on('friendDisconnected', ({username, id}) => {
            console.log(username, id);
        });
    });

    return (
        <div>
            
        </div>
    );
}

export default Chat;
