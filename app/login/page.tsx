"use client";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

interface LoginForm {
  username: string;
  password: string;
}

export default function LoginPage() {
  const { replace } = useRouter();
  const [form, setForm] = useState({} as LoginForm);
  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => onFormSubmit(form, replace)(e),
    [form, replace]
  );
  const handleChange = onChange(setForm);

  return (
    <main>
      <h1>로그인</h1>
      <form onSubmit={handleFormSubmit}>
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
        <button type="submit">로그인</button>
        <dialog onClick={(e) => e.currentTarget.close()} id="failed">
          <p>로그인 실패</p>
        </dialog>
      </form>
    </main>
  );
}

/** 로그인 폼을 제출하는 함수 */
function onFormSubmit(
  form: LoginForm,
  replace: (path: string) => void
): React.FormEventHandler<HTMLFormElement> {
  return async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      const { access } = await res.json();
      localStorage.setItem("access", access); // TODO: 쿠키로 바꾸기
      replace("/");
    } else {
      console.log(res);
      (e.currentTarget ?? e.target)
        .querySelector<HTMLDialogElement>("#failed")
        ?.showModal();
    }
  };
}

/** 로그인 폼 키값을 name으로 받아서 value를 넣어줌 */
function onChange(setForm: React.Dispatch<React.SetStateAction<LoginForm>>) {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
}
