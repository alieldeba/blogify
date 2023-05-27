"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";

import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Container
        fixed
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <Box>
          <Typography variant="h2" gutterBottom>
            Best Place Where You Get Posts & Blogs
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ color: "#282828" }}
          >
            Try searching for our best posts and authors, and if there are
            anything wrong just contact us.
          </Typography>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              borderRadius: "20px",
              bgcolor: "#282828",
              fontWeight: "300",
              ":hover": { bgcolor: "#303030" },
            }}
          >
            <Link href="/posts">See Posts</Link>
          </Button>
        </Box>
        <Image src="/hero.png" width={500} height={500} alt="Blogify" />
      </Container>
    </>
  );
}
