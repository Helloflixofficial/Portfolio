"use client";
import an from "@/app/Images/th.jpeg";
// import { useTheme } from "@/constants/ThemeProvider";
import { useTheme } from "next-themes";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
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
          {themes.map((item) => (
            <MenubarItem
              key={item.value}
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              onClick={() => {
                setMode(item.value);
                if (item.value !== "System") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem;
                  ("theme");
                }
              }}
            >
              <Image
                src={item.icons}
                alt={item.value}
                height={16}
                width={16}
                className={`${mode === item.value && "Active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 ${mode === item.value ? "text-primary-500" : "text-dark100_light900"}`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
