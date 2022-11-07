import * as React from "react";
import {
  AppBar,
  Box,
  Container,
  createTheme,
  Grid,
  Link,
  ThemeProvider,
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
import { Footer } from "./Footer";
import LoginState from "../contexts/login/login.state";

const theme = createTheme({
  palette: {
    primary: {
      main: "#25a05a",
    },
    info: {
      main: "#fc5c5c",
    },
    secondary: {
      main: "#F0A049",
    },
  },
});

export default function Layout(props: { children: JSX.Element }) {
  const classes = useStyles();
  const { open: openCartDialog, toggleOpen: toggleDrawer } = useToggle();

  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <LoginState>
        <div className={classes.root}>
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
                  <Link style={{ textDecoration: "none" }}>
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
          <Footer />
        </div>
      </LoginState>
    </ThemeProvider>
  );
}
