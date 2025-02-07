"use client";

import { Menus } from "@/static/Resource";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBarDash = () => {
  const path = usePathname();

  return (
    <div className="hidden lg:block">
      {Menus.dashboard.map((item) => (
        <div key={item.title}>
          <small>{item.title}</small>

          <div className="mt-2 mb-6 space-y-4">
            {item.items.map((item) => (
              <div key={item.name} className={`rounded-xl p-2.5 w-full tracking-wider cursor-pointer ${item.href === path ? "bg-primary text-white" : "bg-default-200/50 hover:scale-90 transition-all duration-300"}`}>
                <Link href={item.href}>{item.name}</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBarDash;
