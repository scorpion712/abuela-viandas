import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import GenericDialog from "../components/generics/GenericDialog";
import FoodItemCard from "../components/food/FoodItemCard";
import Layout from "../components/Layout";
import MySlider from "../components/carousel/CarouselMenu";
import useStyles from "../hooks/useStyles";
import ItemViewContent from "../components/ItemViewContent";
import { Food } from "../utils/interfaces";
import ItemViewActions from "../components/ItemViewActions";
import { CartProvider } from "../Cart/context/CartProvider";
import CarouselMenu from "../components/carousel/CarouselMenu";
import { CarouselDay } from "../components/carousel/CarouselDay";
import Banner from "../components/Banner";


interface MenuItem {
  menuType: string;
  foodItem: Food[];
}

export default function Main() {
  const classes = useStyles();

  const [imageIndex, setImageIndex] = React.useState(0);

  // change menu items
  const handleChange = (current: any, next: any) => {
    setImageIndex(next);
  };



  return (
    <Layout>
      <CartProvider>
        <Container style={{ marginBottom: "1rem" }}>
          <Banner />
          <CarouselMenu imageIndex={imageIndex} handleChange={handleChange} />
          <CarouselDay imageIndex={imageIndex} />
          {/*         <Grid style={{ margin: "1rem" }}>
<Grid container spacing={3}>
            {menuItems[imageIndex]?.foodItem.map(
              (foodItem: Food) =>
                foodItem && (
                  <Grid item md={6} lg={2} key={foodItem.id}>
                    <Box className={classes.weekDay}>
                      <Typography className={classes.weekDayTitle}>
                        {daysOfWeek[foodItem.dayOfWeek.getDay()] +
                          " " +
                          foodItem.dayOfWeek.getDate()}
                      </Typography>
                    </Box>
                    <FoodItemCard
                      item={foodItem}
                    />
                  </Grid>
                )
            )}
        </Grid>
          </Grid> */}
        </Container>
      </CartProvider>
    </Layout>
  ); 
}
