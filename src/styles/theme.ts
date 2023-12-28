import { CSSReset, extendTheme } from '@chakra-ui/react';

const sizes = {
  sizes: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    pink: '#FB2E86',
    red: '#FB2448',
    purple: {
      100: '#E0D3F5',
      200: '#9F63B5',
      300: '#7E33E0',
    },
    blue: {
      100: '#F3F9FF',
      200: '#2F1AC4',
      300: '#151875',
      400: '#3F509E',
      500: '#151875',
    },
    grey: {
      default: '#9096B2',
    },
  },
  sizes,
  config,
  CSSReset,
});

export default theme;
