import { ProfileType } from "@/types/profile";
import styles from "app/profile/styles.module.scss";

export default function TagModal({
  profileTags,
  toggleTagModal,
}: {
  profileTags: ProfileType[];
  toggleTagModal: () => void;
}) {
  return (
    <article className={styles.modal}>
      <section className={styles.modalContent}>
      </section>
    </article>
  );
}
