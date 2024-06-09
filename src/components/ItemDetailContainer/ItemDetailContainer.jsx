import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
  const [ producto, setProducto ] = useState ({})
  const { productId } =  useParams ()
 const navigate = useNavigate()
 useEffect(() => {
	getProductById(productId)
	.then((data) => {
    	if (!data) {
        	navigate('/*');
    	} else {
        	setProducto(data);
    	}
	})
  .catch((error) => console.log(error));


  },[])
  console.log (producto)








  return (
      <>
      <ItemDetail {...producto} />
      </>
  )
}


export default ItemDetailContainer