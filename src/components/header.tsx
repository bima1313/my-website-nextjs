"use client";

import { useRef } from "react";
import HamburgerButton from "@/components/hamburger-button";
import NavigationBar from "@/components/navigation-bar";

const Header: React.FC = () => {
  const hamburger = useRef<HTMLButtonElement | null>(null);
  const navMenu = useRef<HTMLInputElement | null>(null);

  return (
    <header className="bg-slate-100 w-full flex items-center navbar-glass">
      <div className="w-full h-24 flex items-center justify-between relative">
        <div className="ml-6 md:ml-12">
          <a
            className="text-primary text-xl font-bold font-montserrat tracking-wider md:text-2xl"
            href="#">
            Bima Hamdhika Irfy
          </a>
        </div>
        <div className="flex items-center mr-12">
          <HamburgerButton hamburgerRef={hamburger} navRef={navMenu} />
          <NavigationBar navRef={navMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
