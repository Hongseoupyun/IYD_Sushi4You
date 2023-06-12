import React, { useEffect, useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MenuItem from "components/Menu/MenuItem";
import CategoryButtons from "components/Menu/CategoryButtons";
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
      console.log("Unique categories:", uniqueCategories)

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
      console.log("category:", category)
      console.log("filteredItems:", filteredItems)
      window.scrollTo({ top: 650, behavior: "smooth" });
    }
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
        {selectedCategory !== "All" ? (
          <CategoryBlock>
            <CategoryTitle>{selectedCategory}</CategoryTitle>
            <Subtitle>
              <i>Extra Charge for Substitions</i>
            </Subtitle>
            <MenuItemsContainer>
              {filteredMenuItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </MenuItemsContainer>
          </CategoryBlock>
        ) : (
          categories.map((category) => (
            <CategoryBlock key={category}>
              <CategoryTitle>{category}</CategoryTitle>
              <Subtitle>
                <i>Extra Charge for Substitions</i>
              </Subtitle>
              <MenuItemsContainer>
                {menuItems
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <MenuItem key={item.id} item={item} />
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

const CategoryTitle = styled.h2`
  font-size: 2.4em;
  text-align: left;
  margin-bottom: 25px;
  font-weight: bold;
`;

const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; // This ensures the menu items move to the next line if there's not enough space
  justify-content: space-between;
`;
