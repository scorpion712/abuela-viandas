import React from "react";
import { Button, ButtonGroup } from "@mui/material";
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
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical contained button group"
      variant="outlined"
      size="small"
      className={classes.cartButtonGroup}
    >
      <Button variant="text" onClick={() => addOneToCart(productId)}>
        <AddCircleOutlineIcon className={classes.addCircleIcon} />
      </Button>
      <Button variant="text" onClick={() => deleteFromCart(productId)}>
        <RemoveCircleOutlineIcon
          className={classes.removeCircleIcon}
        ></RemoveCircleOutlineIcon>
      </Button>
      <Button variant="text" onClick={() => removeFromCart(productId)}>
        <DeleteForeverIcon
          className={classes.deleteCircleIcon}
        ></DeleteForeverIcon>
      </Button>
    </ButtonGroup>
  );
};
