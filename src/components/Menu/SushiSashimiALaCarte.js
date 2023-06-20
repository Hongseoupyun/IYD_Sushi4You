import React from "react";
import styled from "styled-components";
import media from "responsive";
import MenuItemNoPrice from "components/Menu/MenuItemNoPrice";

export default function SushiSashimiALaCarte(props) {
  const { items = [] } = props;

  // Get a list of unique prices
  const uniquePrices = [...new Set(items.map((item) => item.price))].sort(
    (a, b) => a - b
  );

  return (
    <Container>
      {uniquePrices.map((price) => (
        <React.Fragment key={price}>
          <ItemGroup>1 ORDER 2 PCS {price}</ItemGroup>
          <Menus>
            {items
              .filter((item) => item.price === price)
              .map((item) => (
                <MenuItemNoPrice key={item.id} item={item} />
              ))}
          </Menus>
        </React.Fragment>
      ))}
    </Container>
  );
}

const Container = styled.div`
 
`;

const ItemGroup = styled.div`
  border: 1px solid #ddd;
  background-color: #99c0a3;
  font-size: 1.6em;
  color: #333;
  text-align: left;
  width: auto;
  display: inline-block;
  font-weight: 600;
  border-radius: 10px;
  padding: 10px 15px;

  ${media.mobileL`
    font-size: 1.2em;
    padding: 5px 10px;
    width: auto;
    margin-top: 20px;
  `}

  ${media.galaxyFold`
    font-size: 1em;
    padding: 5px 10px;
    width: auto;
    margin-top: 20px;
  `}
`;

const Menus = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 45px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${media.mobileL`
    align-items: center;
    padding: 20px 0;
  `}
  ${media.galaxyFold`
    padding-top: 10px;
    padding-bottom: 0px;
  `}
`;
