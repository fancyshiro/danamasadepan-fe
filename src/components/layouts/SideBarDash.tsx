"use client";

import { Icons } from "@/static/Icons";
import { Menus } from "@/static/Resource";
import { Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useLogout } from "@/lib/hooks/useAuth";

const SideBarDash = () => {
  const path = usePathname();
  const { mutate, isPending } = useLogout()

  return (
    <div className="hidden lg:block">
      {Menus.dashboard.map((item) => (
        <div key={item.title}>
          <small className="tracking-wider">{item.title}</small>

          <div className="mt-2 mb-6 space-y-4">
            {item.items.map((item) => (
              <div key={item.name} className={`rounded-xl p-2.5 w-full tracking-wider cursor-pointer flex items-center gap-2 ${item.href === path ? "bg-primary text-white" : "bg-default-200/50 hover:scale-95 transition-all duration-300"}`}>
                <span>{item.icon}</span>
                <Link href={item.href}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Button
        color="danger"
        variant="flat"
        startContent={Icons.Logout}
        fullWidth
        onPress={() => mutate()}
        isDisabled={isPending}
      >
        Logout
      </Button>
    </div>
  );
};

export default SideBarDash;
