import { Container, Heading } from "@chakra-ui/react";
import CatGallery from "../components/CatGallery";
import React from "react";

const Cats = () => {
  return (
    <Container maxW="container.md" centerContent>
      <Heading my={4}>Pişiklər</Heading>
      <CatGallery />
    </Container>
  );
};

export default Cats;
