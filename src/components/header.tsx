import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Header() {
  return (
    <header className="bg-dark-blue flex justify-center">
      <nav className="flex items-center justify-between  text-white app-container">
        <Link href={"/"} className="font-bold lg:text-3xl  md:text-2xl text-lg">
          Edubridge
        </Link>
        <ul className="lg:flex gap-5 md:flex hidden">
          <li className="link">
            <Link href={"#home"}>Home</Link>
          </li>
          <li className="link">
            <Link href={"#product"}>Product</Link>
          </li>
          <li className="link">
            <Link href={"#pricing"}>Pricing</Link>
          </li>
          <li className="link">
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>

        <div className="gap-5 flex items-center">
          <Link href="/login">Login</Link>

          <Link href="/register" className="join-btn">
            Join Us <FaArrowRight />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
