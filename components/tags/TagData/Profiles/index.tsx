import Box from "@mui/material/Box";
import config from "@/config";
import { ProfileType } from "@/types/profile";
import Card from "./Card";

export default async function Profiles({ id }: { id: string }) {
  const res = await fetch(`${config.api}/tag/${id}/profiles`, {
    cache: "no-cache",
  });
  if (!res.ok) return <Box>404</Box>;
  const profiles: ProfileType[] = await res.json();
  console.log(profiles, "profiles");
  return (
    <Box>
      {profiles.map((profile) => (
        <Card key={profile.id} profile={profile} />
      ))}
    </Box>
  );
}
