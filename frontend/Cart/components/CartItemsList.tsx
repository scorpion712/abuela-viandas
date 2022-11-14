import React from "react";
import {
  Box,
  ButtonGroup,
  Grid,
  List,
  ListItem,
} from "@mui/material";
import useStyles from "../../hooks/useStyles";
import { CartItemControlButton } from "./CartItemControlButton";
import { CartItem as CartItemComponent } from "./CartItem";
import { useCart } from "../hooks/useCart";
import { CartItem } from "../interfaces/cart.interfaces";


export const CartItemsList = () => {
  const classes = useStyles();
  const { cartItems } = useCart();  
  return (
    <>
      {cartItems.map((item: CartItem) => (
        // eslint-disable-next-line react/jsx-key
        <Box key={item.itemId} sx={{mb: 2, ml: 1, mt: 1}}> 
          {/* <ListItem className={classes.cartItemsList} key={item.itemId}> */}
            <Grid container >
              <CartItemComponent product={item} />
              <CartItemControlButton productId={item.item.id}/>
            </Grid>  
          {/* </ListItem> */} 
        </Box>
      ))}
    </>
  );
};
