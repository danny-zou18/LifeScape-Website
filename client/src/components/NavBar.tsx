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
    backgroundColor: "#00000010"
  };
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <motion.div
      className="group bg-gray-100 rounded-lg relative first:ml-0"
      whileHover={whileHover}
      style={{ backgroundColor: "bg-gray-100", padding: "10px"}}
    >
      <Link href={href} className="text-primary">
        {whereto}
      </Link>
      <div className="absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-500 group-hover:w-full w-0"></div>
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-500 ${
          isActive ? "w-full" : ""
        }`}
      ></div>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between z-40 w-[80%] mx-auto rounded-lg bg-gray-100 p-4 shadow-lg">
      <div className="dummy  ">
        {/* put logo here */}
      </div>
      <div className="flex flex-row  ">
        <NavBtn href="/" whereto="Home" />
        <NavBtn href="/about" whereto="About" />
        <NavBtn href="/team" whereto="Meet Our Team!" />
        <NavBtn href="/path" whereto="Adventure Paths" />
        <NavBtn href="/contact" whereto="Contact Us" />
        <NavBtn href="https://github.com/danny-zou18/LifeScape" whereto="Github" />
      </div>
      
    </div>
  );
};

export default Navbar;
