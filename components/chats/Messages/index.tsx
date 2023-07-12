import React, { useContext } from "react";
import { ChatsContext } from "@/contexts/chats";
import Input from "./Input";

export default function ChatMessages() {
  const { current, rooms } = useContext(ChatsContext);
  if (!(current || rooms.has(current))) return null;
  return (
    <section>
      {rooms.get(current)?.messages.map((message, index) => (
        <p key={index}>{message.text}</p>
      ))}
      <Input />
    </section>
  );
}
