import React, { useEffect, useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
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

  useEffect(() => {
    const fetchData = async () => {
      const menuRef = collection(db, "menu");
      const snapshot = await getDocs(menuRef);
      const data = snapshot.docs.map((doc) => doc.data());
      console.log("Firebase data:", data);
      setMenuItems(data);
      setFilteredMenuItems(data);

      const uniqueCategories = Array.from(
        new Set(data.map((item) => item.category))
      );
      setCategories(uniqueCategories);
    };

    fetchData();
  }, []);

  const handleMenuClick = (path) => {
    if (path === "Home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (path === "Location") {
      window.location.href = "/#location";
    } else {
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
    <div>
      <Navbar
        selectedMenuItem={selectedMenuItem}
        handleMenuClick={handleMenuClick}
        setSelectedMenuItem={setSelectedMenuItem}
      />
      <CategoryButtons>
        <CategoryButton key={"all"} onClick={() => handleCategoryClick("All")}>
          All
        </CategoryButton>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </CategoryButton>
        ))}
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
      <CategoryBlock>
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
    </div>
  );
}

const MenuItem = ({ item }) => {
  return (
    <MenuItemContainer>
      <ItemInfo>
        <ItemNameAndPrice>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>{item.price}</ItemPrice>
        </ItemNameAndPrice>
        <ItemDescription>{item.desc}</ItemDescription>
      </ItemInfo>
    </MenuItemContainer>
  );
};

const CategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 20px;
  flex-wrap: wrap;
  height: 25vh;
  width: 100%;
  margin-bottom: 50px;
`;

const CategoryButton = styled.button`
  background-color: #99c0a3;
  padding: 10px 20px;
  border: none;
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
    transition: all 0.3s ease;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
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

const MenuItemContainer = styled.div`
  width: calc(50% - 20px); // Adjust the width to your preference
  margin-bottom: 40px; // Add margin to separate the items vertically
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  margin: 20px 0;
`;

const ItemNameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CategoryTitle = styled.h2`
  font-size: 2em;
  color: #333;
  text-align: left;
  margin-bottom: 10px;
`;
const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; // This ensures the menu items move to the next line if there's not enough space
  justify-content: space-between;
`;


const ItemName = styled.h2`
  font-size: 1.5em;
  color: #333;
  text-align: left;
  margin-bottom: 10px;
`;

const ItemDescription = styled.p`
  font-size: 1em;
  color: #666;
  text-align: left;
`;

const ItemPrice = styled.span`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
`;
