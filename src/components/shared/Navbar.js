"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import logo from '@/assets/htl.png'

const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "About",
    pathname: "/",
  },
  {
    route: "Contact",
    pathname: "/",
  },
];

function Navbar() {
  return (
    <>
      <AppBar position="static" className="bg-[#F7E5DA]">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image
            className="my-2"
              src={logo}
              width={100}
              height={100}
              alt="logo"
            /> <h2 className="text-black text-2xl font-bold">Deals</h2>
            <Box className="w-full text-center">
              {navItems.map((item) => (
                <Link key={item} href={item.pathname}>
                  <Button className="text-[#832B00]">{item.route}</Button>
                </Link>
              ))}
            </Box>
            <Box>
              <Stack direction="row" sx={{ "& svg": { color: "#832B00" } }}>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <FacebookIcon />
                </IconButton>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;