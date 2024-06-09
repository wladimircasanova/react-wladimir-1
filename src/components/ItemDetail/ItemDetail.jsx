import { Box } from '@chakra-ui/react'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({nombre, stock}) => {


const onAdd = (quantity) => {
toast(`Agregaste ${quantity} unidades`)
}












  return (
    <Box>
        nombre:{nombre}
        <ItemCount stock={stock} valorInicial={1} onAdd={onAdd} />
        <ToastContainer />
        </Box>
  )
}


export default ItemDetail