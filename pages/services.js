import React from "react";
import Header from "./components/header";
import White from "./components/white";
import Footer from "./components/footer";
import {
  AnimatePresence,
  motion,
  stagger,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import VoiceflowIntegration from "./components/Voice";

export default function Project() {
  return (
    <div className="project_sub">
      <VoiceflowIntegration />
      <White />
      <div className="video_div">
        <center className=" div">
          <p className="VIDEO_TEXT mb-10 mt-10">CORE SERVICE</p>
          <div className="sponsor mb-14 ">
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

                  <div className="">
                    <div className="flex sub mt-10">
                      <div className="div_color flex">
                        <img className="check mr-4" src="./check.png" />
                    </div>
                      <p className="ml-4"> Data sanitization and security</p>
                    </div>
                    <div className="flex sub mt-2">
                      <div className="div_color flex">
                        <img className="check mr-4" src="./check.png" />
                      </div>
                      <p className="ml-4"> Remarketing and Resale</p>
                    </div>
                    <div className="flex sub mt-2">
                      <div className="div_color flex">
                        <img className="check mr-4" src="./check.png" />
                      </div>
                      <p className="ml-4"> Trade in management</p>
                    </div>
                    <div className="flex sub mt-2">
                      <div className="div_color flex">
                        <img className="check mr-4" src="./check.png" />
                      </div>
                      <p className="ml-4">Upcycling</p>
                    </div>
                    <div className="flex sub mt-2">
                      <div className="div_color flex">
                        <img className="check mr-4" src="./check.png" />
                      </div>
                      <p className="ml-4">Distribution and Sales</p>
                    </div>

                    <div className="flex sub mt-2">
                      <div className="div_color flex">
                        <img className="check mr-4" src="./check.png" />
                      </div>
                      <p className="ml-4">
                        Corporate Social Responsibilities for firms
                      </p>
                    </div>
                    <div className="flex sub mt-2">
                      <div className="div_color flex">
                        <img className="check mr-4" src="./check.png" />
                      </div>
                      <p className="ml-4">Tech Waste Strategy services</p>
                    </div>
                    <div className="flex sub mt-2">
                      <div className="div_color flex">
                        <img className="check mr-4" src="./check.png" />
                      </div>
                      <p className="ml-4">
                        Responsible and Responsive Recycling
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" sponn">
                <img className="sad" src="./l5.jpg" />

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
            <p className="mission coopp mt-14">Corporate Initiative</p>
            <div className="corp">
              <p className="sub_video mt-10">
                By donating your used devices, your corporation not only
                contributes to a greener planet but actively fosters digital
                inclusion and education. Here is how your corporation and
                JustUsed can mutually benefit: Benefits for Corporations
              </p>
            </div>
          </motion.div>

          <div className="flex proje_test justify-center gap-10 mt-20 ">
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
                {/*
                <p className="text-center name mt-8 text-2xl">
                  Environmental Stewardship
                </p>
                <p className="mb-8">
              
                </p> */}
                <a
                  href=""
                  className="group relative block h-64 sm:h-80 lg:h-96"
                >
                  <span className="absolute inset-0 border-2 border-dashed border-black"></span>

                  <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <img
                        width="50"
                        height="48"
                        src="https://img.icons8.com/pulsar-color/48/environment.png"
                        alt="environment"
                      />
                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                        Environmental Stewardship
                      </h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 ">
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                        Environmental Stewardship
                      </h3>

                      <p className="mt-4 text-sm sm:text-base text-left">
                        Demonstrate your commitment to environmental
                        sustainability by responsibly recycling and repurposing
                        electronic devices.
                      </p>

                      <p className="mt-8 font-bold">Read more</p>
                    </div>
                  </div>
                </a>
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
              <div className="testimonal_card">
                {/* {" "}
               >{" "}
                <p className="text-center name mt-8 text-2xl">
                  Cost-Efficient Disposal:
                </p>
                <p>
                  Fulfil your corporate responsibility without compromising your
                  budget. JustUsed provides a seamless, cost-efficient solution
                  for device disposal.
                </p> */}

                <a
                  href=""
                  className="group relative block h-64 sm:h-80 lg:h-96"
                >
                  <span className="absolute inset-0 border-2 border-dashed border-black"></span>

                  <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <img
                        width="50"
                        height="64"
                        src="https://img.icons8.com/external-wanicon-two-tone-wanicon/64/external-saving-money-currency-wanicon-two-tone-wanicon.png"
                        alt="external-saving-money-currency-wanicon-two-tone-wanicon"
                      />

                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                        Cost-Efficient Disposal:
                      </h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 ">
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                        Cost-Efficient Disposal:
                      </h3>

                      <p className="mt-4 text-sm sm:text-base text-left">
                        Fulfil your corporate responsibility without
                        compromising your budget. JustUsed provides a seamless,
                        cost-efficient solution for device disposal.
                      </p>

                      <p className="mt-8 font-bold">Read more</p>
                    </div>
                  </div>
                </a>
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
                delay: 0.6,
              }}
            >
              <div className="testimonal_card">
                {" "}
                {/*{" "}
                <p className="text-center name mt-8 text-2xl">Social Impact</p>
                <p>
                  Enhance your corporate social responsibility (CSR) initiatives
                  by directly supporting digital literacy and education in
                  underserved communities.
                </p> */}
                <a
                  href=""
                  className="group relative block h-64 sm:h-80 lg:h-96"
                >
                  <span className="absolute inset-0 border-2 border-dashed border-black"></span>

                  <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                      <img
                        width="50"
                        height="50"
                        src="https://img.icons8.com/ios-filled/50/a5d6a7/people-working-together.png"
                        alt="people-working-together"
                      />

                      <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                        Social-Economic Impact
                      </h2>
                    </div>

                    <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 ">
                      <h3 className="mt-4 text-xl font-medium sm:text-2xl">
                        Social-Economic Impact
                      </h3>

                      <p className="mt-4 text-sm sm:text-base text-left">
                        Enhance your corporate social responsibility (CSR)
                        initiatives by directly supporting digital literacy and
                        education in underserved communities.
                      </p>

                      <p className="mt-8 font-bold">Read more</p>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
          <div className="">
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
              <p className="mission mt-20">Individual Initiative</p>
              <div className="corp">
                <p className="sub_video mt-10">
                  Indulge in the spirit of giving with Just Used Give a Device,
                  Empower a Life individual package. By donating your used
                  devices, you not only declutter but also play a pivotal role
                  in providing access to technology for underserved young
                  adults. Here is the shared value for individuals and JustUsed:
                </p>
              </div>
            </motion.div>

            <div className="   gap-20 mt-10 ">
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
                <div className="flex sop mt-20 justify-center gap-10">
                  <div className="indi">
                    <p className="text-center declus mt-8 text-2xl">
                      Declutter Responsibly{" "}
                    </p>
                    <p className="mb-8">
                      Clear out unused devices responsibly, contributing to a
                      sustainable tech ecosystem.
                    </p>
                  </div>
                  <img className="small_img" src="./l3.jpg" />
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
                <div className="flex sop mt-20 justify-center gap-20 mt-14">
                  <img className="small_img" src="./l6.jpg" />

                  <div className="indi">
                    <p className="text-center declus mt-8 text-2xl">
                      Humanitarian Impact
                    </p>
                    <p className="mb-8">
                      Your donation directly empowers young adults by providing
                      them with access to technology, fostering digital literacy
                      and career opportunities.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

         
        </center>

        <center className="project_test">
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
            <p className="VIDEO_TEXT">Partner with us</p>
            <p className="mission mt-4">Our mission is to help</p>
            <p className="mission">all the people in need</p>
            <p className="sub_video mt-4">
              We believe in the power of collaboration to drive positive change,
              <br /> Join the train{" "}
            </p>
          </motion.div>

          <div className=" mt-20 mb-8 gap-14">
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
              <div className="grid proj_card gap-8 grid-cols-2">
                <img className="project_img" src="./k3.jpg" />
                <div>
                  <p className="center">Device Contributions</p>
                  <p className="lore">
                    Do you have any unused electronic devices? Contribute to our
                    mission by sending them our way. Whether you are an
                    individual with a smartphone or a business with a surplus of
                    laptops, your contribution plays a vital role in reducing
                    electronic waste and empowering underserved communities.
                  </p>
                  <div className="lin"></div>
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
              <div className="grid proj_card gap-8 grid-cols-2">
                <img className="project_img" src="./k2.jpg" />
                <div>
                  <p className="center"> Corporate Collaboration</p>
                  <p className="lore">
                    Businesses can collaborate with Just Used to responsibly
                    dispose of electronic devices. Through our corporate
                    services, we ensure the proper collection and repurposing of
                    devices, aligning your organization with environmental
                    sustainability practices.
                  </p>
                  <div className="lin"></div>
                  <div className="flex donaa justify-between"></div>
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
              <div className="grid proj_card gap-8 mb-6 grid-cols-2">
                <img className="project_img" src="./k1.jpg" />
                <div>
                  <p className="center">Educational Partnerships</p>
                  <p className="lore">
                    Educational institutions can play a crucial role in our
                    mission. Partner with us to implement collection programs
                    within your school or university, instilling sustainability
                    values among students while contributing to a circular
                    economy.
                  </p>
                  <div className="lin"></div>
                </div>
              </div>
            </motion.div>
          </div>
          <Link href="./donate">
            <button className="donte_sub mt-16 flex">
              Donate
              <img className="ml-3" src="./arrow.png" />
            </button>
          </Link>
        </center>
      </div>
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
      <Footer />
    </div>
  );
}
