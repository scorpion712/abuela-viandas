import { Container, TextField } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react'; 
import FoodTable from '../components/food/FoodTable';

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
          className={classes.searchText}
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
