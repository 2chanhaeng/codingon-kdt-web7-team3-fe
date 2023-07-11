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
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Following</h2>
        <ul>
          {followingProfiles.map((profile) => (
            <li key={profile.id}>{profile.name}</li>
          ))}
        </ul>
        <button onClick={closeFollowingModal}>닫기</button>
      </div>
    </div>
  );
}
