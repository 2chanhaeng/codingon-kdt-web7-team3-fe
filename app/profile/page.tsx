"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ProfileType } from "@/types/profile";


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
          <ProfileCompoenent profile={profile} key={profile.id} />
        ))}
        <li> 추가 생성 </li>
      </ul>
    </main>
  );
}

function ProfileCompoenent({
  profile: { id, name, infomation },
}: {
  profile: Profile;
}) {
  return (
    <li>
      <Link href={`/profiles/${id}`}>{name}</Link>
      <p>{infomation}</p>
    </li>
  );
}
