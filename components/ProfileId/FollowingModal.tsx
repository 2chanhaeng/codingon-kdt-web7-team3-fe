import { Dispatch, SetStateAction } from "react";
import { ProfilePageData } from "@/types/profile";
import styles from "app/profile/styles.module.scss";
export default function FollowingModal({
  profile,
  setIsFollowingModalOpen,
}: {
  profile: ProfilePageData;
  setIsFollowingModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <article className={styles.modal}>
      <section className={styles.modalContent}>
        <h2>Following</h2>
        <ul>
          {profile.follows.map(({ id, profname }) => (
            <li key={id}>{profname}</li>
          ))}
        </ul>
        <button onClick={() => setIsFollowingModalOpen(false)}>닫기</button>
      </section>
    </article>
  );
}
