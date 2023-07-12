import React, { useContext } from "react";
// import { form } from "@mui/material";
import { List, Button } from "@mui/joy";
import { ChatsContext } from "@/contexts/chats";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";

export default function Rooms() {
  const { rooms } = useContext(ChatsContext);
  return (
    <List>
      {Array.from(rooms).map(([id, Room]) => (
        <JoinRoom key={id} room={Room} />
      ))}
      <CreateRoom />
    </List>
  );
}
