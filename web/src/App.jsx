import ChatInput from "./Component/ChatInput";
import ChatLog from "./Component/ChatLog";
import Header from "./Component/Header";
import { Config } from "./Config";
import "./index.css";
import axios from "axios";
import { useState } from "react";
import JonnyImg from "./assets/jonanthanimg.png"

function App() {
  const [messages, setMessages] = useState([]);
  const [cooldowning, setCooldowning] = useState(false);
  const handleSubmit = async (e, message, setPmessage) => {
    e.preventDefault();
    if (cooldowning) return;
    setCooldowning(true);
    setPmessage("");
    const userMessage = {message, name: "You", index: messages.length}
    setMessages((messages)=>[...messages, userMessage])
    const res = await axios.post(`${Config.API_URL}/chat`, {
      message: message,
    });
    const aiMessage = {message: res.data.message, name:"Jonanthan", index: messages.length+1, img : JonnyImg};
    setMessages((messages)=>[...messages, aiMessage]);
    setCooldowning(false);
  };
  return (
    <div className="bg-dgray-450 h-screen w-screen text-white flex flex-col items-center overflow-y-scroll">
      <Header />
      <div className="w-full max-w-4xl flex-grow flex flex-col items-center px-2">
        <ChatLog messages={messages}/>
        <ChatInput handleSubmit={handleSubmit} cooldowning={cooldowning}/>
      </div>
    </div>
  );
}

export default App;
