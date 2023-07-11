import { Inter } from "next/font/google";
import ThinNav from "@/components/ThinNav";
import Nav from "@/components/Nav";
import { ReactNode } from "react";

const font = Inter({ subsets: ["latin"] });

export default function Container({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={`${font.className}`}>
        <ThinNav />
        <Nav />

        {/* Use ml-64 instead of mx-auto for a left aligned look */}
        <div className="">{children}</div>
      </div>
    </>
  );
}
