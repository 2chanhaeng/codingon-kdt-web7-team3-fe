import Link from "next/link";
import Header from "@/components/Main/Header";
import MainFeaturedPost from "@/components/Main/MainFeaturedPost";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import style from "./styles.module.scss";
export default function Home() {
  const mainFeaturedPost = {
    title: "취미로 만나는 우리",
    description: "취미 기반 커뮤니티",
    image: "/mainimage.jpg",
    imageText: "main image description",
    linkText: "Continue reading…",
  };

  return (
    <main>
      <Header />

    </main>
  );
}
