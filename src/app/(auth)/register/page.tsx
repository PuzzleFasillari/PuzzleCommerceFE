import { Button, Center, Heading, Link, Stack, Text } from '@chakra-ui/react';
import Input from '@components/ui/Input';

const Page = () => {
  return (
    <Center flexDirection="column">
      <Heading fontSize="3xl" mb={2}>
        Register
      </Heading>
      <Text fontSize="sm" color="grey.default">
        Create your PuzzleCommerce account
      </Text>
      <Stack w="100%" spacing={4} mt={5} mb={5}>
        <Input placeholder="Username" />
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
      </Stack>
      <Button backgroundColor="pink" color="white" w="100%" mt={5}>
        Sign Up
      </Button>
      <Link fontSize="sm" color="grey.default" mt={5}>
        Do you have an Account? Sign in
      </Link>
    </Center>
  );
};

export default Page;
