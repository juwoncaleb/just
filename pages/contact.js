import React from "react";
import { Widget } from "@typeform/embed-react";
import White from "./components/white";
import Footer from "./components/footer";

export default function Contact() {
  return (
    <div>
      <White />
      <center>
        <p className="VIDEO_TEXT mt-20">Contact us</p>
        <p className="mission   mt-6 mb-3">Connect with us <br/> Let us make a change ! </p>
       
        <p className="sub_video">Say hello and let us start a conversation that empowers lives.</p>
        <div className="contactus">
          <Widget id="j14YAmqh" className="widget" />
        </div>
      </center>
      <Footer/>
    </div>
  );
}
