'use client';
import { logoutAction } from '@actions/user-actions';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FiArchive, FiChevronDown } from 'react-icons/fi';

const UserMenuButton = () => {
  const logout = async () => {
    await logoutAction();
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FiChevronDown />} variant="outline">
        My Account
      </MenuButton>
      <MenuList width={40}>
        <MenuItem disabled icon={<FiArchive />}>
          Orders
        </MenuItem>
        <MenuItem icon={<FiArchive />} onClick={logout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenuButton;
