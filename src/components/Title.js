import { Typography } from "@mui/material";
import React from "react";

const Title = ({ children }) => {
  return (
    <Typography
      variant="h4"
      sx={{ color: (theme) => theme.palette.text.primary, textAlign: "center",  }}
    >
      {children}
    </Typography>
  );
};

export default Title;
