"use client";

import React from "react";
import { Container } from "@mui/material";
import { Rooms, Messages, Header } from "@/components/chats";
import { ChatsContextProvider } from "@/contexts/chats";

export default function ChatPage() {
  return (
    <Container component="main" maxWidth="xs">
      <ChatsContextProvider>
        <Header />
        <Rooms />
      </ChatsContextProvider>
    </Container>
  );
}
