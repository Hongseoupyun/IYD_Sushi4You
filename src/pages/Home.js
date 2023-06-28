import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMenuClick } from "hooks/useMenuClick";
import Navbar from "components/Navbar";
import Mainpage from "components/Home/Mainpage";
import Signature from "components/Home/Signature";
import Location from "components/Home/Location";
import Footer from "components/Footer";

export default function Home() {
  // Initialize references and hooks
  const locationRef = useRef(null);
  const location = useLocation();

  // Function to smoothly scroll to the top of the page
  const { handleMenuClick, selectedMenuItem, setSelectedMenuItem } =
    useMenuClick();

  useEffect(() => {
    setSelectedMenuItem(location.hash === "#location" ? "Location" : "Home");
  }, []);

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
