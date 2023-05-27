"use client";

import React from "react";

import Styles from "./Header.module.css";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Menu from "@mui/base/Menu";
import MenuItem from "@mui/base/MenuItem";
import IconButton from "@mui/material/IconButton";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

import Image from "next/image";
import { Button } from "@mui/material";

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
        <Image
          src="/logo.png"
          width={100}
          height={50}
          alt="Blogify"
          className={Styles.logo}
        />
        <ul className={Styles.links}>
          <Button sx={{ color: "#282828" }} variant="text">
            Home
          </Button>
          <Button sx={{ color: "#282828" }} variant="text">
            Posts
          </Button>
          <Button sx={{ color: "#282828" }} variant="text">
            Authors
          </Button>
          <Button sx={{ color: "#282828" }} variant="text">
            Contact
          </Button>
        </ul>
        <Button sx={{ color: "#282828" }} variant="text">
          LOGIN
        </Button>
      </Container>
    </Box>
  );
}
