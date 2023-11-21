import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="headdiv">
      <div className="flex div justify-between">
        <img className="logo" src="./logo.png" />
        <div className="flex">
          <Link href="./">
            <p className="head_ele tag  mt-10"> Home</p>
          </Link>
          <Link href="./about">
            <p className="head_ele tag mt-10"> About Us</p>
          </Link>
          <Link href="./services">
          <p className="head_ele tag mt-10"> Services</p>
          </Link>
          <Link href="./contact">
            <p className="head_ele tag mt-10 mr-14">Contact</p>
          </Link>
          <Link href="./donate">
            <button className="head_ele header_btn mt-8 flex ml-20 ">
              Donate
              <img className="heartlogo ml-4" src="./heart.png" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
