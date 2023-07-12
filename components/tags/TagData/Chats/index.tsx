import Box from "@mui/material/Box";
import config from "@/config";

export default async function Chats({ id }: { id: string }) {
  const res = await fetch(`${config.api}/tag/${id}/chats`);
  if (!res.ok) return <Box>404</Box>;
  const chatrooms = await res.text();
  console.log(chatrooms, "chatrooms");
  return <Box></Box>;
}
