import { ProfileType } from "@/types/profile";
import Link from "next/link";
export default function AllProfileList({
  profiles,
}: {
  profiles: ProfileType[];
}) {
  return (
    <ul>
      {profiles.map((profile) => (
        <li key={profile.id}>
          <Link href={`/profile/${profile.id}`}>
            <p>{profile.profname}</p>
            <p>{profile.information}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
