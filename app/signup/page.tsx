"use client";
import axios from "axios";
import React, { useState } from "react";

interface SignupForm {
  username: string;
  password: string;
}

export default function Signup() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [result, setResult] = useState("");

  const handleRegister = async () => {
    //회원가입 페이지 안올림
    if (userId === "" || userPw === "") {
      setResult("아이디와 비밀번호를 입력하세요");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/signup", {
        id: userId,
        pw: userPw,
      });

      if (response.data.result === true) {
        setResult("회원가입에 성공하였습니다.");
      } else {
        setResult("회원가입에 실패하였습니다.");
      }
    } catch (error) {
      setResult("회원가입 요청을 처리하는 동안 오류가 발생하였습니다.");
    }
  };

  return (
    <div>
      <h4>회원가입</h4>
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
        <button type="button" onClick={handleRegister}>
          회원가입
        </button>
      </form>
      <br />
      <div
        className="result"
        style={{ color: result.startsWith("회원가입에 성공") ? "blue" : "red" }}
      >
        {result}
      </div>
    </div>
  );
}

/** signupForm의 키값을 name으로 받아서 value를 넣어줌 */
function onChange(setForm: React.Dispatch<React.SetStateAction<SignupForm>>) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
}
