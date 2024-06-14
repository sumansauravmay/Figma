import React from "react";
// import "../App.css";
import { GiNetworkBars } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";
import {
  Box,
  Container,
  Flex,
  Heading,
  Grid,
  Stack,
  Avatar,
  Icon,
  Text,
} from "@chakra-ui/react";
import Monthlybudget from "./Monthlybudget";

const Figmadesign = () => {
  return (
    <Flex
      justifyContent={"space-around"}
      w="375px"
      h="44px"
      border="1px solid red"
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
