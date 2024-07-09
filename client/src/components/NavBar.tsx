"use client";

import React, { useCallback, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavBtnProp {
  href: string;
  whereto: string;
}

const NavBtn: React.FC<NavBtnProp> = ({ href, whereto }) => {
  const whileHover = {
    scale: 1.1,
    backgroundColor: "#00000010",
  };
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <motion.div
      className="White-Bg"
      whileHover={whileHover}
      style={{ backgroundColor: "white", padding: "10px"}}
    >
      <Link href={href} className="text-primary">
        {whereto}
      </Link>
      <div className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full w-0"></div>
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 ${
          isActive ? "w-full" : ""
        }`}
      ></div>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between z-40 ">
      <div className="flex flex-row  ">
        <NavBtn href="/" whereto="Home" />
        <NavBtn href="/someDir" whereto="Github" />
        <NavBtn href="/someDir" whereto="Contact" />
        <NavBtn href="/about" whereto="About" />
      </div>
      
    </div>
  );
};

export default Navbar;
