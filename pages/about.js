import Head from "next/head";
import React from "react";
import White from "./components/white";
import Footer from "./components/footer";
import {
  AnimatePresence,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";
import VoiceflowIntegration from "./components/Voice";
export default function About() {
  return (
    <div className="about_suu">
      <VoiceflowIntegration/>
      <White />
      <div className="video_div">
        <center>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
            }}
          >
            <p className="VIDEO_TEXT">LEARN MORE ABOUT US</p>
            <p className="mission mt-4">Get to know us</p>
            <p className="mission mt-4">Be the change</p>
          </motion.div>
        </center>
      </div>
      <img className="flower" src="./sun.png" />

      <div className="siege">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
          }}
        >
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YlCjhvj_yeM?si=RsSZKJ5ZqbgKNBuz"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </motion.div>

        <div className="flex care justify-center gap-14  mt-10 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
            }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
          >
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
                in a circular economy, reducing electronic waste, and
                cultivating a sustainable future.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex care justify-center gap-14 middle">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.5,
            }}
          >
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
                Founded on the belief in sustainability and community
                empowerment, our journey extends beyond being a venture. At Just
                Used, we are committed to environmental sustainability and
                digital inclusion, striving to create a future where technology
                is accessible to all.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.6,
              delay: 0.7,
            }}
          >
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
                Our story is marked by tangible milestones that showcase the
                real impact of our hard work. From empowering over 7,000
                individuals in Africa to providing 20 corporate
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="sponsor ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
          }}
        >
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
            <img className="company" src="./ec.png" />
              <img className="company" src="./doc.png" />
              <img className="company" src="./bb.jpg" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
          }}
        >
          <center>
            <img className="afri" src="./afri.png" />
          </center>
        </motion.div>
      </div>
      <div className="justify-around kid_div flex gap-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
          }}
        >
          <img className="kidd_img" src="./l1.jpg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
            delay: 0.3,
          }}
        >
          <div>
            <p className="kiddo_head mt-4">
              How it works <br />
            </p>
            <div className="kidd_divv mt-6">
              <p className="kidd_sub">
                Collection and Assessment At JustUsed, our process begins with
                the responsible collection of electronic devices. Whether you
                are an individual, a business, or an educational institution,
                you can contribute to a more sustainable future by sending us
                your unused devices. Our team carefully assesses each device to
                determine its condition and potential for reuse.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="justify-around div sec kid_div flex gap-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
          }}
        >
          <div>
            <p className="kiddo_head mt-4">Circular Economy in Action</p>
            <div className="kidd_divv mt-6">
              <p className="kidd_sub">
                Once the devices are collected, we leverage cutting-edge
                technology solutions to implement a circular economy. Rather
                than letting these electronics contribute to the growing e-waste
                problem, we focus on extending their lifecycle. Devices that
                meet our standards are prepared for resale or repurposing,
                contributing to a more sustainable tech ecosystem.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
            delay: 0.3,
          }}
        >
          <img className="kidd_img" src="./l2.jpg" />
        </motion.div>
      </div>
      <div className="justify-around  flex gap-10">
       
      </div>
      <div className="justify-around div sec  flex gap-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
          }}
        >
          <div>
            <p className="kiddo_head mt-4">Environmental Impact </p>
            <div className="kidd_divv mt-6">
              <p className="kidd_sub">
                As devices are diverted from landfills and given a second life,
                our collective efforts contribute to a significant reduction in
                electronic waste. Our commitment to environmental sustainability
                goes beyond words it is a tangible impact on reducing the
                ecological footprint and conserving valuable resources.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
            delay: 0.3,
          }}
        >
          <img className="kidd_img" src="./l3.jpg" />
        </motion.div>
      </div>
      <div className="justify-around kid_div flex gap-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
          }}
        >
          <img className="kidd_img" src="./l4.jpg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
            delay: 0.3,
          }}
        >
          <div>
            <p className="kiddo_head mt-4">
              Continuous Innovation <br /> and Impact
            </p>
            <div className="kidd_divv mt-6">
              <p className="kidd_sub">
                Our journey does not end with a sale or a donation. JustUsed is
                committed to continuous innovation and impact. We actively seek
                partnerships, participate in competitions, and explore new
                avenues to expand our reach, ensuring that our mission of
                sustainability and community empowerment grows stronger with
                each passing day.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="div">
        <div className="flex cofounders justify-between">
          <p className="cofounderz">Meet our Team</p>
          <button className="donte_ub flex">
            Get Started
            <div className="heart_div">
              <img className="ml-1" src="./arrow.png" />
            </div>
          </button>
        </div>
      </div>
      <div className="flex cofounders justify-center gap-12 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
          }}
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
            delay: 0.2,
          }}
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.6,
            delay: 0.4,
          }}
        >
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
        </motion.div>
      </div>
      <center>
      <div className="flex justify-around div newsletter">
        <div className="subscribe text-center mt-6">
          <p>Let us keep </p>
          <p>in Touch</p>
          <img className="sun " src="./sun.png" />
        </div>
        <div className="mt-8">
          <input placeholder="Enter your email address" className="inoutt" />
          <button className="subscribe_btn">Subscribe</button>
          <img className="flowe" src="./flower.png" />
        </div>
      </div>
      </center>
      <Footer />
    </div>
  );
}
