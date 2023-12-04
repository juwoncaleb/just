import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="flex justify-center tabs">
        <Link href="./" className=" md:mr-14 mr-2">
          Home
        </Link>
        <Link href="./about" className="md:mr-14 mr-2">
          About Us
        </Link>
        <Link href="./services" className="md:mr-14 mr-2">
          Service
        </Link>
        <Link href="./contact" className="md:mr-14 mr-2">
          Contact
        </Link>
        <Link href="./donate" className="md:mr-14 mr-2">
          Donate
        </Link>
      </div>
      <center className="flex justify-center mt-10">
        <div className=" footer_marg">
          <Link href="https://www.instagram.com/justused_tech/">
            <img
              className=""
              width="25"
              height="50"
              src="https://img.icons8.com/ios-filled/50/1A1A1A/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
          </Link>
        </div>
        <div className=" ml-6">
          <img
            className=""
            width="25"
            height="50"
            src="https://img.icons8.com/ios-filled/50/1A1A1A/twitter.png"
            alt="twitter"
          />
        </div>
        <div className=" ml-10 ">
          <Link href="https://www.linkedin.com/company/justused-tech/mycompany/?viewAsMember=true">
            <img
              className=""
              width="25"
              height="48"
              src="https://img.icons8.com/fluency-systems-regular/48/1A1A1A/linkedin.png"
              alt="linkedin"
            />
          </Link>
        </div>
      </center>
      <p className="text-center mt-8">
        © 2020 Just Used, Inc. All rights reserved.
      </p>
    </div>
  );
}
