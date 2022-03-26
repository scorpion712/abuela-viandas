import { Button, Container, IconButton, TextField } from '@mui/material';
import { green, red } from '@mui/material/colors';

import React, { useState } from 'react';
import EditForm from '../components/EditForm';
import FoodTable from '../components/food/FoodTable';
import GenericDialog from '../components/generics/GenericDialog';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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

  const handleOpenEditDialog =() => /*(event: any) => */{ 
    setOpenEditDialog(!openEditDialog);
  };
  const handleCloseEditDialog = ()=>{
    setOpenEditDialog(!openEditDialog);
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
        <GenericDialog open={openEditDialog} 
          modalTitle={editTitle } 
          handleClose={handleCloseEditDialog} 
          dialogActions={
            <div >
              <IconButton size='large'>

                <CheckCircleIcon  sx={{ color: green[500] }} />
              </IconButton>
            </div>
          }>
          <EditForm/>
        </GenericDialog>
      </Container>
    </Layout>
  );
}
