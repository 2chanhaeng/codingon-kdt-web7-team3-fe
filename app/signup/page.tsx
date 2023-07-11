"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface SignupForm {
  username: string;
  password: string;
}

export default function Signup() {
  const { replace } = useRouter();
  const [form, setForm] = useState({} as SignupForm);
  const handleRegister = onFormSubmit(form, replace);
  const handleChange = onChange(setForm);

  return (
    <div>
      <h4>회원가입</h4>
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
        <button type="submit">회원가입</button>
        <dialog onClick={(e) => e.currentTarget.close()} id="failed">
          <p>회원가입 실패</p>
        </dialog>
      </form>
    </div>
  );
}

/** 회원가입 폼을 제출하는 함수 */
function onFormSubmit(
  form: SignupForm,
  replace: (path: string) => void
): React.FormEventHandler<HTMLFormElement> {
  return async (e) => {
    e.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) replace("/login");
    else document.getElementById("failed")?.show();
  };
}

/** signupForm의 키값을 name으로 받아서 value를 넣어줌 */
function onChange(setForm: React.Dispatch<React.SetStateAction<SignupForm>>) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
}
