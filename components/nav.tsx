"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
export const navItems = [
  {
    label: "About",
    route: "/about",
    imgUrl: "/icon/something.svg",
  },
  {
    label: "Resume",
    route: "/resume",
    imgUrl: "/icon/something.svg",
  },
  {
    label: "Portfolio",
    route: "/portfolio",
    imgUrl: "/icon/something.svg",
  },
  {
    label: "Contact",
    route: "/contact",
    imgUrl: "/icon/something.svg",
  },
];

export const Nav = () => {
  const pathname = usePathname();
  return (
    <div>
      {navItems.map((links) => {
        const isActive =
          pathname === links.route || pathname.startsWith(links.route);
        return (
          <Link
            href={links.route}
            key={links.label}
            className={cn(
              " gap-x-4 items-center p-4 rounded-lg justify-start",
              { "bg-blue-1": isActive }
            )}
          >
            {links.label}
          </Link>
        );
      })}
    </div>
  );
};
