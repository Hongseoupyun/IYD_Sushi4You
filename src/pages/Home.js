import React, { useRef } from "react";
import Navbar from "components/Navbar";
import Mainpage from "components/Mainpage";
import Signature from "components/Signature";
import Location from "components/Location";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const locationRef = useRef(null);
  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    if (path === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (path === "Location") {
      locationRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${path.toLowerCase()}`);
    }
  };

  return (
    <div>
      <Navbar defaultMenuItem={"Home"} />
      <Mainpage />
      <Signature />
      <Location ref={locationRef} />
      <Footer handleMenuClick={handleMenuClick} />
    </div>
  );
}
