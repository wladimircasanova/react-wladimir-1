import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/CartContext'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Center,
    Heading,
    Button,




  } from '@chakra-ui/react'
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'








const Checkout = () => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        repeatedEmail: '',
        phone: ''
    })
    const [ error, setError ] = useState({})
    const [disableCheckout, setDisableCheckout] = useState(false)




    const { cart, getTotal, clearCart } = useContext(Context)
    const navigate = useNavigate()
    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }




    const validateForm = () => {
        const errors = {}
        if(!user.name) {
            errors.name = 'Debes agregar un nombre para continuar'
        }else if(user.name.length < 3) {
            errors.name = 'El nombre debe tener al menos 3 caracteres'
        }
       
        if(!user.email){
            errors.email = 'Debes agregar un email para continuar'
        }else if(!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = 'El email no es válido'
        }








        setError(errors)
        return Object.keys(errors).length === 0




    }


    const checkStock = async () => {
        for (const item of cart) {
            const docRef = doc(db, 'productos', item.id)
            const productDoc = await getDoc(docRef)
            const currentStock = productDoc.data().stock


            if (currentStock < item.quantity) {
                return false
            }
        }
        return true
    }


    useEffect(() => {
        const updateStockStatus = async () => {
            const stockStatus = await checkStock()
            setDisableCheckout(!stockStatus)
        }
        updateStockStatus()
    }, [cart])










    const getOrder = async () => {
        if(!validateForm()){
            return
        }
        if (cart.length === 0) {
            Swal.fire({
                title: "Carrito vacío",
                text: `Carrito vacío`,
                icon: "error",
                confirmButtonText: "Ir al inicio"}).then(() => {
                    navigate('/')
                });
            return
        } if (!(await checkStock())) {
            Swal.fire({
                title: "Stock Insuficiente",
                text: `Uno o más productos no tienen suficiente stock`,
                icon: "error",
                confirmButtonText: "Aceptar"
            })
            return
        }


       


        const coleccion = collection(db, 'orders')
        try {
            for (const item of cart) {
                const docRef = doc(db, 'productos', item.id)
                const productDoc = await getDoc (docRef)
                const currentStock = productDoc.data().stock


                if ( currentStock >= item.quantity) {
                    await updateDoc(docRef, {
                        stock: currentStock - item.quantity
                    })
                } else {
                    Swal.fire({
                        title: "Producto sin stock",
                        text: `Sin stock suficiente de ${item.nombre}`,
                        icon: "error",
                        confirmButtonText: "Aceptar"})
                }




            }








            const order = {
                buyer: user,
                cart: cart,
                total: getTotal(),
                fecha: Timestamp.now()
            }




            const orderRef = await addDoc(coleccion, order)




            Swal.fire({
                title: "Gracias por tu compra, te esperamos pronto de nuevo.",
                text: `El número de orden es: ${orderRef.id}`,
                icon: "success",
                confirmButtonText: "Ir al inicio",
              }).then(() => {
                 clearCart()
                 navigate('/')
              });
        } catch (error) {
            console.log(error)
        }




    }




    console.log(error)
  return (
    <Center mt={10}>
        <Flex direction={'column'} align={'center'} justify={'center'}>




            <Heading>Datos de facturación</Heading>
            <Flex w={'100%'} justify={'center'} align={'center'}>
                <FormControl>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Ahirton Lara'
                        onChange={updateUser}
                        />
                    {error.name}
                    <FormErrorMessage>{error.name}</FormErrorMessage>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type='email'
                        name='email'
                        placeholder='viviendoensantiago@gmail.com'
                        onChange={updateUser}
                        />
                        {error.email}
                    <FormLabel>Repetir email</FormLabel>
                    <Input
                        type='email'
                        name='repeatedEmail'
                        placeholder='viviendoensantiago@gmail.com'
                        onChange={updateUser}
                        />
                    <FormLabel>Teléfono</FormLabel>
                    <Input
                        type='text'
                        name='phone'
                        placeholder='11221122'
                        onChange={updateUser}
                        />
                </FormControl>
            </Flex>
            <Button mt={5} onClick={getOrder}>
                Finalizar compra
            </Button>
        </Flex>
    </Center>
  )
}




export default Checkout