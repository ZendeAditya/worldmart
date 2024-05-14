import React from "react";
import logo from "@/public/wmlogo.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-screen h-96 py-5">
      <section className="flex items-center justify-center px-2 flex-col md:flex-row md:gap-5 md:justify-between md:px-5">
        <div className=" md:text-center flex items-center justify-center flex-col">
          <Image src={logo} alt="logo" className="w-20 h-20  object-cover" />
          <p>© 2024 WorldMart. All rights reserved.</p>
        </div>
        <ul className="[&_ul]:cursor-pointer flex flex-col gap-2">
          <p className="font-semibold text-lg py-2">Useful Links</p>
          <li>About Us</li>
          <li>Features</li>
          <li>Blogs</li>
          <li>FAQ</li>
        </ul>
        <ul className="[&_ul]:cursor-pointer flex flex-col gap-2">
        <p className="font-semibold text-lg py-2">Main Menu</p>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Products</li>
          <li>Offers</li>
        </ul>
        <ul className="[&_ul]:cursor-pointer flex flex-col gap-2">
        <p className="font-semibold text-lg py-2">Contact Us</p>
          <li>worldmart@gmail.com</li>
          <li>+9112345678</li>
        </ul>
      </section>
      <section className="flex items-center justify-center gap-5 py-3">
        {/* add social icons from react icons  */}
        <FaFacebook size={26} className="cursor-pointer" />
        <FaXTwitter  size={26} className="cursor-pointer" />
        <FaInstagram  size={26} className="cursor-pointer" />
        <FaLinkedin  size={26} className="cursor-pointer" />
      </section>
    </footer>
  );
};

export default Footer;
