import Link from "next/link";
import { ListItem } from "@mui/joy";
import { Room } from "@/types/chats";

export default function JoinRoom({ room: { id, roomname } }: { room: Room }) {
  return (
    <Link href={{ pathname: "/chats/[id]", query: { id } }}>
      <ListItem>{roomname}</ListItem>
    </Link>
  );
}
