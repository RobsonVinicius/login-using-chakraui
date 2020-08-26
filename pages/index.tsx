// import Head from 'next/head'
import { Heading, Grid, Flex, Image } from '@chakra-ui/core';

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
      '. . . .'
      '. logo formulario .'
      '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start" size="sm">
        <Image 
          w="60%"          
          src="/chakra.png" 
          alt="Chakra Logo"
        />
        <Heading size="2xl" lineHeight="shorter" marginTop={16}> 
           Faça seu login e crie seu tema
        </Heading>
      </Flex>
      <Flex
        gridArea="formulario"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
      </Flex>
    </Grid>
  )
}
