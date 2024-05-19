import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

function App() {
    return (
        <ChakraProvider>
            <Box className="App">
            <Navbar />
            <ItemListContainer title="Bienvenidos a la tiendita de Casanova!" />
        </Box>
        </ChakraProvider>
        );
    }

export default App;
