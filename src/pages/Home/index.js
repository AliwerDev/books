import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Books from "../Books";
import Categories from "../Categories";

const HomePage = () => {
  
  return (
    <Box>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Categories  />} />
        <Route path="/books/:category" element={<Books/>} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default HomePage;
