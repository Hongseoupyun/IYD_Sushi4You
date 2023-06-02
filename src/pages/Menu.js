import React, { useEffect, useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import db from "firebaseConfig";

export default function Menu() {
  const navigate = useNavigate();
  const [menuItems, setMenuItem] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Menu");

  useEffect(() => {
    const fetchData = async () => {
      const menuRef = collection(db, "menu");
      const snapshot = await getDocs(menuRef);
      const data = snapshot.docs.map((doc) => doc.data());
      console.log("Firebase data:", data);
      setMenuItem(data);
    };

    fetchData();
  }, []);

  const handleMenuClick = (path) => {
    if (path === "Home") {
      navigate("/");
    } else if (path === "Location") {
      window.location.href = "/#location";
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setSelectedMenuItem(path); // Call setSelectedMenuItem
  };

  return (
    <div>
      <Navbar
        selectedMenuItem={selectedMenuItem}
        handleMenuClick={handleMenuClick}
        setSelectedMenuItem={setSelectedMenuItem}
      />
      <MenuContainer>
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
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
      <CategoryTitle>{item.category}</CategoryTitle>
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

const MenuContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  align-items: start;
`;

const MenuItemContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 20px;
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

const ItemName = styled.h2`
  font-size: 1.5em;
  color: #333;
  text-align: left;
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
