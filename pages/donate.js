import React from "react";
import Header from "./components/header";
import White from "./components/white";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";
import Footer from "./components/footer";
export default function Donate() {
  return (
    <div className="doo">
      <White />
      <div className="video_div">
        <center>
          <p className="mission mt-4">Donate now to help</p>
          <p className="mission">those in need</p>

          <div className="flex justify-center gap-14 section">
            <div className="donate_card">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/ios/100/FFFFFF/laptop--v1.png"
                alt="laptop--v1"
              />
              <p className="devices">DEVICES</p>
              <p className="instruction">
                Please click the button below to donate money
              </p>
              <Link href="https://tinyurl.com/justusedtech-donate"
              >
                <button className="donte_subl flex">
                  Donate
                  <img className="ml-1" src="./arrow.png" />
                </button>
              </Link>
            </div>

            {/* <div className="donate_card">
              <img
                width="100"
                height="100"
                src="https://img.icons8.com/carbon-copy/100/FFFFFF/cash--v2.png"
                alt="cash--v2"
              />
              <p className="devices">CASH</p>

              <p className="instruction">
                Please click the button below to donate money
              </p>
              <Link href="https://buy.stripe.com/test_28oeYH36r0W6fyE001">
                <button className="donte_subl flex">
                  Donate
                  <img className="ml-1" src="./arrow.png" />
                </button>
              </Link>
            </div> */}
          </div>
        </center>
      </div>
      <div className=" proj  ">
        <div className="div project flex justify-center">
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
            <div className="accom mr-14">
              <p className="success">SUCCESSFUL PROJECTS</p>
              <p className="results mt-6">
                Accomplished <br />
                great result
              </p>
              <div className="accom_div mt-6"></div>
              <div className="testi mt-10 flex">
                <img className="left" src="./left.png" />
                <div className="flex testimo_text mt-8">
                  <img className="babe mr-4 ml-1" src="./c.png" />
                  <div>
                    <p> Make big changes and help the world </p>
                    <p>
                      <span className="officer mt-2">Chris wise</span>
                    </p>
                  </div>
                </div>
                <img className="lil" src="./lil.png" />
              </div>
              <img className="kids" src="./kids.png" />
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
            <div className="grid grid-cols-2 md:ml-12 child  gap-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
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
                    Our mission is clear. Transforming Electronic device them
                    from mere gadgets into agents of change. We focus on two
                    pillars: environmental sustainability and community
                    empowerment.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.3,
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
                    Leveraging cutting-edge technology solutions, we actively
                    engage in a circular economy, reducing electronic waste, and
                    cultivating a sustainable future.
                  </p>
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
                    empowerment, our journey extends beyond being a venture.
                    {/* At
                  Just Used, we are committed to environmental sustainability
                  and digital inclusion, striving to create a future where
                  technology is accessible to all. */}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-around div newsletter">
        <div className="subscribe mt-6">
          <p>Let us keep </p>
          <p>in Touch</p>
          <img className="sun ml-14 " src="./sun.png" />
        </div>
        <div className="mt-8">
          <input placeholder="Enter your email address" className="inoutt" />
          <button className="subscribe_btn">Subscribe</button>
          <img className="flowe" src="./flower.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
