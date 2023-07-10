import { ProfileType } from "@/types/profile";
import styles from "app/profile/styles.module.scss";
export default function FollowingModal({
  followingProfiles,
  closeFollowingModal,
}: {
  followingProfiles: ProfileType[];
  closeFollowingModal: () => void;
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