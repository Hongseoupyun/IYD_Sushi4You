import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useMenuClick = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState("Menu");

  const handleMenuClick = (path) => {
    // define a dictionary of actions for each path
    const actions = {
      Home: () => {
        navigate("/");
        setSelectedMenuItem(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      Menu: () => {
        navigate("/menu");
        setSelectedMenuItem(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      Location: () => {
        navigate("/#location");
        setSelectedMenuItem(path);
      },
      default: () => {
        navigate(`/${path.toLowerCase()}`);
        setSelectedMenuItem(path);
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    };

    // perform the action based on the path, or the default action if the path is not found
    (actions[path] || actions.default)();
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#location") {
      // Introducing a delay of 100ms to ensure the "location" element is present in the DOM
      setTimeout(() => {
        const element = document.getElementById("location");
        if (element) {
          window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
        }
      }, 300);
    }
  }, [location]);

  return { selectedMenuItem, handleMenuClick, setSelectedMenuItem };
};
