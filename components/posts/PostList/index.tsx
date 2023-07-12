"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { PostType } from "@/types/profile";
import { setHeader } from "@/utils";
import PostCard from "./PostCard";
import WritePostModal from "./WritePostModal";
import WritePostButton from "./WritePostButton";
import ReloadButton from "./ReloadButton";

export default function PostsList() {
  const [posts, setPosts] = useState([] as PostType[]);
  const [writing, setWriting] = useState(false);
  const loadPosts = getPosts(setPosts);
  useEffect(() => {
    getPosts(setPosts)();
  }, []);
  return (
    <Container component="section" maxWidth="xs">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <WritePostModal
        writing={writing}
        setWriting={setWriting}
        loadPosts={loadPosts}
      />
      <footer>
        <ReloadButton loadPosts={loadPosts} />
        <WritePostButton setWriting={setWriting} />
      </footer>
    </Container>
  );
}

function getPosts(setPosts: React.Dispatch<React.SetStateAction<PostType[]>>) {
  return () => {
    const headers = setHeader();
    fetch("/api/posts", { method: "GET", headers })
      .then((res) => res.ok && res.json())
      .then((data) => data instanceof Array && setPosts(data))
      .catch((err) => console.log(err));
  };
}
