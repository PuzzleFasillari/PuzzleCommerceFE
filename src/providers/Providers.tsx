'use client';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '@styles/theme';

const ApplicationProviders = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
export default ApplicationProviders;
