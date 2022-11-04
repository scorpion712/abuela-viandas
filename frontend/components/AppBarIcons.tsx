import { Badge, Box, IconButton, Button, Alert } from "@mui/material";
import React, { useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Snackbar from "@material-ui/core/Snackbar";
import Slide, { SlideProps } from "@material-ui/core/Slide";

import { useCart } from "../Cart/hooks/useCart";
import { useToggle } from "../hooks/useToggle";
import Cart from "../Cart/Cart";
import router from "next/router";
import useStyles from "../hooks/useStyles";

function TransitionLeft(props: any) {
  return <Slide {...props} direction="left" />;
}

export const AppBarIcons = () => {

  const classes = useStyles();

  const { open: openCartDialog, toggleOpen: toggleDrawer } = useToggle();
  const { cartItems } = useCart();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
        onClick={toggleDrawer}
      >
        <Badge badgeContent={cartItems?.length} color="error">
          <ShoppingCartIcon onClick={() => setOpen(cartItems.length <= 0)}/>
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
        onClick={handleLoginClick}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      {/* </Link>
            </NextLink> */}
      {open || cartItems.length <= 0 ? (
        <Snackbar
          open={open}
          onClose={handleClose}
          TransitionComponent={TransitionLeft} 
          key={"transition ? transition.name : "}
        >
          <Alert
            severity="warning"
            className={classes.popUpMessage}
          >
            El carrito está vacío!
          </Alert>
        </Snackbar>
      ) : (
        <Cart toggleDrawer={toggleDrawer} openCartDialog={openCartDialog} />
      )}
    </Box>
  );
};
