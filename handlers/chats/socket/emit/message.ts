import { SocketType } from "@/contexts/socket";
import { Message } from "@/types/chats";

export default function message(socket: SocketType, current: string) {
  return (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value: text } = event.currentTarget.message;
    if (!socket) return console.log("no socket");
    const message: Message = { roomId: current, text };
    socket.emit("message", message);
  };
}
