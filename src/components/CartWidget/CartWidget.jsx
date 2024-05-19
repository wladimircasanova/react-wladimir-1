import { Box } from '@chakra-ui/react'
import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";

const CartWidget = () => {
  return (
    <Box m={3}>
      <FaCartArrowDown />
    </Box>
  )
}

export default CartWidget