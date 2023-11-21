import React from "react";
import { Widget } from "@typeform/embed-react";
import White from "./components/white";

export default function Contact() {
  return (
    <div>
      <White />
      <center>
        <p className="VIDEO_TEXT mt-20">Contact us</p>
        <p className="mission   mt-6 mb-3">Empower change - contact us </p>
        <p className="mission">those in need</p>
        <p className="sub_video mt-4">
          consectetur adipiscing elit. Praesent gravida tempus viverra. Sed non
          pretium nibh, in tristique diam
        </p>
        <p className="sub_video">conibh, in tristique diam</p>
        <div className="contactus">
          <Widget id="j14YAmqh" className="widget" />
        </div>
      </center>
    </div>
  );
}
