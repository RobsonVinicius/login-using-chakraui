// import Head from 'next/head'
import { Heading, Grid, Flex, Image, InputGroup, Input, InputLeftElement, InputRightElement, Link, Button, Text, Icon } from '@chakra-ui/core';
import Divider from '../components/Divider';


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
          marginTop={5}
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
        <InputGroup size="lg">
          <InputLeftElement children={<Icon name="email" color="gray.600"/>} />
          <Input 
            // height="50px"
            backgroundColor="gray.800"
            focusBorderColor="teal.500"
            borderRadius="sm"          
            placeholder="E-mail"
          />
        </InputGroup>

        <InputGroup size="lg" marginTop={2}>
          <InputLeftElement children={<Icon name="lock" color="gray.600"/>} />
          <Input 
            // height="50px"
            backgroundColor="gray.800"
            focusBorderColor="teal.500"
            borderRadius="sm"
            placeholder="Senha"            
          />
          <InputRightElement children={<Icon name="view" color="teal.600" />} />
        </InputGroup>
        
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

        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.300"
          marginTop={6}
        >
          Não tem uma conta? {" "}
          <Link
            color="teal.600"
            fontWeight="bold"
            _hover={{ color: "#319795" }}
          >
            Registre-se
          </Link>
        </Text>

        <Divider/>

        <Flex alignItems="center">
          <Text fontSize="sm">
            Ou entre com
          </Text>
          <Button
            height="50px"
            flex="1"            
            backgroundColor="gray.600"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: "teal.500" }}
          >
            Github
          </Button>
        </Flex>

      </Flex>
    </Grid>
  )
}
