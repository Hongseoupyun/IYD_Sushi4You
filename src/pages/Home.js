import React from "react";
import Navbar from "components/Navbar";
import Mainpage from "components/Mainpage";
import Signature from "components/Signature";
import Location from "components/Location";
import Footer from "components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar defaultMenuItem={"Home"} />
      <Mainpage />
      <Signature/>
      <Location/>
      <Footer/>
    </div>
  );
}
