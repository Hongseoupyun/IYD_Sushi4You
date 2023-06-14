// hooks/useCategoryClick.js
import { useState } from "react";

export const useCategoryClick = (menuItems) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);

  const handleCategoryClick = (category) => {
    if (category === "All") {
      setFilteredMenuItems(menuItems);
      setSelectedCategory("All");
      window.scrollTo({ top: 650, behavior: "smooth" });
    } else {
      const filteredItems = menuItems.filter(
        (item) => item.category === category
      );
      setFilteredMenuItems(filteredItems);
      setSelectedCategory(category);
      window.scrollTo({ top: 650, behavior: "smooth" });
    }
  };

  return {
    selectedCategory,
    handleCategoryClick,
    setSelectedCategory,
    filteredMenuItems,
  };
};
