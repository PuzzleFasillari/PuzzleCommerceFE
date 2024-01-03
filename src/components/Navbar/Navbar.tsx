import { Button, ButtonGroup, Container, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { CartIcon, HeartIcon, ProfileIcon } from '@components/Icons';
import SearchIcon from '@components/Icons/SearchIcon';
import Input from '@components/ui/Input';

const Navbar = () => {
  return (
    <Container maxW="container.xl" p={10}>
      <Flex minWidth="max-content" alignItems="center" gap="12">
        <Link href="/">
          <Heading fontSize={16}>
            <Text cursor={'pointer'}>PuzzlEcommerce</Text>
          </Heading>
        </Link>
        <Input placeholder="Search puzzle product" rightIcon={<SearchIcon />} rightIconBackground="pink" />
        <ButtonGroup gap="1">
          <Link href="/login">
            <Button rightIcon={<ProfileIcon fill="black" />} variant="outline">
              Login
            </Button>
          </Link>
          <Button rightIcon={<HeartIcon />} variant="outline">
            Wishlist
          </Button>
          <Button rightIcon={<CartIcon />} variant="outline">
            Cart
          </Button>
        </ButtonGroup>
      </Flex>
    </Container>
  );
};

export default Navbar;
