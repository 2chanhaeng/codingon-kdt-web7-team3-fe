import Link from "next/link";

export default function Home() {
  return (
    <nav>
      메인
      <Link href={"/login"}>로그인 </Link>
      <Link href={"/signup"}>회원가입</Link>
    </nav>
  );
}
