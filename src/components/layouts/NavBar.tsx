"use client";

import { useDarkMode } from "@/lib/utils/useDarkMode";
import { Icons } from "@/static/Icons";
import { Menus } from "@/static/Resource";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button, Divider, Link } from "@heroui/react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Navbar classNames={{ base: "shadow-md py-2 border-b " }}>
      <NavbarBrand>
        <h6>Dana Masa Depan</h6>
      </NavbarBrand>
      <NavbarContent justify="center" className="gap-8 hidden md:flex">
        {Menus.home.map((item) => (
          <NavbarItem key={item.name}>
            <Link color={item.href === path ? "primary" : "foreground"} href={item.href} underline={item.href === path ? "always" : "hover"}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button isIconOnly variant="light" onPress={toggleDarkMode}>{isDarkMode ? Icons.Moon : Icons.Sun}</Button>
        </NavbarItem>
        {/* <NavbarItem>
          <Button isIconOnly color="primary" radius="full">{Icons.User}</Button>
        </NavbarItem> */}
        <Divider orientation="vertical" className="h-8"/>
        <NavbarItem>
          <Button color="primary" href="#sign-in" as='a'>
            Masuk
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
