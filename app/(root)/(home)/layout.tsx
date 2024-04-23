import { Metadata } from "next";
import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import RightSidebar from "@/components/RightSidebar";
import { ThemeProvider } from "@/constants/ThemeProvider";
export const metadata: Metadata = {
  title: "YOOM",
  description: "A workspace for your team, powered by Stream Chat and Clerk.",
};
const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="mx-auto max-w-5xl w-full">
            <ThemeProvider>{children}</ThemeProvider>
          </div>
        </section>
        <RightSidebar />
      </div>
      <Footer />
    </main>
  );
};

export default RootLayout;
