import { Badge, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

import useStyles from "../../hooks/useStyles";
import { CartItem as ICartItem } from "../interfaces/cart.interfaces";

interface CartItemProps {
  product: ICartItem;
}
const StyledBadge = withStyles((theme) => ({
  badge: { 
    border: `2px solid ${theme.palette.background.paper}`, 
    backgroundColor: '#fcc92a',
    marginLeft: '1rem'
  },
}))(Badge);

export const CartItem = (props: CartItemProps) => {
  const classes = useStyles();
  const { product } = props;
  const { item } = product;
  return (
    <>
      <StyledBadge
        badgeContent={product.note ? 1 : ""}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ListItemIcon>
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              height="80px"
              width="80px"
              alt="Not Found"
              style={{ borderRadius: "50%" }}
            />
          }
        </ListItemIcon>
      </StyledBadge>
      <ListItemText
        style={{ marginLeft: ".3rem", marginRight: ".3rem" }}
        primary={item.name}
        secondary={item.description}
      />
      <ListItemText
        style={{ marginRight: "3rem" }}
        className={classes.cartItemListText}
        primary={"$" + item.unitPrice * product.itemQty}
        secondary={product.itemQty + " X $" + item.unitPrice}
      />
    </>
  );
};
