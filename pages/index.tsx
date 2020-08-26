// import Head from 'next/head'
import { Heading, Grid, Flex, Image, Input, Link, Button } from '@chakra-ui/core';

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
        <Heading size="xl" lineHeight="shorter" marginTop={16}> 
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
        <Input 
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="teal.500"
          borderRadius="sm"
          placeholder="E-mail"
        />

        <Input 
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="teal.500"
          borderRadius="sm"
          placeholder="Senha"
          marginTop={2}
        />
        
        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="teal.600"
          fontWeight="bold"
          _hover={{ color: '#319795'}}
        >
          Esqueci minha senha
        </Link>

        <Button
          backgroundColor="teal.500"
          marginTop={6}
          borderRadius="sm"
          height="50px"
          _hover= {{ backgroundColor: "teal.600"}}
        >
          Entrar
        </Button>

      </Flex>
    </Grid>
  )
}
