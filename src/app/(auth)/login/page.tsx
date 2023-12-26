import { Button, Center, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import Input from '@components/ui/Input';

const Page = () => {
  return (
    <Center flexDirection="column">
      <Heading fontSize="3xl" mb={2}>
        Login
      </Heading>
      <Text fontSize="sm" color="grey.default">
        Please login using account detail bellow.
      </Text>
      <Stack w="100%" spacing={4} mt={5} mb={5}>
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
      </Stack>
      <Flex alignItems="flex-start" w="100%">
        <Link fontSize="sm" color="grey.default">
          Forgot your password?
        </Link>
      </Flex>
      <Button backgroundColor="pink" color="white" w="100%" mt={5}>
        Login
      </Button>
      <Link fontSize="sm" color="grey.default" mt={5}>
        Don’t have an Account? Create account
      </Link>
    </Center>
  );
};

export default Page;
