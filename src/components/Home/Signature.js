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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 160vh;
  background-color: #fbf1dd;

  ${media.tablet`
    height: 1000px;
  `}

  ${media.mobile`
    height: 1300px;
  `}
`;


const Heading = styled.h1`
  font-weight: bold;
  color: #05493c;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 50px;

  ${media.tablet`
    font-size: 2.5rem;
    margin-top: 30px;
    margin-bottom: 15px;
  `}

  ${media.mobile`
    font-size: 1.7rem;
    margin-top: 20px;
    margin-bottom: 10px;
  `}
`;

const MenuContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  ${media.tablet`
    width: 95%;
  `}

  ${media.mobile`
    width: 100%;
  `}
`;
