import React from 'react';
import { Box, Flex, Text, Avatar, Container, Heading } from "@chakra-ui/react";

const Details = () => {
  return (
    <Container
    w={"315px"}
    h={"51px"}
    mt={"158px"}
    ml={"30px"}
    borderRadius={"10px"}
    boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
  >
    <Heading
      as={"h1"}
      fontFamily={"Circular Std"}
      fontSize={"28px"}
      lineHeight={"36px"}
      fontWeight={700}
      h={"36px"}
      // letterSpacing={'-5%'}
    >
      N120,000
    </Heading>
  </Container>
  )
}

export default Details
