import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Navbar = () => {
  return (
    <Flex 
    h={'10vh'} 
    w={'100%'} 
    justify={'space-between'} 
    align={'center'}
    backgroundColor={'#063970'}>
      <Heading m={3}>logo</Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<HiOutlineChevronDoubleDown />}>Menú desplegable</MenuButton>
              <MenuList>
                <MenuItem>Camisetas</MenuItem>
                <MenuItem>Pantalones</MenuItem>
                <MenuDivider />
                <MenuItem>Nuestra política de despachos</MenuItem>
              </MenuList>
            </Menu>
      <CartWidget />
      </Flex>
  )
}

export default Navbar