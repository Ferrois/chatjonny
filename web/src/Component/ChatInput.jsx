import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

function ChatInput({handleSubmit, cooldowning}) {
    const [pmessage, setPmessage] = useState("");
  

  return (
    <div className="p-2 container">
      <form className="flex flex-row" onSubmit={(e)=>handleSubmit(e,pmessage,setPmessage)}>
        <Input value={pmessage} onChange={(e)=>setPmessage(e.target.value)}/>
        <Button type="submit" className={`w-14 ${cooldowning? "bg-gray-500 hover:bg-gray-500 focus:bg-gray-400" : ""}`} disabled={cooldowning}>Send</Button>
      </form>
    </div>
  );
}

export default ChatInput;
