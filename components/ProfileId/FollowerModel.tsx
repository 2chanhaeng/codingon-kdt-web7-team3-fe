import { Dispatch, SetStateAction } from "react";
import { ProfilePageData } from "@/types/profile";
import styles from "app/profile/styles.module.scss";

export default function FollowerModal({
  profile,
  setIsFollowerModalOpen,
}: {
  profile: ProfilePageData;
  setIsFollowerModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <article className={styles.modal}>
      <section className={styles.modalContent}>
        <h2>Follower</h2>
        <ul>
          {profile.follows.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <button onClick={() => setIsFollowerModalOpen(false)}>닫기</button>
      </section>
    </article>
  );
}
