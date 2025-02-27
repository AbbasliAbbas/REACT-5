import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="#3b82f6" py={4} px={8} color="white">
      <Flex justify="space-between" align="center">
        <NavLink  style={{ fontSize: "20px", fontWeight: "bold", color: "white" }} to={"/"}>
          🐶🐱 Pet Gallery
        </NavLink>
        <Flex gap={4}>
          <NavLink to="/dogs" style={{ fontWeight: "bold", color: "white" }}>Dogs</NavLink>
          <NavLink to="/cats" style={{ fontWeight: "bold", color: "white" }} >Cats</NavLink>
        </Flex>
      </Flex>

    </Box>
  );
};

export default Header;
