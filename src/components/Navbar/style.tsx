'use client';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: 'flex';
  justify-content: 'center';
`;
export const Logo = styled.h1`
  color: ${theme.colors.blue.offNavyBlue};
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;
export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
