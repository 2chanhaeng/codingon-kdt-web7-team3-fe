import { SocketType } from "@/contexts/socket";
export default function handleJoin(
  id: string,
  socket: SocketType,
  setCurrent: React.Dispatch<React.SetStateAction<string>>
) {
  return () => {
    if (!socket) return console.log("no socket");
    console.log("joining room", id);
    socket.emit("join", { id });
    setCurrent(id);
  };
}
