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

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //회원가입 페이지 안올림
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log(data);
      const { success } = data;
      if (success) {
        //회원가입 성공
        replace("/login");
      } else {
        // 회원가입 실패
      }
    } catch (error) {
      // 회원가입 실패
    }
  };

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

/** signupForm의 키값을 name으로 받아서 value를 넣어줌 */
function onChange(setForm: React.Dispatch<React.SetStateAction<SignupForm>>) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
}
