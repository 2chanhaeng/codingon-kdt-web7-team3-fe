import { Dispatch, SetStateAction } from "react";
import { ProfilePageData } from "@/types/profile";
import styles from "app/profile/styles.module.scss";

export default function TagModal({
  profile,
  setIsTagModalOpen,
}: {
  profile: ProfilePageData;
  setIsTagModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <article className={styles.modal}>
      <section className={styles.modalContent}>
        <h2>태그</h2>
        <ul>
          {profile.tags.map(({ id, tagname }) => (
            <li key={id}>{tagname}</li>
          ))}
        </ul>
        <button onClick={() => setIsTagModalOpen(false)}>닫기</button>
      </section>
    </article>
  );
}
