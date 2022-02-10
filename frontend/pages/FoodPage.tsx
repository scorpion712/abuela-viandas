import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import FoodTable from '../components/FoodTable';

import Layout from '../components/Layout';

export default function FoodPage(): JSX.Element {
  return (
    <Layout>
      <div>
        <Autocomplete
          style={{ margin: '1rem 0 .5rem 0' }}
          id="food-search"
          freeSolo
          options={[]}
          renderInput={(params) => (
            <TextField {...params} label="Buscar menu" />
          )}
        />
        <FoodTable />
      </div>
    </Layout>
  );
}
