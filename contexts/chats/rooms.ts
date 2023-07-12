import { createContext } from "react";
import { Room } from "@/types/chats";
import { RoomsStateType } from "@/types/chats/context/rooms";

export const RoomsContext = createContext<RoomsStateType>({
  rooms: new Map<string, Room>(),
  setRooms: () => {},
});
