"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import wmlogo from "@/public/wmlogo.png";
import bag from "@/public/bag.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch, IoMdCart } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
const Hero = () => {
  const [open, SetOpen] = useState(false);

  const handleMenu = () => {
    SetOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [open]);
  const closeMenuAndScroll = () => {
    SetOpen(false); 
  };
  return (
    <>
      <nav className="px-4 flex items-center justify-between border-2 border-dotted h-20 z-30 sticky top-0 backdrop-blur-sm ">
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
            <li>
              <Link href="#Home"  onClick={closeMenuAndScroll}>Home</Link>
            </li>
            <li>
              <Link href="#About" onClick={closeMenuAndScroll}>About</Link>
            </li>
            <li>
              <Link href="#Fashion" onClick={closeMenuAndScroll}>Fashion</Link>
            </li>
            <li>
              <Link href="#Offers" onClick={closeMenuAndScroll}>Offers</Link>
            </li>
            <li>
              <Link href="#Services" onClick={closeMenuAndScroll}>Services</Link>
            </li>
            <li>
              <Link href="#Testimonials" onClick={closeMenuAndScroll}>Testimonials</Link>
            </li>
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
                <button className="flex items-center justify-between gap-1 py-2 px-4 lg:px-8 text-white rounded-full bg-blue-300">
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
      <section id="Home" className="-z-10">
        <div className="text-center px-4 ">
          <h1 className="text-4xl md:text-8xl lg:text-7xl lg:font-bold font-[400] px-3 pt-20 text-blue-400 lg:px-96">
            Fullfill Your Shopping <br /> Dreams With World Mart!
          </h1>
          <p className="text-sm py-2 lg:py-5 md:text-lg lg:text-xl lg:px-40">
            Dive into a world of endless possibilities as you explore our
            curated collections tailored to your unique style. From trendy
            essentials to timeless classics, {"we've"} gove your covered. Enjoy
            seamless browsing.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={bag}
              alt="bag image"
              className="h-96 w-auto object-cover -translate-x-8 translate-y-14 lg:-translate-y-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
