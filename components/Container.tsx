import { Inter } from "next/font/google";
import ThinNav from "@/components/ThinNav";
import Nav from "@/components/Nav";
import { ReactNode } from "react";
import Footer from "./Footer";

const font = Inter({ subsets: ["latin"] });

export default function Container({ children }: { children: ReactNode }) {
  return (
    <>
      <div className={`${font.className}`}>
        <ThinNav />
        <Nav />
        <div className="max-w-6xl mx-auto mb-20 min-h-screen">{children}</div>
        <Footer />
      </div>
    </>
  );
}
