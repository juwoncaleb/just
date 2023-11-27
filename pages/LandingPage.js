import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import VoiceflowIntegration from "./components/Voice";
import {
  AnimatePresence,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const images = [
    "/l1.jpg",
    "/l2.jpg",
    "/l3.jpg",
    "/l4.jpg",
    "/l5.jpg",
    // Add more paths if needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the currentImageIndex to the next image in the array
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);
  return (
    <div>
      <Header />
      <div className="landingpage">
        <div className=" hero_div flex justify-between">
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
            <div className="htext">
              <p className="hero_text">
                Redefining the life Cycle of electronic Devices.{" "}
              </p>

              <div className="sub_hero mt-6">
                <p className="lorem">
                  Prolonging life cycles, reducing e-waste, and bridging the
                  digital divide
                </p>
              </div>
              <div className="mt-16 coll flex">
                <img className="butt" src="./butter.png"/>
                <Link href="./donate">
                  <button className="donte_sub flex">
                    Donate
                    <img className=" ar" src="./arrow.png" />
                  </button>
                </Link>
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
          </motion.div>

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
            <div className="flex div hero_tab">
              <img className="sun" src="./sun.png" />
              <div>
              <img className="hero" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
              </div>{" "}
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
            }}
          >
            <div className="mt-20 subclo flex">
              <div>
                <img className="butt" src="./butter.png" />
              </div>
              <Link href="./donate">
                <button className="donte_sub flex">
                  Donate
                  <img className=" ar" src="./arrow.png" />
                </button>
              </Link>
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
              <div className="accom_div mt-6">
             
              </div>
              <div className="testi mt-10 flex">
                <img className="left" src="./left.png" />
                <div className="flex testimo_text mt-8">
                  <img className="babe mr-4 ml-1" src="./babe.jpg" />
                  <div>
                    <p> Make big changes and help the world </p>
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

      <div className="video_div div">
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
            <p className="VIDEO_TEXT">TAKE A LOOK AT OUT VIDEO</p>
            <p className="mission mt-4">
              Our mission is to help all the people in need
            </p>

            <Link href="./donate">
              <button className="donte_ub mt-10 flex">
                Donate
                <div className="heart_div">
                  <img className="ml-2 don_heart" src="./heart.png" />
                </div>
              </button>
            </Link>
          </motion.div>
        </center>
      </div>
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
        <img className="flower" src="./flower.png" />
      </motion.div>

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
      </div>
      <div className="mt-20 div">
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
            <p className="VIDEO_TEXT">TESTIMONIAL</p>
            <p className="mission mt-4">
              What hundreds of happy communites are saying
            </p>
            {/* <p className="sub_video mt-4">
              consectetur adipiscing elit. Praesent gravida tempus viverra. Sed
              non pretium nibh, in tristique diam
            </p> */}
          </motion.div>

          <div className="flex justify-center ppl div gap-14 mt-14 ">
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
              <div className="testimonal_card">
                {" "}
                <img className="babe mr-4  ml-1" src="./babe.jpg" />
                <p className="text-center name mt-8 text-2xl">
                  Korolina Hopman
                </p>
                <p className="">
                  consectetur adipiscing elit. Suspendisse varius eros elementum
                  tristique. Duis cursus, mi quis viverra ornare.
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
                delay: 0.3,
              }}
            >
              <div className="testimonal_card">
                {" "}
                <img className="babe mr-4 ml-1" src="./babe.jpg" />
                <p className="text-center name mt-8 text-2xl">
                  Korolina Hopman
                </p>
                <p>
                  consectetur adipiscing elit. Suspendisse varius eros elementum
                  tristique. Duis cursus, mi quis viverra ornare.
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
                delay: 0.5,
              }}
            >
              <div className="testimonal_card">
                {" "}
                <img className="babe mr-4 ml-1" src="./babe.jpg" />
                <p className="text-center name mt-8 text-2xl">
                  Korolina Hopman
                </p>
                <p>
                  consectetur adipiscing elit. Suspendisse varius eros elementum
                  tristique. Duis cursus, mi quis viverra ornare.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="contribution gap-20 flex justify-center">
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
              <img className="sad" src="./sad.jpg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
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
                <p className="course">Help a meaningful course</p>
                <p className="help">We Help people whereever</p>
                <p className="help">The need is Greater</p>

                <Link href="./donate">
                  <button className="dontesub mt-10 flex">
                    Donate
                    <img className=" ar" src="./arrow.png" />
                  </button>
                </Link>
              </div>
            </motion.div>
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
      <VoiceflowIntegration/>
      <Footer />
    </div>
  );
}
