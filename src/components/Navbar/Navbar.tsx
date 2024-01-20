import { logoutAction } from '@actions/user-actions';
import {
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import Input from '@components/ui/Input';
import { getUser } from '@utils/auth';
import NextLink from 'next/link';
import { FiChevronDown, FiHeart, FiLogOut, FiShoppingCart, FiUser } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { MdAddShoppingCart } from 'react-icons/md';

const Navbar = async () => {
  const isUserSignedIn = await getUser();
  const logout = logoutAction.bind(null);
  return (
    <Container maxW="container.xl">
      <Center w="100%" p={10}>
        <Flex w="100%" alignItems="center" gap="12">
          <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
            <Heading fontSize={16}>
              <Text cursor={'pointer'}>PuzzlEcommerce</Text>
            </Heading>
          </Link>
          <Input
            placeholder="Search puzzle product"
            focusBorderColor="pink.300"
            rightIcon={<IoSearchOutline color="red" size="1.5em" />}
          />
          <ButtonGroup>
            {isUserSignedIn ? (
              <Menu>
                <MenuButton as={Button} rightIcon={<FiChevronDown />} variant="ghost">
                  <Text fontWeight="400">My Account</Text>
                </MenuButton>
                <MenuList width={40}>
                  <Link _hover={{ textDecoration: 'none' }} as={NextLink} href="/product/add-product">
                    <MenuItem icon={<MdAddShoppingCart />}>Add product</MenuItem>
                  </Link>

                  <form action={logout}>
                    <MenuItem icon={<FiLogOut />} type="submit">
                      Logout
                    </MenuItem>
                  </form>
                </MenuList>
              </Menu>
            ) : (
              <Link as={NextLink} href="/login">
                <Button rightIcon={<FiUser />} variant="ghost">
                  <Text fontWeight="400">Login</Text>
                </Button>
              </Link>
            )}
            <Button rightIcon={<FiHeart />} variant="ghost">
              <Text fontWeight="400">Wishlist</Text>
            </Button>
            <Button rightIcon={<FiShoppingCart />} variant="ghost">
              <Text fontWeight="400">Cart</Text>
            </Button>
          </ButtonGroup>
        </Flex>
      </Center>
    </Container>
  );
};

export default Navbar;
