import { css } from "styled-components";

const colors = {
    white: '#ffffff',
    off_white: '#f6f2eb',
    beige: '#dec19f',
    pale_brown: '#a99174',
    very_light_pink: '#f0f0f0',
    brown_grey: '#b5b5b5',
    black: '#191919',
}
// how to use : ${({ theme }) => theme.colors.cookieOrange};

const sizes = {
    desktop: 102.4,
    tablet: 76.8,
    mobile: 32
  };
  
  const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label]}rem) {
        ${css(...args)};
      }
    `;
    return acc;
  }, {});
  // how to use : ${({ theme }) => theme.media.phone` mobile ver code comes here `;
  
  const theme = {
    colors,
    media
  };
  
  export default theme;