import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DogGallery from "./components/DogGallery";
import CatGallery from "./components/CatGallery";
import React from "react";

const App = () => {
  return (
    <Box bg="black" minH="100vh">
      <Header />
      <Box p={5}>
        <Routes>
          <Route path="/dogs" element={<DogGallery />} />
          <Route path="/cats" element={<CatGallery />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
