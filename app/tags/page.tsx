"use client";

import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import {
  Chip,
  Modal,
  Input,
  FormLabel,
  Button,
  ModalDialog,
  Stack,
  SvgIcon,
  FormControl,
  Textarea,
} from "@mui/joy";
import AddIcon from "@mui/icons-material/Add";

import { Tag as TagType } from "@/types/profile";
import { setHeader } from "@/utils";
import Link from "next/link";

export default function TagsPage() {
  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h2">Tags</Typography>
      <Typography variant="h4">Trends</Typography>
      <FamousTagList />
      <Typography variant="h4">Subscribed</Typography>
      <SubscribedTagList />
    </Container>
  );
}
function FamousTagList() {
  const [tags, setTags] = useState([] as TagType[]);
  const loadTags = getFamousTags(setTags);
  useEffect(() => {
    getFamousTags(setTags)();
  }, []);
  return (
    <Container
      component="section"
      maxWidth="xs"
      sx={{ display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap" }}
    >
      {tags.map((tag) => (
        <TagChip key={tag.id} tag={tag} />
      ))}
    </Container>
  );
}

function getFamousTags(
  setTags: React.Dispatch<React.SetStateAction<TagType[]>>
) {
  return () => {
    const headers = setHeader();
    fetch("/api/tags/famous", { method: "GET", headers })
      .then((res) => res.ok && res.json())
      .then((data) => data instanceof Array && setTags(data))
      .catch((err) => console.log(err));
  };
}

function getSubedTags(
  setTags: React.Dispatch<React.SetStateAction<TagType[]>>
) {
  return () => {
    const headers = setHeader();
    fetch("/api/tags", { method: "GET", headers })
      .then((res) => res.ok && res.json())
      .then((data) => data instanceof Array && setTags(data))
      .catch((err) => console.log(err));
  };
}

function SubscribedTagList() {
  const [tags, setTags] = useState([] as TagType[]);
  const [writing, setWriting] = useState(false);
  const loadTags = getSubedTags(setTags);
  useEffect(() => {
    getSubedTags(setTags)();
  }, []);
  return (
    <Container
      component="section"
      maxWidth="xs"
      sx={{ display: "flex", gap: 1, alignItems: "center", flexWrap: "wrap" }}
    >
      {tags.map((tag) => (
        <TagChip key={tag.id} tag={tag} />
      ))}
      <AddTagChip setWriting={setWriting} />
      <WriteTagModal
        writing={writing}
        setWriting={setWriting}
        loadTags={loadTags}
      />
    </Container>
  );
}

function TagChip({ tag: { id, tagname } }: { tag: TagType }) {
  return (
    <Link href={`/tags/${id}`}>
      <Chip
        sx={{
          width: "fit-content",
          height: "fit-content",
        }}
      >
        {tagname}
      </Chip>
    </Link>
  );
}
function AddTagChip({
  setWriting,
}: {
  setWriting: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Chip
      sx={{
        width: "fit-content",
        height: "fit-content",
      }}
      onClick={() => setWriting(true)}
    >
      <Typography>
        <SvgIcon>
          <AddIcon />
        </SvgIcon>
        Add What You Like!
      </Typography>
    </Chip>
  );
}

function WriteTagModal({
  writing,
  setWriting,
  loadTags,
}: {
  writing: boolean;
  setWriting: React.Dispatch<React.SetStateAction<boolean>>;
  loadTags: () => void;
}) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      tagname: form.get("tagname"),
      information: form.get("information"),
    };
    const res = await fetch("/api/tags", {
      method: "POST",
      headers: setHeader(),
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setWriting(false);
      loadTags();
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
              <Typography variant="h6">Add What You Like!</Typography>
              <FormLabel>Name</FormLabel>
              <Input
                autoFocus
                required
                name="tagname"
                placeholder="What do you like?"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Information</FormLabel>
              <Textarea
                autoFocus
                required
                name="information"
                placeholder="Tell me about it!"
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
