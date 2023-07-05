import Link from "next/link";
import { ProfileType } from "@/types/profile";

export default function ProfileComponent({
  profile: { id, name, infomation },
}: {
  profile: ProfileType;
}) {
  return (
    <li>
      <Link href={`/profiles/${id}`}>{name}</Link>
      <p>{infomation}</p>
    </li>
  );
}
