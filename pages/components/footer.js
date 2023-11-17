import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-around ">
      <div className="logo_foot">
        <img className="logo" src="./logo.png" />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
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
  );
}
