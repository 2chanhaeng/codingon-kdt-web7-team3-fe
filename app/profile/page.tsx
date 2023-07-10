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

  useEffect(() => {
    axios.get("/api/profiles").then((response) => {
      setProfiles(response.data);
    });
  });
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
