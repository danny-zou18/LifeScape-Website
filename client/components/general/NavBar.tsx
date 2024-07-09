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
      className="group rounded-sm p-2 ml-10 relative first:ml-0"
      whileHover={whileHover}
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
    <div className="flex bg-background lg:flex-row xsm:flex-col justify-between items-center py-2 lg:w-[80%] xsm:w-full ml-auto mr-auto pt-2 fixed top-0 left-1/2 transform -translate-x-1/2 z-40 ">
      <div className="flex flex-row  ">
        <NavBtn href="/" whereto="Home" />
        <NavBtn href="/portfolio" whereto="Portfolio" />
        <NavBtn href="/about" whereto="About" />
      </div>
      
    </div>
  );
};

export default Navbar;