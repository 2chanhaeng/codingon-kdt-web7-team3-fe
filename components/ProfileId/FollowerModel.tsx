import { ProfileType } from "@/types/profile";
import styles from "app/profile/styles.module.scss";

export default function FollowerModal({
  followerProfiles,
  closeFollowergModal,
}: {
  followerProfiles: ProfileType[];
  closeFollowergModal: () => void;
}) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Follower</h2>
        <ul>
          {followerProfiles.map((profile) => (
            <li key={profile.id}>{profile.name}</li>
          ))}
        </ul>
        <button onClick={closeFollowergModal}>닫기</button>
      </div>
    </div>
  );
}
