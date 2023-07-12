import { Box } from "@mui/joy";
import config from "@/config";
import { PostType } from "@/types/profile";
import Card from "./Card";

export default async function Posts({ id }: { id: string }) {
  const res = await fetch(`${config.api}/tag/${id}/posts`, {
    cache: "no-store",
  });
  if (!res.ok) return <Box>404</Box>;
  const posts: PostType[] = await res.json();
  console.log(posts, "posts");
  return (
    <Box>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </Box>
  );
}
