"use client";

import React from "react";
import { Rooms, Messages, Header } from "@/components/chats";
import { ChatsContextProvider } from "@/contexts/chats";

export default function ChatPage() {
  return (
    <main>
      <ChatsContextProvider>
        <Header />
        <Rooms />
        <Messages />
      </ChatsContextProvider>
    </main>
  );
}
