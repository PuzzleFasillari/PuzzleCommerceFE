import { Box, Container, Flex } from '@chakra-ui/react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxW="container.xl">
      <Flex justify="center">
        <Box mt={40} w="md" boxShadow="2xl" px="10" py={10} rounded="md">
          {children}
        </Box>
      </Flex>
    </Container>
  );
};

export default AuthLayout;
