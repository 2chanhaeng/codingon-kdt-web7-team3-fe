import { useState } from "react";
import { ListItem, ListItemButton } from "@mui/joy";

export default function CreateRoom() {
  const [creating, setCreating] = useState(false);
  return (
    <ListItem>
      <ListItemButton onClick={() => setCreating(true)}>
        Create Room
      </ListItemButton>
    </ListItem>
  );
}
