"use client";

import { useGetUser } from "@/lib/hooks/useAdmin";
import { useDarkMode } from "@/lib/utils/useDarkMode";
import { Icons } from "@/static/Icons";
import { Menus } from "@/static/Resource";
import {
  Avatar,
  Button,
  Divider,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";

const NavDash = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { data } = useGetUser();
  const path = usePathname();

  const user = data?.result || {};

  // TODO: BUG INVALIDATE QUERIES
  const useRefreshAllData = () => {
    const queryClient = useQueryClient();
    
    return () => queryClient.invalidateQueries();
  };

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
          <Button isIconOnly onPress={useRefreshAllData()} variant="light">
            {Icons.Refresh}
          </Button>
        </NavbarItem>
        <NavbarItem className="flex gap-4 items-center">
          <Button isIconOnly variant="light" onPress={toggleDarkMode}>
            {isDarkMode ? Icons.Moon : Icons.Sun}
          </Button>
        </NavbarItem>
        <Divider className="h-8" orientation="vertical" />
        <NavbarItem className="flex gap-4 items-center">
          <p>{user?.name ?? ""}</p>
          {user?.photo && (
            <Avatar
              src={`${process.env.NEXT_PUBLIC_STORAGE_ADMIN}${user?.photo}`}
              isBordered
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
              <Link
                color={item.href === path ? "primary" : "foreground"}
                href={item.href}
                className="w-full"
              >
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
