import * as React from "react";
import {
  AppBar, 
  Box, 
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";
import NextLink from "next/link";

import { appTitle } from "../utils/constants";
import useStyles from "../hooks/useStyles";
import Cart from "../Cart/Cart";
import { CartProvider } from "../Cart/context/CartProvider";
import { useToggle } from "../hooks/useToggle";
import { AppBarIcons } from "./AppBarIcons";

export default function Layout(props: { children: JSX.Element }) {
  const classes = useStyles();
  const { open: openCartDialog, toggleOpen: toggleDrawer } = useToggle();

  const { children } = props;

  return (
    <div>
      <Head>
        <title>{appTitle}</title>
        <meta
          name="viewport"
          content="minimum=scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://fonts.google.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <CartProvider>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography gutterBottom className={classes.title}>
                  {appTitle}
                </Typography>
              </Link>
            </NextLink>
            <Box sx={{ flexGrow: 1 }} />
            <AppBarIcons />
          </Toolbar>
        </AppBar>
        {children}
      </CartProvider>
      <footer className={classes.footer}>
        <Typography>Copyrights</Typography>
      </footer>
    </div>
  );
}
