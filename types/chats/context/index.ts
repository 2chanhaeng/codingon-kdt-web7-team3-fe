import { Socket } from "socket.io-client";
import { Rooms } from "./rooms";

export interface ChatsContextType {
  socket: Socket;
  current: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
  rooms: Rooms;
  setRooms: React.Dispatch<React.SetStateAction<Rooms>>;
}
