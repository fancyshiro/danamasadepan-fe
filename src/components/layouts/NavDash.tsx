"use client";

import { Menus } from "@/static/Resource";
import {
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";

const NavDash = () => {
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
          <p>Super Admin</p>
          <Avatar isBordered />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="z-50 mt-8 space-y-2">
        {Menus.dashboard.map((item) =>
          item.items.map((item) => (
            <NavbarMenuItem as="a">{item.name}</NavbarMenuItem>
          ))
        )}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavDash;
