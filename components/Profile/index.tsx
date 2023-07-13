import Link from "next/link";
import { ProfileType } from "@/types/profile";
interface ProfileComponentProps {
  profile: ProfileType;
  handleProfileEdit: (profile: ProfileType) => void;
}

export default function ProfileComponent({
  profile: { id, profname, information },
  handleProfileEdit,
}: ProfileComponentProps) {
  const handleClick = () => {
    handleProfileEdit({ id, profname, information });
  };

  return (
    <Link href={`/profile/${id}`}>
      <li>
        <p>{profname}</p>
        <p>{information}</p>
      </li>
    </Link>
  );
}
