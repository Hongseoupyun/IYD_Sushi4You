import React from "react";
import styled from "styled-components";
import media from "responsive";

export default function CategoryButtons(props) {
  const { selectedCategory, handleCategoryClick, loadingCategories } = props;

  const categories = [
    "SOUP",
    "SALAD",
    "APPETIZERS",
    "SUSHI & SASHIMI A LA CARTE",
    "SIGNATURE MAKI(ROLL)",
    "MAKI(ROLL)",
    "CHEF’S SPECIAL",
    "LUNCH SPECIAL (Bento Box)",
    "MAIN DISH",
    "SASHIMI PARTY TRAY",
    "SUSHI & MAKI TRAY",
    "SUSHI, SASHIMI & MAKI COMBO TRAY",
    "MAKI TRAY",
    "ADD-ONS",
    "DRINKS",
  ];

  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 55px;
  padding-top: 10px;
  flex-wrap: wrap;
  margin-bottom: 50px;
  background-color: #fdfaf5;


  ${media.mobile`
    padding-bottom: 20px;
    padding-top: 10px;
    height: auto;
    margin-bottom: 5px;
  `}

  ${media.tablet`
    padding: 20px;
    margin-bottom: 30px;
  `}
  
`;

const CategoryButton = styled.button`
  background-color: #99c0a3;
  font-weight: 500;
  padding: 10px 20px;
  border: 2px solid transparent;
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

  ${media.mobileL`
    margin: 5px;
    padding: 8px 16px;
    font-size: 0.77em;
    height: 40px;
  `}

  ${media.galaxyFold`
    margin: 2px;
    padding: 5px 10px;
    font-size: 0.5em;
    height: 30px;
  `}
`;
