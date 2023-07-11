"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { PostType, ProfileType, Tag } from "@/types/profile";
import styles from "../styles.module.scss";
import FollowerModal from "@/components/ProfileId/FollowerModel";
import FollowingModal from "@/components/ProfileId/FollowingModal";
import TagModal from "@/components/ProfileId/TagModal";
import ProfilePost from "@/components/ProfileId/ProfilePost";
import ProfileInfo from "@/components/ProfileId/ProfileInfo";
import AllProfileList from "@/components/ProfileId/AllProfileList";

const exampleProfiles = [
  {
    id: "1",
    name: "김한솔",
    information: "풋볼을 좋아함",
  },
  { id: "2", name: "김안나", information: "운동을 좋아함" },
];

export default function ProfileId({
  params: { id },
}: {
  params: { id: string };
}) {
  //처음 로딩됐을때 프로필을 불러오는 useState
  const [profiles, setProfiles] = useState([] as PostType[]);
  // 프로필을 불러오는 useState
  const [profilePosts, setProfilePosts] = useState([] as PostType[]);
  //태그를 불러오는 useState
  const [profileTags, setProfileTags] = useState([] as ProfileType[]);
  //팔로우 하고있는 프로필을 불러오는 useState
  const [followingProfiles, setFollowingProfile] = useState(
    [] as ProfileType[]
  );
  //유저를 팔로우하고 있는 프로ㅍㄹ을 불러오는 useState
  const [followerProfiles, setFollowerProfile] = useState([] as ProfileType[]);
  //Tag모달
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);
  //팔로우 하고있는 프로필을 보여주는 모달
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);
  //유저를 팔로우 하고있는 프로필을 보여주는 모달
  const [isFollowerModalOpen, setIsFollowerModalOpen] = useState(false);

  useEffect(() => {
    setProfiles(exampleProfiles);
    getProfilePosts(id).then((posts) => {
      if (posts) {
        setProfilePosts(posts);
      }
    });
  }, [id]);

  // 유저 로그인 id에 해당하는 게시글 가져오기
  const getProfilePosts = async (id: string, cursor?: string) => {
    try {
      // const response = await axios.get(`/api/profiles/${id}/posts`, {
      //   params: { cursor },
      //   baseURL: "http://localhost:8000",
      // });

      const profilePosts: ProfileType[] = exampleProfiles;
      return profilePosts;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };
  // 유저 로그인 id에 해당하는 태그들 가져오기
  const getProfileTags = async (id: string, cursor?: string) => {
    try {
      // const response = await axios.get(`/api/profiles/${id}/tags`, {
      //   params: { cursor },
      //   baseURL: "http://localhost:8000",
      // });

      const tags: ProfileType[] = exampleProfiles;
      return tags;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  //백엔드에서 팔로잉 목록 가져오기
  const getFollowingProfile = async (id: string, cursor?: string) => {
    try {
      // await axios.post(`/api/profiles/${id}/follows`, {
      //   profileId,
      //   baseURL: "http://localhost:8000",
      // });

      const profileToFollow: ProfileType[] = exampleProfiles;
      return profileToFollow;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //백엔드에서 팔로워 목록 가져오기
  const getFollowerProfile = async (id: string, cursor?: string) => {
    try {
      // await axios.post(`/api/profiles/${id}/follows`, {
      //   profileId,
      //   baseURL: "http://localhost:8000",
      // });

      const profileToFollower: ProfileType[] = exampleProfiles;
      return profileToFollower;
    } catch (error) {
      console.error("Error:", error);
    }
  };

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

  //태그 클릭시 openTagModal 실행
  const openTagModal = () => {
    setIsTagModalOpen(true);
    false;
  };

  // 팔로잉 모달 종료함수
  const closeFollowingModal = () => {
    setIsFollowingModalOpen(false);
  };

  //팔로워 모달 종료함수
  const closeFollowergModal = () => {
    setIsFollowerModalOpen(false);
  };

  //태그모달
  const toggleTagModal = () => {
    setIsTagModalOpen((prevState) => !prevState);
  };

  //페이지 로드시 태그, 팔로잉, 팔로워 목록 가져오기
  useEffect(() => {
    getProfileTags(id).then((tags) => {
      if (tags) {
        setProfileTags(tags);
      }
    });
    getFollowingProfile(id).then((profileToFollow) => {
      if (profileToFollow) {
        setFollowingProfile(profileToFollow);
      }
    });
    getFollowerProfile(id).then((profileToFollow) => {
      if (profileToFollow) {
        setFollowerProfile(profileToFollow);
      }
    });
  }, [id]);

  return (
    <main>
      {/* 전체 프로필 목록 */}
      <ul className={styles.ul}>
        <AllProfileList profiles={profiles} />
      </ul>

      {/* 프로필 정보 */}
      <article>
        <section className={styles.article}>
          <ProfileInfo id={id} profiles={profiles} />
          <button onClick={openTagModal}>태그</button>
          <button onClick={() => setIsFollowingModalOpen(true)}>팔로잉</button>
          <button onClick={() => setIsFollowerModalOpen(true)}>팔로워</button>
          <button>프로필 수정</button>
        </section>
      </article>

      {/* 프로필 게시물 */}
      <article>
        <ProfilePost profilePosts={profilePosts} />
      </article>

      {/* 태그 모달 */}
      {isTagModalOpen && (
        <TagModal profileTags={profileTags} toggleTagModal={toggleTagModal} />
      )}

      {/* 팔로잉 프로필 모달 */}
      {isFollowingModalOpen && (
        <FollowingModal
          followingProfiles={followingProfiles}
          closeFollowingModal={closeFollowingModal}
        />
      )}
      {/* 팔로워 프로필 모달 */}

      {isFollowerModalOpen && (
        <FollowerModal
          followerProfiles={followerProfiles}
          closeFollowergModal={closeFollowergModal}
        />
      )}
    </main>
  );
}
