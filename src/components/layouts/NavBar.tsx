"use client";

import { useLogout } from "@/lib/hooks/useAuth";
import { useDarkMode } from "@/lib/utils/useDarkMode";
import { Icons } from "@/static/Icons";
import { Menus } from "@/static/Resource";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button, Divider, Link } from "@heroui/react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { mutate } = useLogout();

  // const role =  localStorage.getItem("role");
  const role =  'student';

  return (
    <Navbar classNames={{ base: "shadow-md py-2 border-b " }}>
      <NavbarBrand>
        <h6>Dana Masa Depan</h6>
      </NavbarBrand>

      <NavbarContent justify="center" className="gap-8 hidden md:flex">
        {Menus.home.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              color={item.href === path ? "primary" : "foreground"}
              href={item.href}
              underline={item.href === path ? "always" : "hover"}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <Button isIconOnly variant="light" onPress={toggleDarkMode}>
          {isDarkMode ? Icons.Moon : Icons.Sun}
        </Button>
        <Divider className="h-8" orientation="vertical" />
        {role === "student" ? (
          <>
            <Button isIconOnly variant="light" as="a" href="/student/profile">
              {Icons.User}
            </Button>
            <Button isIconOnly variant="flat" color="danger" onPress={() => mutate()}>
              {Icons.Logout}
            </Button>
          </>
        ) : (
          <Button color="primary" href="/#sign-in" as="a">
            Masuk
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
