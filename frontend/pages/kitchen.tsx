import { Container, TextField } from "@mui/material";
import React from "react";

import Layout from "../components/Layout";
import OrderTable from "../components/orders/OrderTable";
import useStyles from "../styles/styles";

export default function KitchenPage() { 
  const [search, setSearch] = React.useState("");
  const classes = useStyles();

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <Container className={classes.main}>
        <TextField
          className={classes.searchText}
          fullWidth
          placeholder="Buscar Menu..."
          value={search}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => handleSearchChange(e)}
        />
        <OrderTable search={search} />
      </Container>
    </Layout>
  );
}
