"use client";
import { useState } from "react";
import axios from "axios";

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

      if (response.data.success === true) {
        setResult("로그인에 성공하였습니다.");
      } else {
        setResult("로그인에 실패하였습니다.");
      }
    } catch (error) {
      setResult("로그인 요청을 처리하는 동안 오류가 발생하였습니다.");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get("/api/logout"); // 로그아웃 요청
      window.location.href = "/login"; // 리디렉션
    } catch (error) {
      console.log("로그아웃 중 에러 발생:", error);
      localStorage.clear();
    }
  };

  return (
    <div>
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
        <button type="button" onClick={handleLogout}>
          로그아웃
        </button>
      </form>
      <br />
      <div
        className="result"
        style={{ color: success.startsWith("로그인에 성공") ? "blue" : "red" }}
      >
        {success}
      </div>
    </div>
  );
}
