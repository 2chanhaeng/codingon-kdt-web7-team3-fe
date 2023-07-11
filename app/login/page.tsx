"use client";
import axios from "axios";
import React, { useCallback, useState } from "react";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [success, setResult] = useState("");

  const handleLogin = async () => {
    if (userId === "" || userPw === "") {
      setResult("아이디와 비밀번호를 입력하세요");
      localStorage.setItem("login", "true");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        username: userId,
        password: userPw,
      });
interface LoginForm {
  username: string;
  password: string;
}

      if (response.data.success === true) {
        setResult("로그인에 성공하였습니다.");
      } else {
        setResult("로그인에 실패하였습니다.");
      }
    } catch (error) {
      setResult("로그인 요청을 처리하는 동안 오류가 발생하였습니다.");
    }
  };

  return (
    <main>
      <h4>로그인</h4>
      <form>
        <label htmlFor="id">아이디</label>
        <input
          type="text"
          id="id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <label htmlFor="pw">비밀번호</label>
        <input
          type="password"
          id="pw"
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleLogin}>
          로그인
        </button>
      </form>
      <br />
      <article
        className="result"
        style={{ color: success.startsWith("로그인에 성공") ? "blue" : "red" }}
      >
        {success}
      </article>
    </main>
  );
}
/** 로그인 폼 키값을 name으로 받아서 value를 넣어줌 */
function onChange(setForm: React.Dispatch<React.SetStateAction<LoginForm>>) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
}
