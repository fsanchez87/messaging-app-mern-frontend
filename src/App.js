import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { PUSHER_APP_KEY } from "./constants/global";
import Pusher from "pusher-js";

const PUSHER_KEY = PUSHER_APP_KEY;

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const pusher = new Pusher(PUSHER_APP_KEY, { cluster: "eu" });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unbind_all();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <CssBaseline />
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
