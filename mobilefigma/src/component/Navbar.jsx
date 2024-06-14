import React from "react";
// import "../App.css";
import { GiNetworkBars } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";
import {
  Box,
  Flex,
 
} from "@chakra-ui/react";

const Figmadesign = () => {
  return (
    <Flex
      justifyContent={"space-around"}
      w="375px"
      h="44px"
      align={"center"}
    >
      <Box>9:41</Box>
      <Box display="flex" gap={"12px"}>
        <Box>
          <GiNetworkBars />
        </Box>
        <Box>
          <FaWifi />
        </Box>
        <Box>
          <IoIosBatteryFull />
        </Box>
      </Box>
    </Flex>
  );
};

export default Figmadesign;
