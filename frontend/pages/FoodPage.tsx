import { Container, TextField } from '@mui/material';
import React from 'react';
import FoodTable from '../components/FoodTable';

import Layout from '../components/Layout';
import useStyles from '../styles/styles';

export default function FoodPage(): JSX.Element {

  const [search, setSearch] = React.useState("");
  const classes = useStyles();

  const handleSearchChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  }


  return (
    <Layout>
      <Container className={classes.main}>
        <TextField
          style={{ margin: '1rem 0 .5rem 0' }}
          fullWidth
          placeholder='Buscar Menu...'
          value={search}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleSearchChange(e)}
        />
        <FoodTable search={search} />
      </Container>
    </Layout>
  );
}
