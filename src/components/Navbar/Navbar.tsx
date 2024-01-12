import { Button, ButtonGroup, Container, Flex, Heading, Link, Text } from '@chakra-ui/react';
import Input from '@components/ui/Input';
import { getUser } from '@utils/auth';
import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import UserMenuButton from './UserMenuButton';

const Navbar = () => {
  const isUserSignedIn = getUser();

  return (
    <Container maxW="container.xl" p={10}>
      <Flex minWidth="max-content" alignItems="center" gap="12">
        <Link href="/">
          <Heading fontSize={16}>
            <Text cursor={'pointer'}>PuzzlEcommerce</Text>
          </Heading>
        </Link>
        <Input
          placeholder="Search puzzle product"
          rightIcon={<IoSearchOutline color="white" size="1.5em" />}
          rightIconBackground="pink"
        />
        <ButtonGroup gap="1">
          {isUserSignedIn ? (
            <UserMenuButton />
          ) : (
            <Link href="/login">
              <Button rightIcon={<FiUser />} variant="outline">
                Login
              </Button>
            </Link>
          )}

          <Button rightIcon={<FiHeart />} variant="outline">
            Wishlist
          </Button>
          <Button rightIcon={<FiShoppingCart />} variant="outline">
            Cart
          </Button>
        </ButtonGroup>
      </Flex>
    </Container>
  );
};

export default Navbar;
