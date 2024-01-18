import { Box, Center } from '@chakra-ui/react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Center height="65vh">
      <Box w="md" boxShadow="2xl" px="10" py={10} rounded="md">
        {children}
      </Box>
    </Center>
  );
};

export default AuthLayout;
