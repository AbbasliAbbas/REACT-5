import { useState, useEffect } from "react";
import { Grid, Image, Box, Spinner, Heading, Button } from "@chakra-ui/react";
import React from "react";

const DogGallery = () => {
  const [dogs, setDogs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/6")
      .then((res) => res.json())
      .then((data) => {
        setDogs(data.message);
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      <Heading color="white" mb={4}>Dogs Gallery</Heading>
      {loading ? <Spinner color="white" /> : (
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
          {dogs.map((url, index) => (
            <Image key={index} src={url} borderRadius="lg" shadow="md" objectFit="cover" boxSize="300px" bg="black" p={2} border="1px solid #333" />
          ))}
          <Button onClick={    () => {
                    fetch('https://dog.ceo/api/breeds/image/random/6')
                        .then(res => res.json())
                        .then(data => setDogs(data.message));
                }
            }>Load More Dogs</Button>
        </Grid>
      )}
    </Box>
  );
};

export default DogGallery;