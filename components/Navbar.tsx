"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { navItems } from "./Nav";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <section className="bg-[#A79277] border sticky left-0 top-0 justify-between overflow-y-auto border-r">
        <div className="container  flex items-center justify-between">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
            <li className="inline-block relative">
              <a className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
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
      </section>
    </>
  );
};
