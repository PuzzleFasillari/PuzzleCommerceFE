'use client';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { removeUser } from '@utils/auth';
import { useTransition } from 'react';
import { FiArchive, FiChevronDown } from 'react-icons/fi';

const UserMenuButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FiChevronDown />} variant="outline">
        My Account
      </MenuButton>
      <MenuList width={40}>
        <MenuItem disabled icon={<FiArchive />}>
          Orders
        </MenuItem>
        <MenuItem icon={<FiArchive />} onClick={() => startTransition(() => removeUser())}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenuButton;
