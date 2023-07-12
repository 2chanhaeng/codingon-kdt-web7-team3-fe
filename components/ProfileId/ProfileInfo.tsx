import { ProfileType } from "@/types/profile";
import styles from "app/profile/styles.module.scss";
export default function ProfileInfo({
  profile: { name, information },
}: {
  profile: ProfileType;
}) {
  return (
    <div className={styles.div}>
      <p> {name}</p>
      <p>{information}</p>
    </div>
  );
}
