import React, { useContext } from "react";
import { ChatsContext } from "@/contexts/chats";
import { Room } from "@/types/chats";
import handleJoin from "@/handlers/chats/socket/emit/join";

export default function JoinRoom({ room: { id, roomname } }: { room: Room }) {
  const { setCurrent, socket } = useContext(ChatsContext);
  return (
    <li>
      <button onClick={handleJoin(id, socket, setCurrent)}>{roomname}</button>
    </li>
  );
}
