import React, { useContext } from "react";
import { ChatsContext } from "@/contexts/chats";

export default function Header() {
  const { current, rooms } = useContext(ChatsContext);
  return <h1>{current ? rooms.get(current)?.roomname : "Socket"}</h1>;
}
