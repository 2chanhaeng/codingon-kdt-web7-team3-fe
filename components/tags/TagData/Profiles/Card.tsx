import { Card, CardContent, Typography } from "@mui/joy";
import { ProfileType } from "@/types/profile";
import Link from "next/link";

export default function ProfileCard({
  profile: { id, profname, information },
}: {
  profile: ProfileType;
}) {
  const shortname =
    profname.length > 10 ? profname.slice(0, 10) + "..." : profname;
  return (
    <Link href={`/profile/${id}`}>
      <Card variant="outlined">
        <Typography level="h2" fontSize="md">
          {shortname}
        </Typography>
        <CardContent orientation="horizontal">
          <Typography level="body2" sx={{ mb: 0.5 }}>
            {information}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
