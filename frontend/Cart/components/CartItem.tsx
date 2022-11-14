import { Badge, Grid, ListItemIcon, ListItemText } from "@mui/material";
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
    backgroundColor: "#fcc92a",
    marginLeft: "1rem",
  },
}))(Badge);

export const CartItem = (props: CartItemProps) => {
  const classes = useStyles();
  const { product } = props;
  const { item } = product;
  return (
    <Grid container xs={10} >
      <Grid item xs={3}> 
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
      </Grid>
      <Grid item xs={6}> 
        <ListItemText primary={item.name} secondary={item.description} /> 
      </Grid>
      <Grid item xs={2}> 
        <ListItemText
          className={classes.cartItemListText}
          primary={"$" + item.unitPrice * product.itemQty}
          secondary={product.itemQty + " X $" + item.unitPrice}
        /> 
      </Grid>
    </Grid>
  );
};
