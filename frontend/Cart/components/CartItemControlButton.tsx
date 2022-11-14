import React from "react";
import { Button, ButtonGroup, Grid } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import useStyles from "../../hooks/useStyles";
import { useCart } from "../hooks/useCart";

interface CartItemControlBtnProps {
  productId: number | string;
}

export const CartItemControlButton = (props: CartItemControlBtnProps) => {
  const classes = useStyles();

  const { productId } = props;
  const { addOneToCart, deleteFromCart, removeFromCart } = useCart();

  return (
    <Grid container xs={2}>
      <Grid item xs={12}>
       <AddCircleOutlineIcon className={classes.addCircleIcon} onClick={() => addOneToCart(productId)}/>
       <RemoveCircleOutlineIcon className={classes.removeCircleIcon} onClick={() => deleteFromCart(productId)}/>
       <DeleteForeverIcon className={classes.deleteCircleIcon} onClick={() => removeFromCart(productId)}/>
      </Grid>
    </Grid> 
  );
};
