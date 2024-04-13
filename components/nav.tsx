"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import me from "@/app/Images/me.jpeg";
import logosire from "@/app/Images/logosire.png";
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
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const openDropdown = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsDropdownOpen(true);
  };

  // const closeDropdown = () => {
  //   setIsDropdownOpen(true);
  // };
  const pathname = usePathname();
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blueGray-800">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#"
            >
              <Image
                className="rounded-custom"
                src={logosire}
                alt="GitHub Avatar"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div
            className={`lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden bg-blueGray-800 ${
              isDropdownOpen ? "block" : "hidden"
            }`}
            id="example-collapse-navbar"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
              <li className="inline-block relative">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#pablo"
                  onClick={openDropdown}
                >
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
                <div
                  className={`bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 ${
                    isDropdownOpen ? "block" : "hidden"
                  }`}
                  id="demo-pages-dropdown"
                >
                  {/* NEXT PLAN */}
                </div>
              </li>
              {/* NEXT */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
