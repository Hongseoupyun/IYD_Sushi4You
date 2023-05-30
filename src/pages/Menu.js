import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    if (path === "Home") {
      navigate("/");
    } else if (path === "Location") {
      window.location.href = "/#location"; // Navigates to the "Location" section on the root ("/") page
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar selectedMenuItem={"Menu"} handleMenuClick={handleMenuClick} />
      <Footer selectedMenuItem={"Menu"} handleMenuClick={handleMenuClick} />
    </div>
  );
}
