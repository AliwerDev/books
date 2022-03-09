import { Container, IconButton, Input } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Search from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { serching } from "../redux/actions/categoriesAction";

const NavBar = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    serching(value);
  }, [value]);
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Container>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          py="16px"
          sx={{ flexWrap: "wrap" }}
        >
          <NavLink to={"/"}>
            <img
              style={{ width: "240px" }}
              src={"/images/logo.png"}
              alt={"books logo"}
            />
          </NavLink>
          <Box
            sx={{
              width: { md: "300px", sm: "200px", xs: "100%" },
              border: "1px solid #DDDDDD",
              display: "flex",
              alignItems: "center",
              borderRadius: "16px",
              padding: "5px 10px",
            }}
          >
            <Input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              disableUnderline
              sx={{ flex: 1 }}
            />
            <IconButton>
              <Search sx={{}} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
