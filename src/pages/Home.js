import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "components/Navbar";
import Mainpage from "components/Mainpage";
import Signature from "components/Signature";
import Location from "components/Location";
import Footer from "components/Footer";

export default function Home() {
  // Initialize references and hooks
  const locationRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Function to handle menu click events
  const handleMenuClick = (path) => {
    switch(path) {
      case "Home":
        scrollToTop();
        break;
      case "Location":
        locationRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        navigate(`/${path.toLowerCase()}`);
    }
  };

  // Effect to scroll to the Location component on page load if the URL hash is '#location'
  useEffect(() => {
    if (location.hash === "#location") {
      handleMenuClick("Location");
    }
  }, [location.hash]);

  return (
    <div>
      <Navbar defaultMenuItem={"Home"} />
      <Mainpage />
      <Signature />
      <Location ref={locationRef} id="location" />
      <Footer handleMenuClick={handleMenuClick} defaultMenuItem={"Home"} />
    </div>
  );
}
