import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'


import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemDetailContainer = () => {
    const [ producto, setProducto ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { productId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const queryRef = doc(db, 'productos', productId)
            const response = await getDoc(queryRef)
            const newItem = {
                ...response.data(),
                id: response.id
            }
            setProducto(newItem)
            setLoading(false)
        }
        getData()
    },[])

    return (
        <>
              {
                loading ? 
                <Flex justify={'center'} align={'center'} h={'70vh'}>
           
                </Flex>
                : 
                <>
                <Flex justify={'center'} align={'center'} h={'85vh'}>
                <ItemDetail {...producto} />
                </Flex>
                </>
            }
        </>
    )
}

export default ItemDetailContainer