import React from "react";
import Header from "./components/header";
import White from "./components/white";

export default function Project() {
  return (
    <div className="project_sub">
   <White/>
      <div className="video_div">
        <center>
          <p className="VIDEO_TEXT">Partner with us</p>
          <p className="mission mt-4">Our mission is to help</p>
          <p className="mission">all the people in need</p>
          <p className="sub_video mt-4">
          At Just Used, we believe in the power of collaboration to drive positive change. Here are  ways you can join the Just Used movement
          </p>
          <p className="sub_video">conibh, in tristique diam</p>
          <div className=" mt-20 mb-8 gap-14">
            <div className="grid proj_card gap-8 grid-cols-2">
              <img className="project_img" src="./k3.jpg" />
              <div>
                <p className="center">Device Contributions</p>
                <p className="lore">
                Do you have any unused electronic devices? Contribute to our mission by sending them our way. Whether you're an individual with a smartphone or a business with a surplus of laptops, your contribution plays a vital role in reducing electronic waste and empowering underserved communities.
                </p>
                <div className="lin"></div>
             
              </div>
            </div>
            <div className="grid proj_card gap-8 grid-cols-2">
              <img className="project_img" src="./k2.jpg" />
              <div>
                <p className="center"> Corporate Collaboration</p>
                <p className="lore">
                Businesses can collaborate with Just Used to responsibly dispose of electronic devices. Through our corporate services, we ensure the proper collection and repurposing of devices, aligning your organization with environmental sustainability practices.
                </p>
                <div className="lin"></div>
                <div className="flex donaa justify-between">
                  
               
                </div>
              </div>
            </div>

            <div className="grid proj_card gap-8 mb-6 grid-cols-2">
              <img className="project_img" src="./k1.jpg" />
              <div>
                <p className="center">Educational Partnerships</p>
                <p className="lore">
                Educational institutions can play a crucial role in our mission. Partner with us to implement collection programs within your school or university, instilling sustainability values among students while contributing to a circular economy.
                </p>
                <div className="lin"></div>
               
              </div>
            </div>
           
          </div>
          <button className="donte_sub mt-16 flex">
            Donate
            <img className="ml-3" src="./arrow.png" />
          </button>
        </center>
      </div>
      <center className="project_test div">
        <p className="VIDEO_TEXT">TESTIMONIAL</p>
        <p className="mission mt-4">What hundreds of happy</p>
        <p className="mission">communites are saying</p>
        <p className="sub_video mt-4">
          consectetur adipiscing elit. Praesent gravida tempus viverra. Sed non
          pretium nibh, in tristique diam
        </p>
        <p className="sub_video">conibh, in tristique diam</p>
        <div className="flex proje_test justify-center gap-10 mt-14 ">
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
