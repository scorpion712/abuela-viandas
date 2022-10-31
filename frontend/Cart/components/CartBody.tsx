import React from "react";
import { Box, Button, Divider } from "@mui/material";
 
import CartCheckout from "./CartCheckout";
import { CartProvider } from "../context/CartProvider";
import { CartTitle } from "./CartTitle";
import { CartItemsList } from "./CartItemsList";
import { CartTotal } from "./CartTotal";
import { useCart } from "../hooks/useCart";

interface CartBodyProps {
  anchor: string;
  toggleDrawer: () => void;
}

export const CartBody = (props: CartBodyProps) => {
  const { anchor, toggleDrawer } = props;

  return (
    // <CartProvider>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 550 }}
        role="presentation"  
      >
        <CartTitle />
        <Divider />
        <CartItemsList />
        <Divider />
        <br />
        <CartTotal />
        <Divider />
        <br />
        <CartCheckout />
      </Box>
    // </CartProvider>
  );
};
