"use client"
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
export const Menu = () => {
  // const { mode, setMode } = useTheme();
  return (
    <Menubar className="relative border-none shadow-none bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state-open]:bg-light-900 dark:focus:bg-dark-200 [state-open]:bg-dark-200">
        <h1>⌘MENU</h1>
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px]  rounded border py-2  dark:border-dark-400 dark:bg-dark-300">
          <MenubarItem>
            News <MenubarShortcut>T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
