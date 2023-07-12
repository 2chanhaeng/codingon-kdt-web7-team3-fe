import { Input, Button, FormControl, FormLabel, Stack } from "@mui/joy";
import React, { useState, useEffect } from "react";
import { setHeader } from "@/utils";
import { Tag } from "@/types/profile";

export default function CreateRoomForm() {
  const getTags = async () => {
    try {
      const tagsRes = await fetch("/api/tags", {
        method: "GET",
        headers: setHeader(),
      });
      const tags = await tagsRes.json();
      return tags;
    } catch (err) {
      return [];
    }
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      roomname: formData.get("roomname"),
      tags: getTags(),
    };
    const res = await fetch("/api/chats", {});
  };

  return (
    <form>
      <Stack spacing={2}>
        <FormControl>
          <FormLabel>Room Name</FormLabel>
          <Input name="roomname" autoFocus required />
        </FormControl>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}
