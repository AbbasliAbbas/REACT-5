import { useState, useEffect } from "react";
import { Grid, Image, Box, Spinner, Heading, Button } from "@chakra-ui/react";
import React from "react";

const CatGallery = () => {
  const [cats, setCats] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setCats(data.map((cat: any) => cat.url));
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      <Heading color="white" mb={4}>Cats Gallery</Heading>
      {loading ? <Spinner color="white" w={8} h={8} /> : (
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
          {cats.map((url, index) => (
            <Image key={index} src={url} borderRadius="lg" shadow="md" objectFit="cover" boxSize="300px" bg="black" p={2} border="1px solid #333" />
          ))}
          <Button onClick={    () => {
                    fetch('https://api.thecatapi.com/v1/images/search?limit=6')
                        .then(res => res.json())
                        .then(data => setCats(data.message));
                }
            }>Load More Cats</Button>
        </Grid>
      )}
    </Box>
  );
};

export default CatGallery;
