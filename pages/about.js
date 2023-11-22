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
          <p className="mission mt-4">
            Get to know us, be a part of the change,
          </p>
          <p className="mission">and join the movement.</p>
          <p className="sub_video mt-4">
            consectetur adipiscing elit. Praesent gravida tempus viverra. Sed
            non pretium nibh, in tristique diam
          </p>
          <p className="sub_video">conibh, in tristique diam</p>
          <button className="donte_ub mt-6 flex">
            Get to Know us
            <div className="heart_div">
              <img className="ml-1" src="./arrow.png" />
            </div>
          </button>
        </center>
      </div>
      <img className="flower" src="./sun.png" />

      <div className="siege">
        <div className="flex justify-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YlCjhvj_yeM?si=RsSZKJ5ZqbgKNBuz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
        </div>
        <div className="flex care justify-center gap-14 mb-8">
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
            <p className="mb-2 card_head">What We Do</p>
            <p>
              Our mission is clear. Transforming Electronic device them from
              mere gadgets into agents of change. We focus on two pillars:
              environmental sustainability and community empowerment.
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
            <p className="mb-2 card_head">Environmental Sustainability</p>
            <p>
              Leveraging cutting-edge technology solutions, we actively engage
              in a circular economy, reducing electronic waste, and cultivating
              a sustainable future.
            </p>
          </div>
        </div>
        <div className="flex care justify-center gap-14 middle">
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
            <p className="mb-2 card_head">Community Empowerment</p>
            <p>
              Founded on the belief in sustainability and community empowerment,
              our journey extends beyond being a venture. At Just Used, we are
              committed to environmental sustainability and digital inclusion,
              striving to create a future where technology is accessible to all.
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
            <p className="mb-2 card_head">How we do it:</p>
            <p>
              Our story is marked by tangible milestones that showcase the real
              impact of our hard work. From empowering over 7,000 individuals in
              Africa to providing 20 corporate
            </p>
          </div>
        </div>
      </div>
      <div className="sponsor ">
        <div className="div flex spon justify-between">
          <div>
            <p className="sponsor_text">
              Redefining the life cycle of electronic devices{" "}
            </p>

            <div className="flex sub mt-10">
              <div className="div_color flex">
                <img className="check mr-4" src="./check.png" />
              </div>
              <p className="ml-4">
                {" "}
                Prolonging life cycles, reducing e-waste, and bridging the
                digital divide{" "}
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
          <div className="grid grid-cols-3 gap-6 sponn">
            <img className="company" src="./c1.svg" />
            <img className="company" src="./c2.svg" />
            <img className="company" src="./c3.svg" />
            <img className="company" src="./c6.svg" />
            <img className="company" src="./c6.svg" />
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
            How it works <br />
          </p>
          <div className="kidd_divv mt-6">
            <p className="kidd_sub">
              Collection and Assessment At JustUsed, our process begins with the
              responsible collection of electronic devices. Whether you are an
              individual, a business, or an educational institution, you can
              contribute to a more sustainable future by sending us your unused
              devices. Our team carefully assesses each device to determine its
              condition and potential for reuse.
            </p>
          </div>
        </div>
      </div>

      <div className="justify-around div sec kid_div flex gap-10">
        <div>
          <p className="kiddo_head mt-4">
          Circular Economy in Action
          </p>
          <div className="kidd_divv mt-6">
          <p className="kidd_sub">
          Once the devices are collected, we leverage cutting-edge technology solutions to implement a circular economy. Rather than letting these electronics contribute to the growing e-waste problem, we focus on extending their lifecycle. Devices that meet our standards are prepared for resale or repurposing, contributing to a more sustainable tech ecosystem.

            </p>
          </div>
        </div>
        <img className="kidd_img" src="./vil.jpg" />
      </div>
      <div className="justify-around kid_div flex gap-10">
        <img className="kidd_img" src="./kiddo.jpg" />
        <div>
          <p className="kiddo_head mt-4">
            Empowering Communities
            <br />
          </p>
          <div className="kidd_divv mt-6">
         
            <p className="kidd_sub">
              A significant part of our mission involves community empowerment.
              For every device sold, a portion is dedicated to our donation
              program. Young adults in underserved communities receive these
              devices, providing them with access to technology and digital
              learning platforms. This initiative aims to bridge the digital
              divide, foster digital literacy, and support economic growth in
              marginalized areas.
            </p>
          </div>
        </div>
      </div>
      <div className="justify-around div sec kid_div flex gap-10">
        <div>
          <p className="kiddo_head mt-4">
          Environmental Impact          </p>
          <div className="kidd_divv mt-6">
            <p className="kidd_sub">
            As devices are diverted from landfills and given a second life, our collective efforts contribute to a significant reduction in electronic waste. Our commitment to environmental sustainability goes beyond words it is a tangible impact on reducing the ecological footprint and conserving valuable resources.

            </p>
          </div>
        </div>
        <img className="kidd_img" src="./vil.jpg" />
      </div>
      <div className="justify-around kid_div flex gap-10">
        <img className="kidd_img" src="./kiddo.jpg" />
        <div>
          <p className="kiddo_head mt-4">
          Continuous Innovation <br/> and Impact
                    </p>
          <div className="kidd_divv mt-6">
            <p className="kidd_sub">
            Our journey does not end with a sale or a donation. JustUsed is committed to continuous innovation and impact. We actively seek partnerships, participate in competitions, and explore new avenues to expand our reach, ensuring that our mission of sustainability and community empowerment grows stronger with each passing day.

            </p>
          </div>
        </div>
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
      <div className="flex cofounders justify-center gap-12 mt-20">
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
