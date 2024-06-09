import React from 'react'
import Item from '../Item/Item'
import { Box, Flex } from '@chakra-ui/react'


const ItemList = ({products}) => {






  return (
    <Flex flexWrap="wrap" justifyContent="space-around">
        {
            products.map((prod) => (
                <Box key={prod.id}>
                    <Item {...prod} />
                </Box>
            ))
        }
    </Flex>
  )
}


export default ItemList