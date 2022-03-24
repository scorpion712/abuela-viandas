import React from "react";
import {
  Box,
  ButtonGroup,
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
    <List>
      {cartItems.map((item: CartItem) => (
        // eslint-disable-next-line react/jsx-key
        <Box key={item.itemId}>
          <ListItem className={classes.cartItemsList} key={item.itemId}>
            <CartItemComponent product={item} />
            <CartItemControlButton productId={item.item.id}/>
          </ListItem>
        </Box>
      ))}
    </List>
  );
};
