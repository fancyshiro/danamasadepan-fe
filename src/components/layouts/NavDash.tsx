"use client";

import { useGetAdmin } from "@/lib/hooks/useAdmin";
import { Menus } from "@/static/Resource";
import {
  Avatar,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { usePathname } from "next/navigation";

const NavDash = () => {
  const path = usePathname();
  const { data } = useGetAdmin("detail");

  const user = data?.result;

  return (
    <Navbar
      isBordered
      maxWidth="full"
      classNames={{
        base: "bg-transparent lg:max-w-[1324px] mx-auto py-3 z-50",
      }}
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <div className="flex flex-col">
            <h5 className="font-bold font-work">Dashboard</h5>
            <time>Senin, 10 Februari 2023</time>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden lg:flex">
        <NavbarItem className="flex gap-4 items-center">
          <p>{user?.name ?? ""}</p>
          {user?.photo && (
            <Avatar
              as="a"
              isBordered
              src={`${process.env.NEXT_PUBLIC_STORAGE_ADMIN}${user?.photo}`}
              href={`${process.env.NEXT_PUBLIC_STORAGE_ADMIN}${user?.photo}`}
            />
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="z-50 mt-8 space-y-2">
        {Menus.dashboard.map((item) =>
          item.items.map((item) => (
            <NavbarMenuItem key={item.name}>
              <Link color={item.href === path ? "primary" : "foreground"}  href={item.href} className="w-full">
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))
        )}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavDash;
