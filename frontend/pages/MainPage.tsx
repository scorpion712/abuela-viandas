import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FoodItemCard from "../components/FoodCard";
import Layout from "../components/Layout";
import useStyles from "../styles/styles";

interface Food {
  id: string;
  mainImage: string;
  name: string;
  description: string;
  longDescriptionTitle?: string;
  longDescription?: string;
  price: number;
}

interface MenuItem {
  dayOfWeek: Date;
  foodItem: Food;
}

const menuItems: MenuItem[] = [
  {
    dayOfWeek: new Date(),
    foodItem: {
      id: "adfgojkhk1",
      mainImage: "http://viandasmardelplata.com./uploads/762/full_370x200.jpg",
      name: "Pollo Grillado con Arroz Blanco",
      description:
        "El arroz con pollo es un plato típico de América Latina y España con variaciones regionales. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras y sazonado con especias",
      price: 99999.99,
      longDescriptionTitle: "Ingredientes",
      longDescription:
        "Arroz blanco hervido en caldo de verduras. Pechuga de pollo grillada en parrilla a gas",
    },
  },
  {
    dayOfWeek: new Date(),
    foodItem: {
      id: "adfgojkhk2",
      mainImage: "http://viandasmardelplata.com./uploads/762/full_370x200.jpg",
      name: "Pollo Grillado con Arroz Blanco",
      description:
        "El arroz con pollo es un plato típico de América Latina y España con variaciones regionales. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras y sazonado con especias",
      price: 99999.99,
      longDescriptionTitle: "Ingredientes",
      longDescription:
        "Arroz blanco hervido en caldo de verduras. Pechuga de pollo grillada en parrilla a gas",
    },
  },
  {
    dayOfWeek: new Date(),
    foodItem: {
      id: "adfgojkhk3",
      mainImage: "http://viandasmardelplata.com./uploads/762/full_370x200.jpg",
      name: "Pollo Grillado con Arroz Blanco",
      description:
        "El arroz con pollo es un plato típico de América Latina y España con variaciones regionales. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras y sazonado con especias",
      price: 99999.99,
      longDescriptionTitle: "Ingredientes",
      longDescription:
        "Arroz blanco hervido en caldo de verduras. Pechuga de pollo grillada en parrilla a gas",
    },
  },
  {
    dayOfWeek: new Date(),
    foodItem: {
      id: "adfgojkhk4",
      mainImage: "http://viandasmardelplata.com./uploads/762/full_370x200.jpg",
      name: "Pollo Grillado con Arroz Blanco",
      description:
        "El arroz con pollo es un plato típico de América Latina y España con variaciones regionales. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras y sazonado con especias",
      price: 99999.99,
      longDescriptionTitle: "Ingredientes",
      longDescription:
        "Arroz blanco hervido en caldo de verduras. Pechuga de pollo grillada en parrilla a gas",
    },
  },
  {
    dayOfWeek: new Date(),
    foodItem: {
      id: "adfgojkhk5",
      mainImage: "http://viandasmardelplata.com./uploads/762/full_370x200.jpg",
      name: "Pollo Grillado con Arroz Blanco",
      description:
        "El arroz con pollo es un plato típico de América Latina y España con variaciones regionales. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras y sazonado con especias",
      price: 99999.99,
      longDescriptionTitle: "Ingredientes",
      longDescription:
        "Arroz blanco hervido en caldo de verduras. Pechuga de pollo grillada en parrilla a gas",
    },
  },
  {
    dayOfWeek: new Date(),
    foodItem: {
      id: "adfgojkhk6",
      mainImage: "http://viandasmardelplata.com./uploads/762/full_370x200.jpg",
      name: "Pollo Grillado con Arroz Blanco",
      description:
        "El arroz con pollo es un plato típico de América Latina y España con variaciones regionales. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras y sazonado con especias",
      price: 99999.99,
      longDescriptionTitle: "Ingredientes",
      longDescription:
        "Arroz blanco hervido en caldo de verduras. Pechuga de pollo grillada en parrilla a gas",
    },
  },
];

export default function MainPage() {
  const classes = useStyles();
  return (
    <Layout>
      <Grid style={{ margin: "1rem" }}>
        <Grid container spacing={3}>
          {menuItems.map((menuItem: MenuItem) => (
            <Grid item md={6} lg={2} key={menuItem.foodItem.id}>
              <Box className={classes.weekDay}>
                <Typography className={classes.weekDayTitle}>
                  Lunes 28
                </Typography>
              </Box>
              <FoodItemCard item={menuItem.foodItem} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
}
