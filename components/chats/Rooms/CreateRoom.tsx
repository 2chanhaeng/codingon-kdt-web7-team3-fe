import React, { useContext } from "react";
import { SocketContext } from "@/contexts/socket";
import handleCreate from "@/handlers/chats/socket/emit/create";

export default function CreateRoom() {
  const socket = useContext(SocketContext);
  return (
    <li>
      <form onSubmit={handleCreate(socket)}>
        <input type="text" name="roomname" />
        <button type="submit">create room</button>
      </form>
    </li>
  );
}
