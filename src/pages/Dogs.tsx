import { Container, Heading } from "@chakra-ui/react";
import DogGallery from "../components/DogGallery";
import React from "react";

const Dogs = () => {
  return (
    <Container maxW="container.md" centerContent>
      <Heading my={4}>İtlər</Heading>
      <DogGallery />
    </Container>
  );
};

export default Dogs;
