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
  useEffect(() => {
    axios.get("/api/profiles").then((response) => {
      setProfiles(response.data);
    });
  });
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
