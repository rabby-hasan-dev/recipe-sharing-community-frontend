"use client";

import Link from "next/link";
import { BellIcon, Cookie } from "lucide-react";
import {
  Navbar,
  NavbarItem,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/navbar";
import NextLink from "next/link";

import NavbarDropdwon from "@/src/components/UI/NavbarDropdwon";
// import SearchInput from './SerchInput';
import { ThemeSwitch } from "@/src/components/UI/theme-switch";
import SearchInput from "@/src/app/(WithAuthLayout)/_components/module/navbar/SearchInput";

const FeedNavbar = () => {
  return (
    <Navbar maxWidth="xl" position="sticky">
      {/* Left Section: Logo */}
      <NavbarContent className="flex items-center space-x-4" justify="start">
        <NavbarBrand className="flex items-center space-x-2">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Cookie />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <SearchInput />
      </NavbarContent>

      {/* Right Section: Icons and Profile */}
      <NavbarContent
        as="div"
        className="flex items-center space-x-4"
        justify="end"
      >
        <NavbarItem>
          <Link aria-label="Notifications" href="#notifications">
            <BellIcon className="w-6 h-6 cursor-pointer transition-colors duration-150 hover:text-blue-600" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>

        {/* Profile Icon and Dropdown */}
        <NavbarItem>
          <NavbarDropdwon />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default FeedNavbar;
