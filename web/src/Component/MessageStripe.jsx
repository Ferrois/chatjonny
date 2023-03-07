import React from "react";

function MessageStripe({img, name, message }) {
  return (
    <div className="w-full h-auto grid grid-cols-6 m-2 p-1 bg-slate-900 shadow-md rounded-lg">
      <div className="flex flex-col items-center">
        <img
          src={img? img : "https://placeholder.com/200x200"}
          className="w-8 h-8 rounded-md"
          alt="profile"
        />
        <span className="text-blue-500 font-bold text-s">{name}</span>
      </div>
      <div className="col-span-5 font-semibold flex items-center">{message}</div>
    </div>
  );
}

export default MessageStripe;
