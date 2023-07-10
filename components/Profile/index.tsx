import Link from "next/link";
import { ProfileType } from "@/types/profile";
interface ProfileComponentProps {
  profile: ProfileType;
  handleProfileEdit: (profile: ProfileType) => void;
}

export default function ProfileComponent({
  profile: { id, name, information },
  handleProfileEdit,
}: ProfileComponentProps) {
  const handleClick = () => {
    handleProfileEdit({ id, name, information });
  };

  return (
    <li>
      <Link href={`/profiles/${id}`}>{name}</Link>
      <p>{infomation}</p>
    </li>
  );
}
