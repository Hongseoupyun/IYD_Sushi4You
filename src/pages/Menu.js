import React, { useEffect, useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MenuItem from "components/Menu/MenuItem";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import db from "firebaseConfig";

export default function Menu() {
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Menu");
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const menuRef = collection(db, "menu");
      const snapshot = await getDocs(menuRef);
      const data = snapshot.docs.map((doc) => doc.data());
      console.log("Firebase data:", data);
      setMenuItems(data);
      setFilteredMenuItems(data);

      const categories = data.map((item) => item.category);
      const uniqueCategories = [...new Set(categories)];

      setCategories(uniqueCategories);
      setLoadingCategories(false);
    };

    fetchData();
  }, []);

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

  const handleCategoryClick = (category) => {
    if (category === "All") {
      setFilteredMenuItems(menuItems);
      setSelectedCategory("All");
    } else {
      const filteredItems = menuItems.filter(
        (item) => item.category === category
      );
      setFilteredMenuItems(filteredItems);
      setSelectedCategory(category);
    }
  };

  return (
    <Container>
      <Navbar
        selectedMenuItem={selectedMenuItem}
        handleMenuClick={handleMenuClick}
        setSelectedMenuItem={setSelectedMenuItem}
      />
      <CategoryButtons>
        {!loadingCategories && (
          <>
            <CategoryButton
              key={"all"}
              className={selectedCategory === "All" ? "selected" : ""} // Add the 'selected' class when this category is selected
              onClick={() => handleCategoryClick("All")}
            >
              All
            </CategoryButton>
            {categories.map((category) => (
              <CategoryButton
                key={category}
                className={selectedCategory === category ? "selected" : ""} // Add the 'selected' class when this category is selected
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </>
        )}
      </CategoryButtons>
      <MenuContainer>
        {selectedCategory !== "All" ? (
          <CategoryBlock>
            <CategoryTitle>{selectedCategory}</CategoryTitle>
            <MenuItemsContainer>
              {filteredMenuItems.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </MenuItemsContainer>
          </CategoryBlock>
        ) : (
          categories.map((category) => (
            <CategoryBlock key={category}>
              <CategoryTitle>{category}</CategoryTitle>
              <MenuItemsContainer>
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <MenuItem key={index} item={item} />
                  ))}
              </MenuItemsContainer>
            </CategoryBlock>
          ))
        )}
      </MenuContainer>

      <Footer
        selectedMenuItem={selectedMenuItem}
        handleMenuClick={handleMenuClick}
      />
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5f5f5;
`;

const CategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  padding-top: 20px;
  flex-wrap: wrap;
  height: 25vh;
  width: 100%;
  margin-bottom: 50px;
  background-color: #fdfaf5;
`;

const CategoryButton = styled.button`
  background-color: #99c0a3;
  font-weight: 500; // Set the font-weight to semi-bold by default
  padding: 10px 20px;
  border: 2px solid transparent; // Add a transparent border to prevent layout shifts
  border-radius: 25px;
  height: 45px;
  font-size: 1.2em;
  color: black;
  min-width: 100px;
  margin: 5px 10px;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(3px);
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #f14e23;
    transform: translateY(-3px) scale(1.02);
    color: white;
    transition: all 0.3s ease-out;
  }

  &.selected {
    background-color: #f14e23;
    transform: translateY(-3px) scale(1.02);
    color: white;
    transition: all 0.3s ease-in;
  }
`;

const MenuContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CategoryBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const CategoryTitle = styled.h2`
  font-size: 2em;
  color: #333;
  text-align: left;
  margin-bottom: 25px;
`;

const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; // This ensures the menu items move to the next line if there's not enough space
  justify-content: space-between;
`;
