'use client';

import { NextUIProvider } from '@nextui-org/react';

const ApplicationProviders = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
export default ApplicationProviders;
