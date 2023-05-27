"use client";

import React from "react";

import Styles from "./Header.module.css";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Menu from "@mui/base/Menu";
import MenuItem from "@mui/base/MenuItem";
import IconButton from "@mui/material/IconButton";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import SendIcon from "@mui/icons-material/Send";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Box sx={{ bgcolor: "#FAFAFA" }}>
      <Container
        fixed
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <Image
            src="/logo.png"
            width={100}
            height={50}
            alt="Blogify"
            className={Styles.logo}
          />
        </Link>
        <ul className={Styles.links}>
          <Button sx={{ color: "#282828" }} variant="text">
            <Link href="/">Home</Link>
          </Button>
          <Button sx={{ color: "#282828" }} variant="text">
            <Link href="/posts">Posts</Link>
          </Button>
          <Button sx={{ color: "#282828" }} variant="text">
            <Link href="/authors">Authors</Link>
          </Button>
          <Button sx={{ color: "#282828" }} variant="text">
            <Link href="/contact">Contact</Link>
          </Button>
        </ul>
        <Button sx={{ color: "#282828" }} endIcon={<SendIcon />} variant="text">
          <Link href="/login">LOGIN</Link>
        </Button>
      </Container>
    </Box>
  );
}
