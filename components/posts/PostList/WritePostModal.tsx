"use client";
import {
  FormControl,
  Modal,
  ModalDialog,
  Stack,
  Textarea,
  Button,
} from "@mui/joy";
import { setHeader } from "@/utils";
import { useEffect, useState } from "react";
import { Tag } from "@/types/profile";

export default function WritePostModal({
  writing,
  setWriting,
  loadPosts,
}: {
  writing: boolean;
  setWriting: React.Dispatch<React.SetStateAction<boolean>>;
  loadPosts: () => void;
}) {
  const [tags, setTags] = useState([] as Tag[]);
  useEffect(() => {
    fetch("/api/tags", { method: "GET", headers: setHeader() })
      .then((res) => res.ok && res.json())
      .then((data) => data instanceof Array && setTags(data))
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      content: form.get("content"),
      tags: tags.map((tag) => tag.id),
    };
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: setHeader(),
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setWriting(false);
      loadPosts();
    } else {
      console.log(res);
    }
  };
  return (
    <Modal open={writing} onClose={() => setWriting(false)}>
      <ModalDialog
        aria-labelledby="basic-modal-dialog-title"
        aria-describedby="basic-modal-dialog-description"
        sx={{ minWidth: 350 }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <FormControl>
              <Textarea
                autoFocus
                required
                name="content"
                placeholder="What's on your mind?"
                minRows={3}
              />
            </FormControl>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
}
