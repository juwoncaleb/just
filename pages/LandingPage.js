import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <div className="landingpage">
        <div className="div flex justify-between">
          <div>
            <p className="hero_text">Make big</p>
            <p className="hero_text">Changes and</p>
            <p className="hero_text">Help the world</p>
            <div className="sub_hero mt-6">
              <p className="lorem">
                We design and develop modern web solutions with a professional
                design using latest technologies and trends.
              </p>
            </div>
            <div className="mt-16 flex">
              <div>
                <img className="butter" src="./butter.png" />
              </div>
              <button className="donte_sub flex">
                Donate
                <img className=" ar" src="./arrow.png" />
              </button>
              <div className="mr-8">
                <p className="text-center floow">Follow us</p>
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
          </div>

          <div className="flex">
            <img className="sun" src="./sun.png" />
            <img className="hero" src="./hero.jpg" />
          </div>
        </div>
      </div>
      <div className="sponsor ">
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
      <div className=" proj ">
        <div className="div flex justify-center">
          <div className="mr-14">
            <p className="success">SUCCESSFUL PROJECTS</p>
            <p className="results mt-6">
              Accomplished <br />
              great result
            </p>
            <div className="accom_div mt-6">
              <p>
                Omne animal, simul atque in gravissimo bello animadversionis
                metu degendae filium.
              </p>
            </div>
            <div className="testi mt-10 flex">
              <img className="left" src="./left.png" />
              <div className="flex testimo_text mt-8">
                <img className="babe mr-4 ml-1" src="./babe.jpg" />
                <div>
                  <p> "Make big changes and help the world "</p>
                  <p>
                    <span className="officer mt-2">Andry Polar</span> Donation
                    Officer
                  </p>
                </div>
              </div>
              <img className="lil" src="./lil.png" />
            </div>
            <img className="kids" src="./kids.png" />
          </div>
          <div className="grid grid-cols-2 gap-6 ml-8">
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
      </div>
      <div className="video_div">
        <center>
          <p className="VIDEO_TEXT">TAKE A LOOK AT OUT VIDEO</p>
          <p className="mission mt-4">Our mission is to help</p>
          <p className="mission">all the people in need</p>
          <p className="sub_video mt-4">
            consectetur adipiscing elit. Praesent gravida tempus viverra. Sed
            non pretium nibh, in tristique diam
          </p>
          <p className="sub_video">conibh, in tristique diam</p>
          <button className="donte_ub mt-6 flex">
            Donate
            <div className="heart_div">
              <img className="ml-2 don_heart" src="./heart.png" />
            </div>
          </button>
        </center>
      </div>
      <img className="flower" src="./flower.png" />

      <div className="siege">
        <div className="flex justify-center">
          <img className="lap" src="./laptop.jpg" />
        </div>
      </div>
      <div className="mt-20">
        <center>
          <p className="VIDEO_TEXT">TESTIMONIAL</p>
          <p className="mission mt-4">What hundreds of happy</p>
          <p className="mission">communites are saying</p>
          <p className="sub_video mt-4">
            consectetur adipiscing elit. Praesent gravida tempus viverra. Sed
            non pretium nibh, in tristique diam
          </p>
          <p className="sub_video">conibh, in tristique diam</p>
          <div className="flex justify-center gap-14 mt-14 ">
            <div className="testimonal_card">
              {" "}
              <img className="babe mr-4  ml-1" src="./babe.jpg" />
              <p className="text-center name mt-8 text-2xl">Korolina Hopman</p>
              <p className="">
                consectetur adipiscing elit. Suspendisse varius eros elementum
                tristique. Duis cursus, mi quis viverra ornare."
              </p>
            </div>
            <div className="testimonal_card">
              {" "}
              <img className="babe mr-4 ml-1" src="./babe.jpg" />
              <p className="text-center name mt-8 text-2xl">Korolina Hopman</p>
              <p>
                consectetur adipiscing elit. Suspendisse varius eros elementum
                tristique. Duis cursus, mi quis viverra ornare."
              </p>
            </div>
            <div className="testimonal_card">
              {" "}
              <img className="babe mr-4 ml-1" src="./babe.jpg" />
              <p className="text-center name mt-8 text-2xl">Korolina Hopman</p>
              <p>
                consectetur adipiscing elit. Suspendisse varius eros elementum
                tristique. Duis cursus, mi quis viverra ornare."
              </p>
            </div>
          </div>
          <div className="contribution gap-20 flex justify-center">
            <img className="sad" src="./sad.jpg" />
            <div>
              <p className="course">Help a meaningful course</p>
              <p className="help">We Help people whereever</p>
              <p className="help">The need is Greater</p>
              <p className="sublor mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                eSuspendisse .
              </p>
              <p className="sublor">
                varius enim in eros elementum tristique. Duis cursus, mi quis
                viverra ornar
              </p>
              <button className="dontesub mt-10 flex">
                Donate
                <img className=" ar" src="./arrow.png" />
              </button>
            </div>
          </div>
          {/* <div className="flex justify-around div newsletter">
            <div className="subscribe mt-6">
              <p>Subscribe to our monthly </p>
              <p>email newsletter!</p>
            </div>
            <div className="mt-8">
              <input
                placeholder="Enter your email address"
                className="inoutt"
              />
              <button className="subscribe_btn">Subscribe</button>
            </div>
          </div> */}
        </center>
      </div>
      <Footer />
    </div>
  );
}
