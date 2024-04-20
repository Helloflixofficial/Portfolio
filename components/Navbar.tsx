"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { navItems } from "./Nav";
import th from "@/app/Images/birds.png";
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
              width={100}
              height={100}
            />
            <p className="text-lg font-bold font-sans text-dark-100 darl:text-light900 max-sm:hidden">
              BOBY<span className="text-yellow-500">Sharmaji</span>
            </p>
          </Link>
          <div>
            <p>GLOBLE SEARCH</p>
          </div>
          <div className="flex-between gap-5 ">
            <Theme/>
            {/* <sign></sign> */}
            {/* Navigation bar  */}
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
