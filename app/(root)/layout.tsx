import { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main className="bg-[#DC6B19]">
      <div>{children}</div>
    </main>
  );
};

export default RootLayout;
