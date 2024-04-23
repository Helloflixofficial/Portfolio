"use client";
import { useState, useEffect, createContext, useContext } from "react";
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
interface ThemeContextType {
  memo: string;
  setMemo: (memo: string) => void;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [memo, setMemo] = useState("");
  const handleTheme = () => {
    if (
      (localStorage.theme === "light" || (!("theme" in localStorage) && window),
      matchMedia("(prefers-color-scheme : dark)").matches)
    ) {
      setMemo("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMemo("light");
      document.documentElement.classList.remove("dark");
    }

    useEffect(() => {
      handleTheme();
    }, [memo]);

    return (
      <ThemeContext.Provider value={{ memo, setMemo }}>
        {children}
      </ThemeContext.Provider>
    );
  };
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("this error is theme error from ThemeProvider");
  }
  return context;
}
