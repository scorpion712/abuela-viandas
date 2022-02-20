import * as React from "react";
import {
  AppBar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  Drawer,
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


  const cartItems = [
    {
      code: 1006,
      name: "Nombre del Producto",
      short_description: "Muy breve descripcion del producto",
      description: "Aca una descripcion larga",
      price: 1940,
      quantity: 2,
      image: "images/sweater_Bremer.jpg",
      images: [
        "images/sweater_Bremer.jpg",
        "images/sweater_Bremer1.jpg",
        "images/sweater_Bremer2.jpg",
        "images/sweater_Bremer3.jpg",
        "images/sweater_Bremer4.jpg",
        "images/sweater_Bremer5.jpg",
      ]
    },
  ];
  const list = (anchor: any) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 550 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box style={{marginLeft: '3rem', alignItems: 'center', alignContent: 'center'}}>
        <Typography gutterBottom variant='h3'>Su carrito de compras</Typography>
      </Box>
      <Divider />
      <List>
        {cartItems.map((product: any) => (
          // eslint-disable-next-line react/jsx-key
          <Box>
            <ListItem button key={product._id} style={{display:'flex'}}>
              <ListItemIcon>
                {
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.image}
                    height="50px"
                    width="50px"
                    alt="Not Found"
                  />
                }
              </ListItemIcon>
              <ListItemText
                primary={product.name}
                secondary={product.short_description}
              />
              <ListItemText style={{textAlign: 'right'}}
                primary={"$" + product.price * product.quantity}
                secondary={product.quantity + " X $" + product.price}
              /> 
                {/* <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained button group"
                  variant="outlined"
                  size="small"
                >
                  <ListItemIcon>
                    <AddCircleIcon color="primary"></AddCircleIcon>
                  </ListItemIcon>
                  <ListItemIcon>
                    <RemoveCircleIcon></RemoveCircleIcon>
                  </ListItemIcon>
                  <ListItemIcon>
                    <DeleteForeverIcon  color="secondary"></DeleteForeverIcon>
                  </ListItemIcon>
                </ButtonGroup>  */}
            </ListItem>
            <ListItem button key={product._id} style={{display:'flex'}} onClick={()=>console.log('clic')}>
              <ListItemIcon>
                {
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.image}
                    height="50px"
                    width="50px"
                    alt="Not Found"
                  />
                }
              </ListItemIcon>
              <ListItemText
                primary={product.name}
                secondary={product.short_description}
              />
              <ListItemText style={{textAlign: 'right'}}
                primary={"$" + product.price * product.quantity}
                secondary={product.quantity + " X $" + product.price}
              /> 
                {/* <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained button group"
                  variant="outlined"
                  size="small"
                >
                  <ListItemIcon>
                    <AddCircleIcon color="primary"></AddCircleIcon>
                  </ListItemIcon>
                  <ListItemIcon>
                    <RemoveCircleIcon></RemoveCircleIcon>
                  </ListItemIcon>
                  <ListItemIcon>
                    <DeleteForeverIcon  color="secondary"></DeleteForeverIcon>
                  </ListItemIcon>
                </ButtonGroup>  */}
            </ListItem>
          </Box>
        ))}
      </List>
      <Divider />
      <br/>
      <Typography variant="h4" align="right" color="inherit" style={{marginBottom: '1rem', marginRight: '1rem'}}>
        Su total es $
        {cartItems.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        )}
      </Typography>
      <Divider /> 
      <br/>
      <Box style={{display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
        <Button variant="contained" color="secondary">
          Comprar
        </Button>
      </Box>
    </Box>
  );

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
