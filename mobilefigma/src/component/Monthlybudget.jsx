import React from "react";
import { Box, Flex, Text, Avatar, Container, Heading } from "@chakra-ui/react";
import { PiNotionLogoFill } from "react-icons/pi";

const Monthlybudget = () => {
  return (
      <Flex
        w={"131px"}
        h={"20px"}
        mt={"128px"}
        ml={"30px"}
        border="1px solid red"
        // align={"center"}
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
        //   ml={"15px"}
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
  );
};

export default Monthlybudget;
