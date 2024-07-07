import React from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import {
  Flex,
  Button,
  Menu,
  Image,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
} from '@chakra-ui/react';
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import logo from '../../assets/logo-casanova.png'

const Navbar = () => {
  return (
    <Flex 
      h={'10vh'} 
      w={'100%'} 
      justify={'space-between'} 
      align={'center'}
      backgroundColor={'#063970'}>
       <Heading m={3}>
      <Link to='/'>
        <Image src={logo} alt='logo' boxSize='100px'/>
      </Link>
    </Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<HiOutlineChevronDoubleDown />}>
          Menú desplegable
        </MenuButton>
        <MenuList>
          <MenuItem as={RouterLink} to='/categorias/Prenda superior'>Prenda superior</MenuItem>
          <MenuItem as={RouterLink} to='/categorias/Prenda inferior'>Prenda inferior</MenuItem>
          <MenuItem as={RouterLink} to='/categorias/Accesorios'>Accesorios</MenuItem>
          <MenuItem as={RouterLink} to='/categorias/Calzado'>Calzado</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default Navbar;