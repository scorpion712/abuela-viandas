import { Container, TextField } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import GenericDialog from '../components/dialogs/generic/GenericDialog';
import EditForm from '../components/EditForm';
import FoodTable from '../components/FoodTable';

import Layout from '../components/Layout';
import useStyles from '../styles/styles';
import { editTitle } from '../utils/constants';

export default function FoodPage(): JSX.Element {

  const [search, setSearch] = React.useState("");
  const classes = useStyles();
  
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  }
  
  // open and close dialog
  
  const [openEditDialog,setOpenEditDialog]= React.useState(false);

  const handleOpenEditDialog =(open: boolean) => /*(event: any) => */{ 
    setOpenEditDialog(open);
  };
  const handleCloseEditDialog = (close: boolean)=>{
    setOpenEditDialog(close);
  };

  return (
    <Layout>
      <Container className={classes.main}>
        <TextField
          fullWidth
          className={classes.searchText}
          
          placeholder='Buscar Menu...'
          value={search}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleSearchChange(e)}
        />
        <FoodTable search={search} handleEditDrawer={handleOpenEditDialog} />
        <GenericDialog open={openEditDialog} modalTitle={editTitle } handleClose={()=> setOpenEditDialog(false)} >
          <EditForm/>
        </GenericDialog>
      </Container>
    </Layout>
  );
}
