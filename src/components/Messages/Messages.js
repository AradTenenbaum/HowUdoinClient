import React from "react";

import "./Messages.css";

function Messages({ messages, user, currentUser }) {
  const isMeToYou = (message) => {
    return message.usernameFrom === user.username && currentUser && message.usernameTo === currentUser.username;
  };
  const isYouToMe = (message) => {
    return currentUser && message.usernameFrom === currentUser.username && message.usernameTo === user.username;
  };

  return (
    <div className="messages">
      {messages.length > 0 ? (
        messages.map((message) => {
          if (isMeToYou(message) || isYouToMe(message))
            return (
              <div className={"message-container" + (isMeToYou(message) ? " justify-end" : " justify-start")}>
                <div className={"message-box"+ (isMeToYou(message) ? " background-blue" : " background-light")}>
                  <div className={"message-text"+ (isMeToYou(message) ? " color-white" : " color-dark")}>{message.message}</div>
                </div>
              </div>
            );
          else return <div />;
        })
      ) : (
        <div />
      )}
    </div>
  );
}

export default Messages;
