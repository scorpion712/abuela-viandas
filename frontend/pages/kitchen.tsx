import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import Layout from "../components/Layout";
import OrderTable from "../components/orders/OrderTable";
import useStyles from "../hooks/useStyles";

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
        <Grid container  style={{ marginTop: "1rem" }}>
          <Grid item xs={10} >
            <Typography variant="h4" gutterBottom>
              Pedidos del día de la fecha (420)
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained">Imprimir todo</Button>
          </Grid>
        </Grid>
        <TextField
          className={classes.searchText}
          fullWidth
          color="success"
          placeholder="Buscar Pedido..."
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