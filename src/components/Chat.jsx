import SearchOutlined from "@mui/icons-material/SearchOutlined";
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFile from "@mui/icons-material/AttachFile";
import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Chat.css";
import MoreVert from "@mui/icons-material/MoreVert";

const Chat = () => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <div className="chat__message">
          <span className="chat__name">Nabendu</span>
          This is a message
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </div>
        <div className="chat__message chat__receiver">
          <span className="chat__name">Parag</span>
          This is a message back
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </div>
        <div className="chat__message">
          <span className="chat__name">Nabendu</span>
          This is a message again again
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </div>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon/>
      </div>
    </div>
  );
};

export default Chat;
