import Image from "next/image";
import { AspectRatio, Card, CardContent, Typography } from "@mui/joy";
import { PostType } from "@/types/profile";

export default function PostCard({
  post: {
    id,
    content,
    profile: { profname },
  },
}: {
  post: PostType;
}) {
  const shortname =
    profname.length > 10 ? profname.slice(0, 10) + "..." : profname;
  return (
    <Card variant="outlined" sx={{}}>
      <Typography level="h2" fontSize="md" sx={{}}>
        {shortname}
      </Typography>
      {/* <AspectRatio minHeight="120px" maxHeight="200px">
        <Image
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          loading="lazy"
          alt=""
        />
      </AspectRatio> */}
      <CardContent orientation="horizontal">
        <Typography level="body2" sx={{ mb: 0.5 }}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
