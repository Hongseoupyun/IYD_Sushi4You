import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "components/Navbar";
import Mainpage from "components/Home/Mainpage";
import Signature from "components/Home/Signature";
import Location from "components/Home/Location";
import Footer from "components/Footer";

export default function Home() {
  // Initialize references and hooks
  const locationRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState("Home");

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Function to handle menu click events
  const handleMenuClick = (path) => {
    switch (path) {
      case "Home":
        setSelectedMenuItem("Home");
        scrollToTop();
        navigate("/");
        break;
      case "Location":
        locationRef.current.scrollIntoView({ behavior: "smooth" });
        setSelectedMenuItem("Location");
        break;
      default:
        navigate(`/${path.toLowerCase()}`);
        setSelectedMenuItem(path);
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
      <Navbar
        selectedMenuItem={selectedMenuItem}
        handleMenuClick={handleMenuClick}
        setSelectedMenuItem={setSelectedMenuItem}
      />
      <Mainpage />
      <Signature />
      <Location ref={locationRef} id="location" />
      <Footer
        handleMenuClick={handleMenuClick}
        selectedMenuItem={selectedMenuItem}
      />
    </div>
  );
}




