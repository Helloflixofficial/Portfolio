"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu, navItems } from "./Nav";
import th from "@/app/Images/Screenshot 2024-04-20 203141.png";
import Theme from "./Theme";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="background-light900_dark200 w-full shadow-light-300 dark:shadow-none sm:px-12 z-50 border sticky left-0 top-0 flex-between justify-between overflow-y-auto border-r">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <Image
              className="rounded-custom"
              src={th}
              alt="GitHub Avatar"
              width={180}
              height={150}
            />
          </Link>
          <div className="flex-between gap-5 flex">
            <Menu/>
            <Theme/>
          </div>
          <div>
            <p>GLOBLE SEARCH</p>
          </div>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
            <li className="inline-block relative">
              <a className="lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                {navItems.map((links) => {
                  const isActive =
                    pathname === links.route ||
                    pathname.startsWith(links.route);
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
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
