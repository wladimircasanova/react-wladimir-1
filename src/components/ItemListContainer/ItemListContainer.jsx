import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../config/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = ({title, texto}) => {
  const [ products, setProducts ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      const coleccion = collection(db, 'productos')

      const queryRef = !categoryId ?
      coleccion 
      :
      query(coleccion, where('categoria', '==', categoryId))

      const response = await getDocs(queryRef)

      const productos = response.docs.map((doc) => {
        const newItem = {
          ...doc.data(),
          id: doc.id
        }
        return newItem
      })
      setProducts(productos)
      setLoading(false)
    }

    getData()
  },[categoryId])

  return (
    <Flex direction={'column'} justify={'center'} align={'center'}> 
      <Heading mt={10}>{title}</Heading>
      {
        loading ? 
        <Flex justify={'center'} align={'center'} h={'50vh'}>
        </Flex>
        : 
        <ItemList products={products} texto={texto}/>
      }
    </Flex>
  )
}

export default ItemListContainer