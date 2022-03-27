import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { PUSHER_APP_KEY } from "./constants/global";
import Pusher from "pusher-js";
import axios from "./components/axios.js";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher(PUSHER_APP_KEY, { cluster: "eu" });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log("Mensajes ✉️", messages);

  return (
    <div className="app">
      <CssBaseline />
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
