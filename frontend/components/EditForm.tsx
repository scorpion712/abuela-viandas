import { Button, Grid, Input, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const EditForm = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0, width: '60ch', height: '9ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <Grid

        container
        direction='column'>
        <input
          accept="/home/jero/Documentos/abuela-viandas/abuela-viandas/frontend/public/images/comida-rapida-casera.jpg"
          style={{ display: 'none' }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button variant="outlined" component="span">
            Upload
          </Button>
        </label>
        <TextField
          required
          fullWidth
          id=''
          color='success'
          variant='standard'
          label='Descripcion'
        />
        <TextField
          required
          id=''
          color='success'
          variant='standard'
          label='Categoria' />
        <TextField
          required
          id=''
          color='success'
          variant='standard'
          label='Precio' />

      </Grid>

    </Box>
  )
}

export default EditForm