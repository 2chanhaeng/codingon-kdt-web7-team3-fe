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
          {profileTags.map((tag) => (
            <li key={tag.id}>{tag.tagname}</li>
          ))}
        </ul>
        <button onClick={toggleTagModal}>닫기</button>
      </section>
    </article>
  );
}
