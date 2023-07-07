import { Socket } from "socket.io-client";
import { Room } from "@/types/chats";
import handleRooms from "./rooms";
import handleJoin from "./join";
import handleMessage from "./message";

export default function listenSocket(
  socket: Socket,
  setRooms: React.Dispatch<React.SetStateAction<Map<string, Room>>>
) {
  socket.on("connect", () => console.log("connected"));
  socket.on("rooms", handleRooms(setRooms));
  socket.on("join", handleJoin(setRooms));
  socket.on("message", handleMessage(setRooms));
}
