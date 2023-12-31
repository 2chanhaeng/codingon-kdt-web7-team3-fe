"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProfileType } from "@/types/profile";
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
        profname: name,
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
    setUserName(profile.profname);
    setUserInfo(profile.information);
    openModal();
  };

  //선택된 프로필이 있으면 프로필의 정보를 수정한 후 업데이트한다.
  const saveProfile = async () => {
    if (selectedProfile) {
      const updatedProfile: ProfileType = {
        ...selectedProfile,
        profname: name,
        information,
      };

      try {
        const response = await axios.patch(
          `/api/profiles/${selectedProfile.id}`,
          updatedProfile
        );
        if (response.data.success === true) {
          // Update the profiles state with the updated profile
          const updatedProfiles = profiles.map((profile) =>
            profile.id === selectedProfile.id ? updatedProfile : profile
          );
          setProfiles(updatedProfiles);
          alert("프로필 수정 성공");
          closeModal();
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
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
      <Navbar />
      <ul>
        {/* 저장되어있던 프로필의 배열을 리스트로 뽑아주는 함수.*/}
        {profiles.map((profile) => (
          <ProfileComponent
            profile={profile}
            key={profile.id}
            handleProfileEdit={handleProfileEdit}
          />
        ))}
        <li>
          <button onClick={openModal}>프로필 생성</button>
        </li>
      </ul>

      {/* 모달 틀 */}

      {isOpen && (
        <div className={styles.modal}>
          <div className={styles["modal-content"]}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>

            <h2>{selectedProfile && "프로필 생성하기"}</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                createProfile();
              }}
            >
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setUserName(e.target.value)}
              ></input>

              <br />

              <label htmlFor="information">내용</label>
              <input
                type="text"
                id="information"
                value={information}
                onChange={(e) => setUserInfo(e.target.value)}
              ></input>

              <button type="submit">{selectedProfile && "생성"}</button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
