import Head from "next/head";
import React from "react";
import White from "./components/white";

export default function About() {
  return (
    <div className="about_suu">
      <White/>
      <div className="video_div">
        <center>
          <p className="VIDEO_TEXT">LEARN MORE ABOUT US</p>
          <p className="mission mt-4">Our mission is to help</p>
          <p className="mission">all the people in need</p>
          <p className="sub_video mt-4">
            consectetur adipiscing elit. Praesent gravida tempus viverra. Sed
            non pretium nibh, in tristique diam
          </p>
          <p className="sub_video">conibh, in tristique diam</p>
          <button className="donte_ub mt-6 flex">
            Get Started
            <div className="heart_div">
              <img className="ml-1" src="./arrow.png" />
            </div>
          </button>
        </center>
      </div>
      <img className="flower" src="./sun.png" />

      <div className="siege">
        <div className="flex justify-center">
          <img className="lap" src="./laptop.jpg" />
        </div>
        <div className="flex justify-center gap-14 mb-8">
          <div className="card">
            {" "}
            <center>
              <img
                width="50"
                className="mb-6"
                height="64"
                src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/ff6803/external-school-city-scape-xnimrodx-lineal-xnimrodx.png"
                alt="external-school-city-scape-xnimrodx-lineal-xnimrodx"
              />
            </center>
            <p className="mb-2 card_head">SCHOOOLS</p>
            <p>
              Omne animal, simul atque in dolorus impact. Hanc cam memoriter,
              tum etiam.
            </p>
          </div>
          <div className="card">
            <center>
              <img
                className="mb-6"
                width="50"
                height="64"
                src="https://img.icons8.com/laces/64/ff6803/like.png"
                alt="like"
              />
            </center>
            <p className="mb-2 card_head">LOVE</p>
            <p>
              Omne animal, simul atque in dolorus impact. Hanc cam memoriter,
              tum etiam.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-14 middle">
          <div className="card">
            <center>
              <img
                className="mb-6"
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/ff6803/trust--v1.png"
                alt="trust--v1"
              />
            </center>
            <p className="mb-2 card_head">CARE</p>
            <p>
              Omne animal, simul atque in dolorus impact. Hanc cam memoriter,
              tum etiam.
            </p>
          </div>
          <div className="card">
            <center>
              <img
                className="mb-6"
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/ff6803/read.png"
                alt="read"
              />
            </center>
            <p className="mb-2 card_head">LEARN</p>
            <p>
              Omne animal, simul atque in dolorus impact. Hanc cam memoriter,
              tum etiam.
            </p>
          </div>
        </div>
      </div>
      <div className="sponsor  ">
        <div className="div flex justify-between">
          <div>
            <p className="sponsor_text">Our Generous </p>
            <p className="sponsor_text">Sponsors</p>
            <div className="flex sub mt-10">
              <div className="div_color flex">
                <img className="check mr-4" src="./check.png" />
              </div>
              <p className="ml-4">
                {" "}
                Aenean faucibus justo cursus lorem imperdiet.
              </p>
            </div>
            <div className="flex sub mt-2">
              <div className="div_color flex">
                <img className="check mr-4" src="./check.png" />
              </div>
              <p className="ml-4">
                {" "}
                Aenean faucibus justo cursus lorem imperdiet.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <img className="company" src="./c1.svg" />
            <img className="company" src="./c2.svg" />
            <img className="company" src="./c3.svg" />
            <img className="company" src="./c4.svg" />
            <img className="company c5" src="./c5.svg" />
            <img className="company" src="./c6.svg" />
          </div>
        </div>
        <center>
          <img className="afri" src="./afri.png" />
        </center>
      </div>
      <div className="justify-around kid_div flex gap-10">
        <img className="kidd_img" src="./kiddo.jpg" />
        <div>
          <p className="kiddo_head mt-4">
            The inspiration for a new way <br /> to solve the issues.
          </p>
          <div className="kidd_divv mt-6">
            <p className="kidd_sub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus.
            </p>
          </div>
        </div>
      </div>

      <div className="justify-around sec kid_div flex gap-10">
        <div>
          <p className="kiddo_head mt-4">
            The inspiration for a new way <br /> to solve the issues.
          </p>
          <div className="kidd_divv mt-6">
            <p className="kidd_sub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus.
            </p>
          </div>
        </div>
        <img className="kidd_img" src="./vil.jpg" />
      </div>
      <div className="div">
        <div className="flex cofounders justify-between">
          <p className="cofounderz">Meet our cofounders</p>
          <button className="donte_ub flex">
            Get Started
            <div className="heart_div">
              <img className="ml-1" src="./arrow.png" />
            </div>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-12 mt-20">
        <div className="founder">
          <img className="fo" src="./t1.jpg" />
          <p className="found_name">Marina Troy</p>
          <p>Co-founder</p>
          <p>jklekfmdsv hkjsldc hksjndc hbskd</p>
          <div className="flex ml-8 mt-3">
            <div className="socia">
              <img
                className="ml-1 mt-1 mr-1"
                width="25"
                height="50"
                src="https://img.icons8.com/ios-filled/50/1A1A1A/instagram-new--v1.png"
                alt="instagram-new--v1"
              />
            </div>
            <div className="socia">
              <img
                className="ml-1 mt-1 mr-1"
                width="25"
                height="50"
                src="https://img.icons8.com/ios-filled/50/1A1A1A/twitter.png"
                alt="twitter"
              />
            </div>
            <div className="socia">
              <img
                className="ml-1 mt-1 mr-1"
                width="25"
                height="48"
                src="https://img.icons8.com/fluency-systems-regular/48/1A1A1A/linkedin.png"
                alt="linkedin"
              />
            </div>
          </div>
        </div>
        <div className="founder">
          <img className="fo" src="./t1.jpg" />
          <p className="found_name">Marina Troy</p>
          <p>Co-founder</p>
          <p>jklekfmdsv hkjsldc hksjndc hbskd</p>
          <div className="flex ml-8 mt-3">
            <div className="socia">
              <img
                className="ml-1 mt-1 mr-1"
                width="25"
                height="50"
                src="https://img.icons8.com/ios-filled/50/1A1A1A/instagram-new--v1.png"
                alt="instagram-new--v1"
              />
            </div>
            <div className="socia">
              <img
                className="ml-1 mt-1 mr-1"
                width="25"
                height="50"
                src="https://img.icons8.com/ios-filled/50/1A1A1A/twitter.png"
                alt="twitter"
              />
            </div>
            <div className="socia">
              <img
                className="ml-1 mt-1 mr-1"
                width="25"
                height="48"
                src="https://img.icons8.com/fluency-systems-regular/48/1A1A1A/linkedin.png"
                alt="linkedin"
              />
            </div>
          </div>
        </div>
        <div className="founder">
          <img className="fo" src="./t1.jpg" />
          <p className="found_name">Marina Troy</p>
          <p>Co-founder</p>
          <p>jklekfmdsv hkjsldc hksjndc hbskd</p>
          <div className="flex ml-8 mt-3">
            <div className="socia">
              <img
                className="ml-1 mt-1 mr-1"
                width="25"
                height="50"
                src="https://img.icons8.com/ios-filled/50/1A1A1A/instagram-new--v1.png"
                alt="instagram-new--v1"
              />
            </div>
            <div className="socia">
              <img
                className="ml-1 mt-1 mr-1"
                width="25"
                height="50"
                src="https://img.icons8.com/ios-filled/50/1A1A1A/twitter.png"
                alt="twitter"
              />
            </div>
            <div className="socia">
              <img
                className="ml-1 mt-1 mr-1"
                width="25"
                height="48"
                src="https://img.icons8.com/fluency-systems-regular/48/1A1A1A/linkedin.png"
                alt="linkedin"
              />
            </div>
          </div>
        </div>
      </div>
      <center>
        <div className="flex justify-around div newsletter">
          <div className="subscribe mt-6">
            <p>Subscribe to our monthly </p>
            <p>email newsletter!</p>
          </div>
          <div className="mt-8">
            <input placeholder="Enter your email address" className="inoutt" />
            <button className="subscribe_btn">Subscribe</button>
          </div>
        </div>
      </center>
    </div>
  );
}
