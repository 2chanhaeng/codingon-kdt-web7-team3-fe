import React, { useContext } from "react";
import { ChatsContext } from "@/contexts/chats";
import message from "@/handlers/chats/socket/emit/message";

export default function Input() {
  const { current, socket } = useContext(ChatsContext);

  return (
    <form onSubmit={message(socket, current)}>
      <input type="text" name="message" />
      <button type="submit">send</button>
    </form>
  );
}
