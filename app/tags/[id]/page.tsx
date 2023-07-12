import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TagData from "@/components/tags/TagData";
import config from "@/config";
import { Tag } from "@/types/profile";
import SubscribeButton from "@/components/tags/SubscribeButton";

export default async function TagsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await fetch(`${config.api}/tags/${id}`);
  if (!res.ok) return <Typography>404</Typography>;
  const { tagname, information }: Tag = await res.json();
  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h2">{tagname}</Typography>
      <SubscribeButton id={id} />
      <Typography>{information}</Typography>
      <TagData id={id} />
    </Container>
  );
}
