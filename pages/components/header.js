import Link from "next/link";
import React from "react";
import { useState } from "react";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="headdiv">
      {/* DESKTOP */}
      <div className="flex div desk justify-between">
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
            <button className="head_ele header_btn mt-6 flex ml-20 ">
              Donate
              <img className="heartlogo ml-4" src="./heart.png" />
            </button>
          </Link>
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex div mob justify-between">
        <img className="logo" src="./logo.png" />

        <div className="mt-5">
          {isMenuOpen === true ? (
             <div onClick={toggleMenu}>
             <img
               width="30"
               height="50"
               src="https://img.icons8.com/ios/50/multiply.png"
               alt="multiply"
             />
           </div>
        
          ) : (    <div onClick={toggleMenu}>
            <img
              width="30"
              height="50"
              src="https://img.icons8.com/ios/50/menu--v7.png"
              alt="menu--v7"
            />
          </div>
           
          )}
        </div>

       
      </div>
      {isMenuOpen && (
       <div className="text-right">
       <Link href="./">
         <p className="head_ele tag mt-10"> Home</p>
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
         <button className="head_ele header_btn mt-6 flex ml-20 ">
           Donate
           <img className="heartlogo ml-4" src="./heart.png" />
         </button>
       </Link>
     </div>
     
        )}
    </div>
  );
}
