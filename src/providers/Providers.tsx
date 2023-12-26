'use client';

import theme from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';

const ApplicationProviders = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
export default ApplicationProviders;
