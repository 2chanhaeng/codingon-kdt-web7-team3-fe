import React, { useContext } from "react";
import { ChatsContext } from "@/contexts/chats";
import { Typography } from "@mui/material";

export default function Header() {
  const { current, rooms } = useContext(ChatsContext);
  return (
    <Typography variant="h2">
      {current ? rooms.get(current)?.roomname : "Socket"}
    </Typography>
  );
}
