// hooks/useMenuClick.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useMenuClick = () => {
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState("Menu");

  const handleMenuClick = (path) => {
    if (path === "Home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (path === "Location") {
      window.location.href = "/#location";
    } else if (path === "Menu") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setSelectedMenuItem(path);
  };

  return { selectedMenuItem, handleMenuClick, setSelectedMenuItem };
};
