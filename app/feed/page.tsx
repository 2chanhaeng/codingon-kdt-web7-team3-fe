import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PostList from "@/components/posts/PostList";

export default function FeedPage() {
  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Feed
      </Typography>
      <PostList />
    </Container>
  );
}
