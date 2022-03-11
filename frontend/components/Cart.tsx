import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStyles from "../styles/styles"; 
import { useRouter } from "next/router";

const cartItems = [
  {
    code: 1006,
    name: "Nombre del Producto",
    short_description: "Muy breve descripcion del producto",
    description: "Aca una descripcion larga",
    price: 1940,
    quantity: 2,
    image: "images/img1.jpg",
    images: [
      "images/sweater_Bremer.jpg",
      "images/sweater_Bremer1.jpg",
      "images/sweater_Bremer2.jpg",
      "images/sweater_Bremer3.jpg",
      "images/sweater_Bremer4.jpg",
      "images/sweater_Bremer5.jpg",
    ],
  },
];

interface CartProps {
  openCartDialog: boolean;
  toggleDrawer: (open: boolean) => (event: any) => void;
}

export default function Cart(props: CartProps) {
  const classes = useStyles();
  const { openCartDialog, toggleDrawer } = props;
  const router = useRouter();

  const handleCheckOut = () => {
    router.push('/shipping');
  }

  const cartItemsList = (anchor: any) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 550 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box className={classes.cartTitle}>
        <Typography gutterBottom variant="h3">
          Su carrito de compras
        </Typography>
      </Box>
      <Divider />
      <List>
        {cartItems.map((product: any) => (
          // eslint-disable-next-line react/jsx-key
          <Box>
            <ListItem
              button
              key={product._id}
              className={classes.cartItemsList}
            >
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
              <ListItemText
                className={classes.cartItemListText}
                primary={"$" + product.price * product.quantity}
                secondary={product.quantity + " X $" + product.price}
              />
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="outlined"
                size="small"
                className={classes.cartButtonGroup}
              >
                <ListItemIcon>
                  <AddCircleOutlineIcon
                    className={classes.addCircleIcon}
                  ></AddCircleOutlineIcon>
                </ListItemIcon>
                <ListItemIcon>
                  <RemoveCircleOutlineIcon
                    className={classes.removeCircleIcon}
                  ></RemoveCircleOutlineIcon>
                </ListItemIcon>
                <ListItemIcon />
                <ListItemIcon>
                  <DeleteForeverIcon
                    className={classes.deleteCircleIcon}
                  ></DeleteForeverIcon>
                </ListItemIcon>
              </ButtonGroup>
            </ListItem>
          </Box>
        ))}
      </List>
      <Divider />
      <br />
      <Typography
        variant="h4"
        align="right"
        color="inherit"
        style={{ marginBottom: "1rem", marginRight: "1rem" }}
      >
        Su total es $
        {cartItems.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        )}
      </Typography>
      <Divider />
      <br />
      <Box
        className={classes.cartPurchaseButton}
      >
        <Button variant="contained" onClick={handleCheckOut}>
          Comprar
        </Button>
      </Box>
    </Box>
  );

  return (
    <Drawer
      anchor={"right"}
      open={openCartDialog}
      onClose={toggleDrawer(false)} 
    >
      {cartItemsList("right")}
    </Drawer>
  );
}
