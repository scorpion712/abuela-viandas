import React from "react";
import { Drawer } from "@mui/material";
import { CartProvider } from "./context/CartProvider";
import { CartBody } from "./components/CartBody";

interface CartProps {
  openCartDialog: boolean;
  toggleDrawer: () => void;
}

export default function Cart(props: CartProps) {
  const { openCartDialog, toggleDrawer } = props;

  return (
    <Drawer
      anchor={"right"}
      open={openCartDialog}
      onClose={toggleDrawer}
    >
      <CartBody anchor="right" toggleDrawer={toggleDrawer} />
    </Drawer>
  );
}
