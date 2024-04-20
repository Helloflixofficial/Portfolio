"use client";
import an from "@/app/Images/th.jpeg";
import { useTheme } from "next-themes";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { themes } from "@/constants/Index";
const Theme = () => {
  const { mode, setMode } = useTheme();
  return (
    <Menubar className="relative border-none shadow-none bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state-open]:bg-light-900 dark:focus:bg-dark-200 [state-open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src={an}
              width={20}
              height={20}
              alt="moon"
              className="active-theme"
            />
          ) : (
            <h1>⌘ MENU</h1>
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px]  rounded border py-2  dark:border-dark-400 dark:bg-dark-300">
          {themes.map((data)=> (
            <MenubarItem />
          ))}
          <MenubarItem>
            News <MenubarShortcut>T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Treanding <MenubarShortcut>T</MenubarShortcut> </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share <MenubarShortcut>T</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print <MenubarShortcut>T</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;