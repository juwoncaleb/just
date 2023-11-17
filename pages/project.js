import React from "react";
import Header from "./components/header";
import White from "./components/white";

export default function Project() {
  return (
    <div className="project_sub">
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
          <div className=" mt-20 mb-8 gap-14">
            <div className="grid proj_card gap-8 grid-cols-2">
              <img className="project_img" src="./k3.jpg" />
              <div>
                <p className="center">New Community Center</p>
                <p className="lore">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare
                </p>
                <div className="lin"></div>
                <div className="flex donaa justify-between">
                  <div>
                    <p>$10,000</p>
                    <p>Needed Donation</p>
                  </div>
                  <div>
                    <p>$10,000</p>
                    <p>Needed Donation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid proj_card gap-8 grid-cols-2">
              <img className="project_img" src="./k2.jpg" />
              <div>
                <p className="center">New Community Center</p>
                <p className="lore">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare
                </p>
                <div className="lin"></div>
                <div className="flex donaa justify-between">
                  <div>
                    <p>$10,000</p>
                    <p>Needed Donation</p>
                  </div>
                  <div>
                    <p>$10,000</p>
                    <p>Needed Donation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid proj_card gap-8 grid-cols-2">
              <img className="project_img" src="./k1.jpg" />
              <div>
                <p className="center">New Community Center</p>
                <p className="lore">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare
                </p>
                <div className="lin"></div>
                <div className="flex donaa justify-between">
                  <div>
                    <p>$10,000</p>
                    <p>Needed Donation</p>
                  </div>
                  <div>
                    <p>$10,000</p>
                    <p>Needed Donation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="donte_sub mt-10 flex">
            Donate
            <img className="ml-3" src="./arrow.png" />
          </button>
        </center>
      </div>
      <center className="project_test">
        <p className="VIDEO_TEXT">TESTIMONIAL</p>
        <p className="mission mt-4">What hundreds of happy</p>
        <p className="mission">communites are saying</p>
        <p className="sub_video mt-4">
          consectetur adipiscing elit. Praesent gravida tempus viverra. Sed non
          pretium nibh, in tristique diam
        </p>
        <p className="sub_video">conibh, in tristique diam</p>
        <div className="flex justify-center gap-10 mt-14 ">
          <div className="testimonal_card">
            {" "}
            <img className="babe mr-4 ml-1" src="./babe.jpg" />
            <p className="text-center name mt-4 text-2xl">Korolina Hopman</p>
            <p className="mb-8">
              consectetur adipiscing elit. Suspendisse varius eros elementum
              tristique. Duis cursus, mi quis viverra ornare.
            </p>
          </div>
          <div className="testimonal_card">
            {" "}
            <img className="babe mr-4 ml-1" src="./babe.jpg" />
            <p className="text-center name mt-4 text-2xl">Korolina Hopman</p>
            <p>
              consectetur adipiscing elit. Suspendisse varius eros elementum
              tristique. Duis cursus, mi quis viverra ornare.
            </p>
          </div>
          <div className="testimonal_card">
            {" "}
            <img className="babe mr-4 ml-1" src="./babe.jpg" />
            <p className="text-center name mt-4 text-2xl">Korolina Hopman</p>
            <p>
              consectetur adipiscing elit. Suspendisse varius eros elementum
              tristique. Duis cursus, mi quis viverra ornare.
            </p>
          </div>
        </div>
        <div className="flex justify-around div newsletter">
          <div className="subscribe mt-6">
            <p>Subscribe to our monthly </p>
            <p>email newsletter!</p>
            <img className="sun " src="./sun.png" />
          </div>
          <div className="mt-8">
            <input placeholder="Enter your email address" className="inoutt" />
            <button className="subscribe_btn">Subscribe</button>
            <img className="flowe" src="./flower.png" />
          </div>
        </div>
      </center>
    </div>
  );
}
