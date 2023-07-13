import { ProfileType } from "@/types/profile";
import styles from "app/profile/styles.module.scss";
export default function ProfileInfo({
  profile: { profname, information },
}: {
  profile: ProfileType;
}) {
  return (
    <div className={styles.div}>
      <p> {profname}</p>
      <p>{information}</p>
    </div>
  );
}
