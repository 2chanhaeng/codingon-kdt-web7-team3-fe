import React from "react";
import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/joy";

export default function WritePostButton({
  setWriting,
}: {
  setWriting: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const onClick = () => setWriting(true);
  return (
    <IconButton
      color="primary"
      href="/write"
      sx={{ mt: 2 }}
      variant="solid"
      onClick={onClick}
    >
      <Add />
    </IconButton>
  );
}
