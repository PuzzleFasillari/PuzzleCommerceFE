import { Josefin_Sans } from 'next/font/google';

const inter = Josefin_Sans({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = {
  colors: {
    pink: '#FB2E86',
    red: '#FB2448',
    purple: {
      default: '#7E33E0',
      offPurple: '#9F63B5',
      pantonePurple: '#E0D3F5',
    },
    blue: {
      default: '#2F1AC4',
      offBlue: '#151875',
      offNavyBlue: '#3F509E',
      navyBlue: '#151875',
      skyBlue: 'linear-gradient(122deg, #F3F9FF 0%, #F1F0FF 100%)',
    },
  },
  fonts: {
    josefinSans: inter.style.fontFamily,
  },
  fontWeights: inter.style.fontWeight,
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

export default theme;
