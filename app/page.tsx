import Link from "next/link";
import style from "app/styles.module.scss";

export default function Home() {
  return (
    <main>
      <Link href={"/login"}>
        <button type="button">로그인</button>
      </Link>

      <button type="button">
        <Link href={"/signup"}>회원가입</Link>
      </button>
    </main>
  );
}
