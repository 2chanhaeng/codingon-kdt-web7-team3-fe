import { createContext } from "react";
import { Room } from "@/types/chats";
import { ChatsContextType } from "@/types/chats/context";
import { socket } from "../socket";
export { ChatsContextProvider } from "./provider";

export const ChatsContext = createContext<ChatsContextType>({
  socket,
  current: "",
  setCurrent: () => {},
  rooms: new Map<string, Room>(),
  setRooms: () => {},
});
