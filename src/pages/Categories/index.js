import {
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import Title from "../../components/Title";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getCategoriesRedux,
  setLoading,
} from "../../redux/actions/categoriesAction";

const Categories = () => {
  const [finish, setFinish] = useState([]);

  const search = useSelector((s) => s.categories.search);
  useEffect(() => {
    setLoading(true);
    getCategoriesRedux();
  }, []);
  const [page, setPage] = useState(1);
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (search.length) {
      const arr = categories.results.filter((item) =>
        item["list_name"].toLowerCase().includes(search.toLowerCase())
      );
      console.log(arr, "nima");
      setFinish(arr);
    } else setFinish(categories.results);
  }, [categories, search]);
  const _ = require("lodash");
  const data2 = _.chunk(finish, 12);
  console.log(data2);
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Title>Categories</Title>

        <Box sx={{ mt: 5 }}>
          <Grid container spacing={3}>
            {loading ? (
              <CircularProgress color="success" />
            ) : error ? (
              <Typography color="error">Error</Typography>
            ) : (
              data2[page - 1]?.map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <CategoryCard data={item} />
                </Grid>
              ))
            )}
          </Grid>
          <Box display={"flex"} justifyContent="center" mt={5}>
            <Pagination
              count={data2.length || 0}
              onChange={(e, p) => setPage(p)}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Categories;
