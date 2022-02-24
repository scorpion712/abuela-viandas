import * as React from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NextLink from 'next/link';

import { appTitle } from '../utils/constants';
import useStyles from '../styles/styles'; 
import Cart from "./Cart";

export default function Layout(props: { children: JSX.Element }) {
  const classes = useStyles();  
  const [openCartDialog, setOpenCartDialog] = React.useState(false);

  const handleOpenCartDialog = () => {
    setOpenCartDialog(true);
  };

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenCartDialog(open);
  };

  const { children } = props;
  return (
    <div>
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content='minimum=scale=1, initial-scale=1, width=device-width' />
        <link rel="stylesheet" href='https://fonts.google.com/css?family=Roboto:300,400,500,700&display=swap' />
      </Head>
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
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={handleOpenCartDialog}
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <NextLink href="/login" passHref>
              <Link>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  //aria-controls={menuId}
                  aria-haspopup="true"
                  //onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Link>
            </NextLink>
          </Box>
        </Toolbar>
      </AppBar>
      {children}  
      <Cart toggleDrawer={toggleDrawer} openCartDialog={openCartDialog}/>
      <footer className={classes.footer}>
        <Typography>Copyrights</Typography>
      </footer>
    </div>
  );
}
