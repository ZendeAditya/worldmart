"use client";
import Image from "next/image";
import React, { useState } from "react";
import wmlogo from "@/public/wmlogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch, IoMdCart } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
const Hero = () => {
  const [open, SetOpen] = useState(false);
  const handleMenu = () => {
    SetOpen(!open);
  };
  return (
    <>
      <nav className="px-4 flex items-center justify-between border-2 border-dotted h-20">
        <section>
          <Image
            src={wmlogo}
            alt="Company Image"
            className="w-20 h-16 object-cover "
          />
        </section>
        <section
          className={`${
            !open ? "translate-x-52" : "translate-x-0"
          } absolute right-0 top-20 bg-blue-300 w-52 h-[calc(100%-5rem)] transition-all duration-500 lg:relative lg:translate-x-0 lg:top-0 `}
        >
          <ul className="flex items-start  justify-between gap-6 py-2  lg:flex-row flex-col px-4 [&_li]:cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Fashion</li>
            <li>Offers</li>
            <li>Services</li>
          </ul>
        </section>
        <section className="flex items-center justify-between gap-3">
          <div>
            <ul className="flex items-center justify-between gap-3">
              <li>
                <IoIosSearch size={26} className="cursor-pointer" />
              </li>
              <li>
                <IoMdCart size={26} className="cursor-pointer" />
              </li>
              <li>
                <button className="flex items-center justify-between gap-1 py-2 px-8 text-white rounded-full bg-blue-300">
                  <CiLogin size={26} />
                  <span>Log In</span>
                </button>
              </li>
            </ul>
          </div>
          <div className="lg:hidden">
            {open ? (
              <RxCross2
                size={28}
                className="cursor-pointer"
                onClick={handleMenu}
              />
            ) : (
              <RxHamburgerMenu
                size={28}
                className="cursor-pointer"
                onClick={handleMenu}
              />
            )}
          </div>
        </section>
      </nav>
      {/* hero section  */}
      <section>
        
      </section>
    </>
  );
};

export default Hero;
