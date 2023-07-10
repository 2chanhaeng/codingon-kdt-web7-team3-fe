export default function ProfileId({ params }: { params: number }) {
  console.log(params);
  return "profileid";
"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { ProfileType } from "@/types/profile";
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
  const [profiles, setProfiles] = useState([] as ProfileType[]);
  useEffect(() => {
    setProfiles(exampleProfiles);
    getProfilePosts(id).then((posts) => {
      if (posts) {
        setProfilePosts(posts);
      }
    });
  }, [id]);
  );
}
