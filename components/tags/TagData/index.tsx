import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chats from "./Chats";
import Posts from "./Posts";
import Profiles from "./Profiles";

export default function TagData({ id }: { id: string }) {
  return (
    <Container component="section" maxWidth="xs">
      <Typography variant="h4">Profiles</Typography>
      <Profiles id={id} />
      <Typography variant="h4">Posts</Typography>
      <Posts id={id} />
      <Typography variant="h4">Chats</Typography>
      <Chats id={id} />
    </Container>
  );
}
