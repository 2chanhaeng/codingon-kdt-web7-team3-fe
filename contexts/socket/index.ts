import { io, Socket } from "socket.io-client";
import { createContext } from "react";

export const socket = io("http://localhost:81", {
  transports: ["websocket"],
  // autoConnect: false,
  auth(cb) {
    cb({ token: localStorage.getItem("access") });
  },
});
export const SocketContext = createContext<Socket>(socket);
export type SocketType = Socket;
