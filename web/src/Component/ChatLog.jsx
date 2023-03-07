import React from "react";
import MessageStripe from "./MessageStripe";

function ChatLog({ messages }) {
  return (
    <div className="container flex-grow bg-dgray-425 rounded-md shadow-md w-full">
        <div className="h-full w-full overflow-x-hidden overflow-y-auto">
      {messages &&
        messages.map(({ message,index,name ,img}) => {
          return <MessageStripe img={img} message={message} key={index} name={name}/>;
        })}</div>
    </div>
  );
}

export default ChatLog;
