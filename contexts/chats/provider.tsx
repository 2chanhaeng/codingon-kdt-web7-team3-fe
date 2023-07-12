import { useEffect, useState } from "react";
import { Room } from "@/types/chats";
import listenSocket from "@/handlers/chats/socket/listen";
import { socket, SocketContext } from "../socket";
import { CurrentContext } from "./current";
import { RoomsContext } from "./rooms";

export function ChatsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [current, setCurrent] = useState<string>("");
  const [rooms, setRooms] = useState(new Map<string, Room>());
  listenSocket(socket, setRooms);
  return (
    <SocketContext.Provider value={socket}>
      <RoomsContext.Provider value={{ rooms, setRooms }}>
        <CurrentContext.Provider value={{ current, setCurrent }}>
          {children}
        </CurrentContext.Provider>
      </RoomsContext.Provider>
    </SocketContext.Provider>
  );
}
