import React from 'react'
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
  Center,
} from '@chakra-ui/react';

const ItemListContainer = ({title}) => {
  return (
    <Flex justify={'Center'} align={'center'}>
      <Heading>{title}</Heading>
    </Flex>
  )
}

export default ItemListContainer