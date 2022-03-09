import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookCard from "../../components/BookCard";
import Title from "../../components/Title";
import { addBooksRedux } from "../../redux/actions/booksAction";
import { setLoading } from "../../redux/actions/categoriesAction";

const Books = () => {
  const [finish, setFinish] = useState([]);
  const search = useSelector((s) => s.categories.search);
  const [page, setPage] = useState(1);
  const { category } = useParams();
  const booksData = useSelector((state) => state.books.books);
  const [data, setData] = useState({});
  const { loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    setLoading(true);
    if (booksData[category]) {
      setData(booksData[category]);
      setLoading(false);
    } else {
      addBooksRedux(category);
    }
  }, [category, booksData]);

  useEffect(() => {
    if (search.length) {
      const arr = data.results?.books.find((item) =>
        item.title.includes(search)
      );
      setFinish(arr);
    } else setFinish(data.results?.books);
  }, [data, search]);

  const _ = require("lodash");
  const data2 = _.chunk(finish || [], 12);
  console.log(data2);
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Title>
          {category.slice(0, 1).toUpperCase() +
            category.slice(1).toLowerCase() || "Books"}
        </Title>

        <Box sx={{ mt: 5 }}>
          <Grid container spacing={3}>
            {loading ? (
              <CircularProgress color="success" />
            ) : error ? (
              <Typography color="error">Error</Typography>
            ) : (
              data2[page - 1]?.map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2}>
                  <BookCard data={item} />
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

export default Books;
