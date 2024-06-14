import React from "react";
import { Box, Flex, Text, Avatar, Container, Heading } from "@chakra-ui/react";
import { PiNotionLogoFill } from "react-icons/pi";

const Monthlybudget = () => {
  return (
    <Container>
      <Flex
        w={"131px"}
        h={"20px"}
        mt={"128px"}
        ml={"30px"}
        border="1px solid red"
        align={"center"}
        justifyContent={"space-between"}
      >
        <Avatar
          color={"#0466C8"}
          background={"#CBDEF2"}
          size="2xs"
          name="N"
          src="https://bit.ly/tioluwani-kolawole"
        />
        <Text
          w={"101px"}
          ml={"15px"}
          color={"#707480"}
          fontWeight={400}
          fontSize={"14px"}
          lineHeight={"20.3px"}
          letterSpacing={"-0.5%"}
          fontFamily={"Circular Std"}
        >
          Monthly Budget
        </Text>
      </Flex>

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
    </Container>
  );
};

export default Monthlybudget;
