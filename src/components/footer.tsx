import React from "react";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
        <footer className="app-container mx-auto grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
      <div>
        <h2 className="footer-title">Get in Touch</h2>
        <address>Ain Shams, Cairo, Egypt</address>
        <div className="flex gap-2 font-bold text-2xl mt-2 text-sky-blue-ctk">
          <a href="" target="blank">
            <FaFacebook />
          </a>
          <a href="" target="blank">
            <CiInstagram />
          </a>
          <a href="" target="blank">
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div>
        <h2 className="footer-title">Company info</h2>
        <ul className="space-y-1">
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Carrier</a>
          </li>
          <li>
            <a href="">We are hiring</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="footer-title">Features</h2>
        <ul className="space-y-1">
          <li>
            <a href="">Business Marketing</a>
          </li>
          <li>
            <a href="">User Analytics</a>
          </li>
          <li>
            <a href="">Live Chat</a>
          </li>
          <li>
            <a href="">Unlimited Support</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="footer-title">Resources</h2>
        <ul className="space-y-1">
          <li>
            <a href="">IOS& Android</a>
          </li>
          <li>
            <a href="">Watch a Demo</a>
          </li>
          <li>
            <a href="">Customers</a>
          </li>
          <li>
            <a href="">API</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
