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
    <Link href={`/profile/${id}`}>
      <li>
        <p>{name}</p>
        <p>{information}</p>
      </li>
    </Link>
  );
}
