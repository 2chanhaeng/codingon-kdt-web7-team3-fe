import { SocketType } from "@/contexts/socket";

export default function handleCreate(socket: SocketType) {
  return (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!socket) return console.log("no socket");
    const { roomname } = event.currentTarget;
    socket.emit("create", { roomname: roomname.value });
  };
}
