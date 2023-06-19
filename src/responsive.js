import { css } from "styled-components";

const sizes = {
  mobileS: 320, // devices less than 320px
  mobileM: 375, // devices less than 375px
  mobileL: 425, // devices less than 425px
  tablet: 768, // devices less than 768px
  mobile:800,
  tabletL: 1024, // devices less than 1024px
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;
