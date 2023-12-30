import { CartIcon, HeartIcon, ProfileIcon } from '@components/Icons';
import SearchIcon from '@components/Icons/SearchIcon';
import Input from '@components/ui/Input';
import { Button, NavbarContent, NavbarItem, Navbar as NextNavbar } from '@nextui-org/react';

const Navbar = () => {
  return (
    <NextNavbar isBordered className="p-4">
      <p className="text-pink font-bold text-inherit">PuzzlEcommerce</p>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input
            variant="bordered"
            placeholder="Search puzzle product"
            rightIcon={<SearchIcon />}
            rightIconBackground="pink"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Button className="bg-blue-100" variant="light" endContent={<ProfileIcon fill="black" />}>
            Login
          </Button>
          <Button className="bg-blue-100" variant="light" endContent={<HeartIcon />}>
            Wishlist
          </Button>
          <Button className="bg-blue-100" variant="light" endContent={<CartIcon />}>
            Cart
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextNavbar>
  );
};

export default Navbar;
