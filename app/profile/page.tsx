"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProfileType } from "@/types/profile";
import ProfileComponent from "@/components/Profile";


export default function profiles() {
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
