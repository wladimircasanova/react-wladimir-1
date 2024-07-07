import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import { ChakraProvider } from '@chakra-ui/react';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
    return (
        <ChakraProvider>
            <CartContextProvider>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer title="Bienvenidos a la tiendita de Casanova!"/>}/>
                <Route path='/categorias/:categoryId' element={<ItemListContainer title="Bienvenidos a la tiendita de Casanova!"/>}/>
                <Route path='/producto/:productId' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
        </CartContextProvider>
        </ChakraProvider>
        );
    }

export default App;
