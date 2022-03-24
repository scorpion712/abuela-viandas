import { ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

import useStyles from "../../hooks/useStyles";
import { CartItem as ICartItem } from "../interfaces/cart.interfaces";

interface CartItemProps {
  product: ICartItem;
}

export const CartItem = (props: CartItemProps) => {
  const classes = useStyles();
  const { product } = props;
  const { item } = product; 
  return (
    <>
      <ListItemIcon>
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} height="80px" width="80px" alt="Not Found" />
        }
      </ListItemIcon>
      <ListItemText style={{marginLeft: '.3rem', marginRight: '.3rem'}}
        primary={item.name}
        secondary={item.description}
      />
      <ListItemText style={{marginRight: '3rem'}}
        className={classes.cartItemListText}
        primary={"$" + item.unitPrice * product.itemQty}
        secondary={product.itemQty + " X $" + item.unitPrice}
      />
    </>
  );
};
