"use client";
import axios from "axios";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ProfileType, ProfilesData } from "@/types/profile";
import ProfileComponent from "@/components/Profile";
import styles from "./styles.module.scss";
import Navbar from "@/components/Navbar";

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState([] as ProfileType[]);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setUserName] = useState("");
  const [information, setUserInfo] = useState("");
  const [selectedProfile, setSelectedProfile] = useState<ProfileType | null>(
    null
  );

  //profile창이 실행되자마자 백엔드에서 값을 불러옴
  useEffect(() => {
    axios.get("/api/profiles").then((response) => {
      setProfiles(response.data);
    });
  }, []);

  //modal 함수 openModal,closeModal
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProfile(null);
    setUserName("");
    setUserInfo("");
  };

  //'생성' 버튼을 누르면 값을 보내주는 함수 createProfile
  const createProfile = async () => {
    try {
      const profile = {
        name,
        information,
      };

      //'생성'버튼을 눌러 모달에서 값을 입력해 백엔드로 보내는 코드
      //값이 정상적으로 저장되었다면 배열에 값들을 추가하고 li태그에 값을 출력해줌.
      const response = await axios.post("/api/profiles", profile);
      const { id } = response.data;
      if (id) {
        setProfiles((newProfiles) => newProfiles.concat([{ id, ...profile }]));
        alert("프로필 생성 성공");
        closeModal();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //선택된 프로필을 인자로 받아 set*으로 상태를 업데이트 후 모달을 연다.
  const handleProfileEdit = (profile: ProfileType) => {
    setSelectedProfile(profile);
    setUserName(profile.name);
    setUserInfo(profile.information);
    openModal();
  };

  //선택된 프로필이 있으면 프로필의 정보를 수정한 후 업데이트한다.
  const saveProfile = async () => {
    if (selectedProfile) {
      const updatedProfile: ProfileType = {
        ...selectedProfile,
        name,
        information,
      };

      try {
        const response = await axios.patch(
          `/api/profiles/${selectedProfile.id}`,
          updatedProfile
        );
  };

  //비로그인시 인기순으로 프로필 정렬
  const reqProfiles = (e: Event) => {
    const cursor = profiles.at(-1)?.id ?? "";
    const famousApi = new URL("/api/profiles/famous", window.location.href);
    famousApi.searchParams.append("cursor", cursor);
    fetch(famousApi)
      .then((res) => res.json())
      .then(({ profiles: newProfiles }: { profiles: ProfileType[] }) =>
        setProfiles((prof) => prof.concat(newProfiles))
      );
  };
  return (
    <main>
      <ul>
        {profiles.map((profile) => (
          <ProfileComponent profile={profile} key={profile.id} />
        ))}
        <li> 추가 생성 </li>
      </ul>
    </main>
  );
}
