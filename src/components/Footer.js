import { Container, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#C4C4C4" }}>
      <Container>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          py="40px"
          sx={{ flexWrap: "wrap" }}
        >
          <NavLink to={"/"}>
            <img
              style={{ width: "240px" }}
              src={"/images/logo.png"}
              alt={"books logo"}
            />
          </NavLink>
          <Box>
            <Link href={"https://www.algorismic.uz/"} target="_blank">
              <img style={{ width: "240px" }} src={"/images/Algorismic.png"} />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
