import React from "react";
import { Modal, ModalDialog, Typography } from "@mui/joy";

export default function CreateRoomModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog sx={{ maxWidth: 500 }}>
        <Typography id="basic-modal-dialog-title" component="h2">
          Create New Chatroom!
        </Typography>
      </ModalDialog>
    </Modal>
  );
}
