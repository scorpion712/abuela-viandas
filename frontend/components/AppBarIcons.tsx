import { Badge, Box, IconButton } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useAuth0 } from "@auth0/auth0-react";

import { useCart } from "../Cart/hooks/useCart";
import { useToggle } from "../hooks/useToggle";
import Cart from "../Cart/Cart";

export const AppBarIcons = () => {
    const { open: openCartDialog, toggleOpen: toggleDrawer } = useToggle();
    const { cartItems } = useCart();
    const { loginWithRedirect } = useAuth0();

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
        onClick={toggleDrawer}
      >
        <Badge badgeContent={cartItems?.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      {/* <NextLink href="/login" passHref>
              <Link> */}
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        //aria-controls={menuId}
        aria-haspopup="true"
        onClick={() => loginWithRedirect()}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      {/* </Link>
            </NextLink> */}
        <Cart toggleDrawer={toggleDrawer} openCartDialog={openCartDialog} />
    </Box>
  );
};
