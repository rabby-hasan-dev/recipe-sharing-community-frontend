

"use client"

import Link from 'next/link';
import { BellIcon, MessageSquareIcon, HomeIcon, Cookie } from 'lucide-react';
import { Navbar, NavbarItem, NavbarBrand, NavbarContent } from '@nextui-org/navbar';
import NavbarDropdwon from '@/src/components/UI/NavbarDropdwon';
import NextLink from "next/link";
import SearchInput from './SerchInput';

const FeedNavbar = () => {


    return (
        <Navbar maxWidth="xl" position="sticky">

            {/* Left Section: Logo */}
            <NavbarContent justify="start" className="flex items-center space-x-4">
                <NavbarBrand className="flex items-center space-x-2">
                    <NextLink className="flex justify-start items-center gap-1" href="/">
                        <Cookie />
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify='center'>
                <SearchInput />
            </NavbarContent>

            {/* Right Section: Icons and Profile */}
            <NavbarContent as="div" justify="end" className="flex items-center space-x-4">
                <NavbarItem>
                    <Link href="/recipe-feeds" aria-label="Home">
                        <HomeIcon className="w-6 h-6 cursor-pointer transition-colors duration-150 hover:text-blue-600" />
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="/#messages" aria-label="Messages">
                        <MessageSquareIcon className="w-6 h-6 cursor-pointer transition-colors duration-150 hover:text-blue-600" />
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link href="/#notifications" aria-label="Notifications">
                        <BellIcon className="w-6 h-6 cursor-pointer transition-colors duration-150 hover:text-blue-600" />
                    </Link>
                </NavbarItem>

                {/* Profile Icon and Dropdown */}
                <NavbarItem className="flex gap-2">
                    <NavbarDropdwon />
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    );
};

export default FeedNavbar;


