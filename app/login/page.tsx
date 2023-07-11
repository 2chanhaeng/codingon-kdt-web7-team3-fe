"use client";
import axios from "axios";
import React, { useCallback, useState } from "react";

export default function LoginPage() {
interface LoginForm {
  username: string;
  password: string;
}

  const [form, setForm] = useState({} as LoginForm);
  const handleChange = onChange(setForm);

  return (
    <main>
      <h1>로그인</h1>
      <form onSubmit={handleRegister}>
        <label>
          아이디
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <br />
        <label>
          비밀번호
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          로그인
        </button>
        <dialog onClick={(e) => e.currentTarget.close()} id="failed">
          <p>로그인 실패</p>
        </dialog>
      </form>
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
