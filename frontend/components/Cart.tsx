import React from 'react'
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
} from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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

interface CartProps {
    openCartDialog: boolean,
    toggleDrawer: (open: boolean) => (event:any) => void
}

export default function Cart(props: CartProps) { 
    const {openCartDialog, toggleDrawer} = props;
    
  const cartItemsList = (anchor: any) => (
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
                { <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained button group"
                  variant="outlined"
                  size="small"
                >
                  <ListItemIcon>
                    <AddCircleOutlineIcon color="primary"></AddCircleOutlineIcon>
                  </ListItemIcon>
                  <ListItemIcon>
                    <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                  </ListItemIcon>
                  <ListItemIcon>
                    <DeleteForeverIcon  color="secondary"></DeleteForeverIcon>
                  </ListItemIcon>
                </ButtonGroup>  }
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


  return (
    <Drawer anchor={"right"} open={openCartDialog} onClose={toggleDrawer(false)}>
        {cartItemsList("right")}
    </Drawer> 
  );
}
