import { ReactNode } from "react";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
};

export default RootLayout;
