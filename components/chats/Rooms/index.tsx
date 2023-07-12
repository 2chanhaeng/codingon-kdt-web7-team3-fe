import React, { useContext } from "react";
import { ChatsContext } from "@/contexts/chats";
import CreateRoom from "./CreateRoom";
import JoinRoom from "./JoinRoom";

export default function Rooms() {
  const { rooms } = useContext(ChatsContext);
  return (
    <ul>
      {Array.from(rooms).map(([id, Room]) => (
        <JoinRoom key={id} room={Room} />
      ))}
      <CreateRoom />
    </ul>
  );
}
