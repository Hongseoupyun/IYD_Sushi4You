import React from "react";
import styled from "styled-components";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import media from "responsive";
import CategoryButtons from "components/Menu/CategoryButtons";
import { useMenuData } from "hooks/useMenuData";
import { useMenuClick } from "hooks/useMenuClick";
import { useCategoryClick } from "hooks/useCategoryClick";

// import components for each category
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

export default function Menu() {
  const { menuItems, categories, loadingCategories } = useMenuData();
  const { selectedMenuItem, handleMenuClick, setSelectedMenuItem } =
    useMenuClick();
  const {
    selectedCategory,
    handleCategoryClick,
    setSelectedCategory,
    filteredMenuItems,
  } = useCategoryClick(menuItems);

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
                    {category === "MAIN DISH" && (
                      <Additional> Served with miso soup & salad</Additional>
                    )}
                    {category === "LUNCH SPECIAL (Bento Box)" && (
                      <Additional>Available until 3:00 p.m</Additional>
                    )}
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
                    <i>Extra Charge for Substitutions</i>
                    {selectedCategory === "MAIN DISH" && (
                      <Additional> Served with miso soup & salad</Additional>
                    )}
                    {selectedCategory === "LUNCH SPECIAL (Bento Box)" && (
                      <Additional>Available until 3:00 p.m</Additional>
                    )}
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

  ${media.tabletL`
    padding: 20px 1px;
    `}

  ${media.tablet`

    padding-top: 10px;
    padding-bottom: 0px;
    `}

    ${media.mobileL`
   
    padding-top: 10px;
    padding-bottom: 0px;
  
  `}

  ${media.galaxyFold`
    padding-top: 10px;
    padding-bottom: 0px;
  `}
`;

const CategoryBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding: 0 30px;

  ${media.mobileL`
    padding: 0 10px;
    margin-bottom: 30px;
  `}
`;

const Subtitle = styled.div`
  font-size: 1em;
  text-align: left;
  font-weight: semi-bold;
  margin-bottom: 50px;
  padding-bottom: 15px;
  ${media.mobileL`
  padding-bottom: 0px;
    margin-bottom: 10px;
    font-size: 0.8em;
  `}
`;

const Additional = styled.div`
  font-size: 1em;
  text-align: left;
  font-weight: semi-bold;
  margin-bottom: 10px;
  padding-top: 10px;
`;

const CategoryTitle = styled.h2`
  font-size: 2.4em;
  text-align: left;
  margin-bottom: 10px;
  font-weight: bold;

  ${media.mobileL`
    font-size: 1.4em;
  `}

  ${media.galaxyFold`
    font-size: 1em;
  `}
`;

const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; // This ensures the menu items move to the next line if there's not enough space
  justify-content: space-between;
`;
