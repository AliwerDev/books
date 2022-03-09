import { Button, Card, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const BookCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Card
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: (theme) => theme.myShadows.card,
          borderRadius: 2,
          objectFit: "cover",
        }}
      >
        <img
          src={data.book_image || ""}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <Box
          sx={{
            padding: 2,
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography mt={2} variant={"h6"}>
              Title: {data.title || ""}
            </Typography>
            <Typography
              mt={1}
              variant={"h6"}
              sx={{
                color: (theme) => theme.palette.secondary.main,
                fontSize: "16px",
              }}
            >
              Author: {data.author || ""}
            </Typography>
            <Typography
              mt={1}
              variant={"h6"}
              sx={{
                color: (theme) => theme.palette.secondary.main,
                fontSize: "16px",
              }}
            >
              Price: {data.price || "0"}
            </Typography>
          </Box>

          <Grid container spacing={2} mt={1}>
            <Grid item xs={6}>
              <Link href={data.amazon_product_url || ""}>
                <Button
                  sx={{ borderRadius: 3, width: "100%" }}
                  variant="contained"
                >
                  Buy
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link href={data.amazon_product_url || ""}>
                <Button
                  sx={{ borderRadius: 3, width: "100%" }}
                  variant="contained"
                >
                  More
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default BookCard;
