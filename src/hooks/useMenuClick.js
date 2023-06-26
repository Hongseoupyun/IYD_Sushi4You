import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useMenuClick = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState("Menu");

  const handleMenuClick = (path) => {
    if (path === "Home") {
      navigate("/");
    } else if (path === "Menu") {
      navigate(`/${path.toLowerCase()}`);
    } else if (path === "Location") {
      navigate("/#location");
    }
    if (path !== "Location") {
      setSelectedMenuItem(path);
    }
  };
  
  useEffect(() => {
    if (location.pathname === "/menu") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (location.pathname === "/" && location.hash === "#location") {
      // Introducing a delay of 100ms to ensure the "location" element is present in the DOM
      setTimeout(() => {
        const element = document.getElementById("location");
        if (element) {
          window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
        }
      }, 0);
    }
  }, [location]);

  return { selectedMenuItem, handleMenuClick, setSelectedMenuItem };
};
