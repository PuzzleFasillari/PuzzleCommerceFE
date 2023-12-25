'use client';

import GlobalStyle from '@/components/GlobalStyles';
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import theme from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

const ApplicationProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};
export default ApplicationProviders;
