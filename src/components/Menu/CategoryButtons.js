import React from "react";
import styled from "styled-components";

export default function CategoryButtons(props) {
  const {
    selectedCategory,
    handleCategoryClick,
    loadingCategories,
  } = props;

  const categories = ["SOUP", "SALAD", "APPETIZERS", "SUSHI & SASHIMI A LA CARTE", "SIGNATURE MAKI (ROLL)", "MAKI (ROLL)", "CHEF'S SPECIAL", "LUNCH SPECIAL (BENTO BOX)", "MAIN DISH", "SASHIMI PARTY TRAY", "SUSHI & MAKI TRAY", "SUSHI, SASHIMI & MAKI COMBO TRAY", "MAKI TRAY", "ADD-ONS", "DRINKS"];
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
