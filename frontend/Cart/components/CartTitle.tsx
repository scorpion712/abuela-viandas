import { Box, Typography } from '@mui/material'
import React from 'react'
import useStyles from '../../hooks/useStyles';

export const CartTitle = () => {
    const classes = useStyles();
  return (
    <Box className={classes.cartTitle}>
      <Typography gutterBottom variant="h3">
        Su carrito de compras
      </Typography>
    </Box>
  )
}
