import React from "react";
import Header from "./components/header";
import White from "./components/white";

export default function Donate() {
  return (
    <div className="doo">
      <White />
      <div className="video_div">
        <center>
          <p className="mission mt-4">Donate now to help</p>
          <p className="mission">those in need</p>
          <p className="sub_video mt-4">
            consectetur adipiscing elit. Praesent gravida tempus viverra. Sed
            non pretium nibh, in tristique diam
          </p>
          <p className="sub_video">conibh, in tristique diam</p>
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
              <button className="donte_subl flex">
                Donate
                <img className="ml-1" src="./arrow.png" />
              </button>
            </div>
            <div className="donate_card">
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
              <button className="donte_subl flex">
                Donate
                <img className="ml-1" src="./arrow.png" />
              </button>
            </div>
          </div>
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
      <div className="flex justify-around div newsletter">
        <div className="subscribe mt-6">
          <p>Subscribe to our monthly </p>
          <p>email newsletter!</p>
          <img className="sun ml-14 " src="./sun.png" />
        </div>
        <div className="mt-8">
          <input placeholder="Enter your email address" className="inoutt" />
          <button className="subscribe_btn">Subscribe</button>
          <img className="flowe" src="./flower.png" />
        </div>
      </div>
    </div>
  );
}
