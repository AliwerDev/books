import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/books/${data.list_name_encoded || ""}`)}
    >
      <Card
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: (theme) => theme.myShadows.card,
          borderRadius: 2,
          padding: 3,
        }}
      >
        <img src="/images/book.png" />
        <Typography sx={{ textAlign: "center" }} mt={2} variant={"h6"}>
          {data.list_name || ""}
        </Typography>
      </Card>
    </Box>
  );
};

export default CategoryCard;
