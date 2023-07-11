"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ProfileType, ProfilePageData } from "@/types/profile";
import styles from "../styles.module.scss";
import FollowerModal from "@/components/ProfileId/FollowerModel";
import FollowingModal from "@/components/ProfileId/FollowingModal";
import TagModal from "@/components/ProfileId/TagModal";
import ProfilePost from "@/components/ProfileId/ProfilePost";
import ProfileInfo from "@/components/ProfileId/ProfileInfo";
import getProfilePageData from "./request";

const exampleProfiles = [
  {
    id: "1",
    name: "김한솔",
    information: "풋볼을 좋아함",
  },
  {
    id: "2",
    name: "김안나",
    information: "운동을 좋아함",
  },
] as ProfilePageData[];
//ProfileType을 상속받는 ProfilePageData
//ProfileType[]은 상속받은 부모 ProfileType로부터 사용가능하고, Tag[]는 ProfilePageData에서 사용
type asd = React.Dispatch<React.SetStateAction<boolean>>;
export default function ProfileId({
  params: { id },
}: {
  params: { id: string };
}) {
  //처음 로딩됐을때 프로필을 불러오는 useState
  const initProfile = {
    id: "",
    name: "",
    information: "",
    tags: [],
    posts: [],
    followers: [],
    follows: [],
  };
  const [profile, setProfile] = useState<ProfilePageData>(initProfile);
  //Tag모달
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);

  //팔로우 하고있는 프로필을 보여주는 모달
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);
  //유저를 팔로우 하고있는 프로필을 보여주는 모달
  const [isFollowerModalOpen, setIsFollowerModalOpen] = useState(false);

  useEffect(() => {
    // page init
    const profile = exampleProfiles.find((prof) => prof.id === id);
    if (!profile) {
      // 404 redirect
      return;
    }
    getProfilePageData(id).then((data) => {
      const profileData = { ...profile, ...data };
      setProfile(profileData);
    });
  }, [id]);

  const ProfileEdit = async (id: string) => {
    try {
      // await axios.post(`/api/profiles/${id}`, {
      //   profile,
      //   baseURL: "http://localhost:8000",
      // });

      const profileToFollower: ProfileType[] = exampleProfiles;
      return profileToFollower;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main>
      {/* 프로필 정보 */}
      <article>
        <section className={styles.article}>
          <ProfileInfo profile={profile} />
          <button onClick={() => setIsTagModalOpen(true)}>태그</button>
          <button onClick={() => setIsFollowingModalOpen(true)}>팔로잉</button>
          <button onClick={() => setIsFollowerModalOpen(true)}>팔로워</button>
          <button>프로필 수정</button>
        </section>
      </article>

      {/* 프로필 게시물 */}
      <article>
        <ProfilePost profilePosts={profile.posts} />
      </article>

      {/* 태그 모달 */}
      <dialog
        className={styles.dialog}
        open={isTagModalOpen}
        onClose={() => setIsTagModalOpen(false)}
      >
        <TagModal profile={profile} setIsTagModalOpen={setIsTagModalOpen} />
      </dialog>

      {/* 팔로잉 프로필 모달 */}
      <dialog
        className={styles.dialog}
        open={isFollowingModalOpen}
        onClose={() => setIsFollowingModalOpen(false)}
      >
        <FollowingModal
          profile={profile}
          setIsFollowingModalOpen={setIsFollowingModalOpen}
        />
      </dialog>

      {/* 팔로워 프로필 모달 */}
      <dialog
        className={styles.dialog}
        open={isFollowerModalOpen}
        onClose={() => setIsFollowerModalOpen(false)}
      >
        <FollowerModal
          profile={profile}
          setIsFollowerModalOpen={setIsFollowerModalOpen}
        />
      </dialog>
    </main>
  );
}
