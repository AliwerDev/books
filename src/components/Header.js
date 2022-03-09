import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "url('/images/back.png')",
        display: "grid",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        placeItems: "center",
        minHeight: "80vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          width: { md: "60%", xs: "100%", sm: "80%", xl: "50%" },
          textAlign: "center",
          color: "#fff",
          textShadow: "0px 7px 7px rgba(0, 0, 0, 0.7);",
        }}
      >
        BookShop - easy buy books online
      </Typography>
    </Box>
  );
};

export default Header;
