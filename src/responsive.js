import { css } from "styled-components";

const sizes = {
  mobile: 600,
  tablet: 1024,
  // tabletPortrait: 900,
  // tabletLandscape: 1200,
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
