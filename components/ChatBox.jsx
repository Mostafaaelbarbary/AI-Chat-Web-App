import { useState } from "react";
import { sendMessage } from "../services/api";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    const res = await sendMessage(message);
    setChat([...chat, { user: message, bot: res }]);
    setMessage("");
  };

  return (
    <div>
      {chat.map((c, i) => (
        <div key={i}>
          <p><b>You:</b> {c.user}</p>
          <p><b>AI:</b> {c.bot}</p>
        </div>
      ))}
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
