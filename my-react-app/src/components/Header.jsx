import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import biciImage from '../images/bici.avif';

const Header = () => {
  return (
    <Box
      backgroundImage={`url(${biciImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      height="500px"
      textAlign="center"
      color="white"
      position="relative"
    >

  <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
        background="linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7))"
      />

      <Text
        fontSize="70px"
        fontWeight="bold"
        fontFamily="Lato, Arial, sans-serif"
        position="absolute"
        top="35%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="100%"
        color="#ffffff"
      >
        Domina el Terreno
      </Text>


      <Box position="absolute" bottom="20%" left="50%" transform="translateX(-50%)">
        <Button
          variant="outline"
          color="white"
          _hover={{ bg: 'white', color: 'black' }}
          mb={2}
          mr={20} // Espacio horizontal entre botones
          borderWidth="2px"
          fontSize="lg" // Tamaño del texto
          background="transparent"
           style={{ width: '150px', height: '50px' }}
        >
          Ver Detalles
        </Button>
        <Button
          variant="outline"
          color="white"
          _hover={{ bg: 'white', color: 'black' }}
          fontSize="lg"
          background="transparent"
           style={{ width: '150px', height: '50px' }}
        >
          Ver Video
        </Button>
      </Box>
    </Box>
  );
};

export default Header;