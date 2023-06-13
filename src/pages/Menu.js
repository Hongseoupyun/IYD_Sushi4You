import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import CategoryButtons from "components/Menu/CategoryButtons";
import SushiSashimiALaCarte from "components/Menu/SushiSashimiALaCarte";
import Soup from "components/Menu/Soup";
import Salad from "components/Menu/Salad";
import Appetizers from "components/Menu/Appetizers";
import SignatureMakiRoll from "components/Menu/SignatureMakiRoll";
import MakiRoll from "components/Menu/MakiRoll";
import ChefSpecial from "components/Menu/ChefSpecial";
import LunchSpecial from "components/Menu/LunchSpecial";
import MainDish from "components/Menu/MainDish";
import SashimiPartyTray from "components/Menu/SashimiPartyTray";
import SushiMakiTray from "components/Menu/SushiMakiTray";
import SushiSashimiMakiComboTray from "components/Menu/SushiSashimiMakiComboTray";
import MakiTray from "components/Menu/MakiTray";
import AddOns from "components/Menu/AddOns";
import Drinks from "components/Menu/Drinks";
import { useNavigate } from "react-router-dom";
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
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        firebaseId: doc.id,
      }));

      console.log("Firebase data:", data);
      data.sort((a, b) => (a.id > b.id ? 1 : -1));
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

  const categoryComponents = {
    SOUP: Soup,
    SALAD: Salad,
    APPETIZERS: Appetizers,
    "SUSHI & SASHIMI A LA CARTE": SushiSashimiALaCarte,
    "SIGNATURE MAKI(ROLL)": SignatureMakiRoll,
    "MAKI(ROLL)": MakiRoll,
    "CHEF’S SPECIAL": ChefSpecial,
    "LUNCH SPECIAL (Bento Box)": LunchSpecial,
    "MAIN DISH": MainDish,
    "SASHIMI PARTY TRAY": SashimiPartyTray,
    "SUSHI & MAKI TRAY": SushiMakiTray,
    "SUSHI, SASHIMI & MAKI COMBO TRAY": SushiSashimiMakiComboTray,
    "MAKI TRAY": MakiTray,
    "ADD-ONS": AddOns,
    DRINKS: Drinks,
  };

  return (
    <Container>
      <Navbar
        selectedMenuItem={selectedMenuItem}
        handleMenuClick={handleMenuClick}
        setSelectedMenuItem={setSelectedMenuItem}
      />
      <CategoryButtons
        loadingCategories={loadingCategories}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        handleCategoryClick={handleCategoryClick}
      />
      <MenuContainer>
        {selectedCategory === "All"
          ? Object.entries(categoryComponents).map(
              ([category, ComponentToRender]) => (
                <CategoryBlock key={category}>
                  <CategoryTitle>{category}</CategoryTitle>
                  <Subtitle>
                    <i>Extra Charge for Substitutions</i>
                  </Subtitle>
                  <MenuItemsContainer>
                    <ComponentToRender
                      items={menuItems.filter(
                        (item) => item.category === category
                      )}
                    />
                  </MenuItemsContainer>
                </CategoryBlock>
              )
            )
          : (() => {
              const ComponentToRender = categoryComponents[selectedCategory];
              return ComponentToRender ? (
                <CategoryBlock>
                  <CategoryTitle>{selectedCategory}</CategoryTitle>
                  <Subtitle>
                    {selectedCategory === "LUNCH SPECIAL (Bento Box)" && (
                      <Additional>Available until 3:00 p.m</Additional>
                    )}
                    {selectedCategory === "MAIN DISH" && (
                      <Additional> Served with miso soup & salad</Additional>
                    )}
                    <i>Extra Charge for Substitutions</i>
                  </Subtitle>
                  <MenuItemsContainer>
                    <ComponentToRender items={filteredMenuItems} />
                  </MenuItemsContainer>
                </CategoryBlock>
              ) : null;
            })()}
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

const MenuContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 90px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CategoryBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 0 30px;
`;

const Subtitle = styled.div`
  font-size: 1em;
  text-align: left;
  font-weight: semi-bold;
  margin-bottom: 70px;
`;

const Additional = styled.div`
  font-size: 1em;
  text-align: left;
  font-weight: semi-bold;
`;

const CategoryTitle = styled.h2`
  font-size: 2.4em;
  text-align: left;
  margin-bottom: 10px;
  font-weight: bold;
`;

const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; // This ensures the menu items move to the next line if there's not enough space
  justify-content: space-between;
`;
