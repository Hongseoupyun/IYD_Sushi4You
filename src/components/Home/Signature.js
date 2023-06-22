import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "firebaseConfig";
import styled from "styled-components";
import media from "responsive";
import MenuCard from "components/Home/MenuCard";

export default function Signature() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const menuRef = collection(db, "signaturemenu");
      const snapshot = await getDocs(menuRef);
      const data = snapshot.docs.map((doc) => doc.data());
      console.log("Firebase data:", data);
      setMenuData(data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Heading>Signature Dishes</Heading>
      <MenuContainer>
        {menuData.length === 0 && <p>No menu items found...</p>}
        {menuData
          .sort((a, b) => a.id - b.id) // Sort the menuData array based on ID in ascending order
          .map((item, index) => (
            <MenuCard
              key={item.id || index} // Use index as a fallback key
              name={item.name}
              description={item.desc}
              price={item.price}
              img={item.img}
            />
          ))}
      </MenuContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 0;
  background-color: #fbf1dd;
`;

const MenuContainer = styled.div`
  width: 100%;
  max-width: 1200px;  // Limit the maximum width to avoid stretching on large screens
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 10px;   // Add some horizontal padding to avoid content sticking to the sides
`;

const Heading = styled.h1`
  font-weight: bold;
  color: #05493c;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;

  ${media.tabletL`
    font-size: 2.7rem;
    margin-bottom: 15px;
  `}

  ${media.tablet`
    font-size: 2.2rem;
  `}

  ${media.mobileL`
    font-size: 1.7rem;
  `}

  ${media.mobileM`
    font-size: 1.5rem;`}

  ${media.galaxyFold`
    font-size: 1.3rem;
  `}
`;
