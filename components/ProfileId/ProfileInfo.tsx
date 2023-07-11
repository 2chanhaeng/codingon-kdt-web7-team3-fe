import { ProfileType } from "@/types/profile";
import styles from "app/profile/styles.module.scss";
export default function ProfileInfo({
  profile: { name, information },
}: {
  id: string;
  profiles: ProfileType[];
}) {
  return (
    <div className={styles.div}>
      <p> {profiles.find((profile) => profile?.id === id)?.name}</p>
      <p>{profiles.find((profile) => profile?.id === id)?.information}</p>
    </div>
  );
}
