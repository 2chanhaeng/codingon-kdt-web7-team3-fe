import Link from "next/link";
import Header from "@/components/Main/Header";
import MainFeaturedPost from "@/components/Main/MainFeaturedPost";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import style from "./styles.module.scss";
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
