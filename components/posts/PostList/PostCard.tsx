import Image from "next/image";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typo from "@mui/joy/Typography";
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
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typo level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {shortname}
      </Typo>
      {/* 
        TODO: 이미지 업로드 기능 구현
      <AspectRatio minHeight="120px" maxHeight="200px">
        <Image
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          loading="lazy"
          alt=""
      </AspectRatio>
        /> */}
      <CardContent orientation="horizontal">
        <Typo level="body2" sx={{ mb: 0.5 }}>
          {content}
        </Typo>
      </CardContent>
    </Card>
  );
}
