import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import FoodItemCard from "../components/FoodItemCard";
import Layout from "../components/Layout";
import MyCarousel from "../components/MyCarousel";
import MySlider from "../components/MySlider";
import useStyles from "../styles/styles";

interface Food {
  id: string;
  mainImage: string;
  name: string;
  description: string;
  longDescriptionTitle?: string;
  longDescription?: string;
  price: number;
  dayOfWeek: Date;
}

interface MenuItem {
  menuType: string;
  foodItem: Food[];
}

const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

const menuItems: MenuItem[] = [
  {
    menuType: "Menu Saludable",
    foodItem: [
      {
        id: "adfgojkhk1",
        mainImage:
          "http://viandasmardelplata.com./uploads/762/full_370x200.jpg",
        name: "Pollo Grillado con Arroz Blanco",
        description:
          "El arroz con pollo es un plato típico de América Latina y España con variaciones regionales. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras y sazonado con especias",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Arroz blanco hervido en caldo de verduras. Pechuga de pollo grillada en parrilla a gas",
        dayOfWeek: new Date(),
      },
      {
        id: "adfgojkhk2",
        mainImage:
          "http://viandasmardelplata.com./uploads/762/full_370x200.jpg",
        name: "Pollo Grillado con Arroz Blanco",
        description:
          "El arroz con pollo es un plato típico de América Latina y España con variaciones regionales. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras y sazonado con especias",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Arroz blanco hervido en caldo de verduras. Pechuga de pollo grillada en parrilla a gas",
        dayOfWeek: new Date(),
      },
      {
        id: "adfgojkhk3",
        mainImage:
          "http://viandasmardelplata.com./uploads/762/full_370x200.jpg",
        name: "Pollo Grillado con Arroz Blanco",
        description:
          "El arroz con pollo es un plato típico de América Latina y España con variaciones regionales. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras y sazonado con especias",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Arroz blanco hervido en caldo de verduras. Pechuga de pollo grillada en parrilla a gas",
        dayOfWeek: new Date(),
      },
      {
        id: "adfgojkhk4",
        mainImage:
          "http://viandasmardelplata.com./uploads/762/full_370x200.jpg",
        name: "Pollo Grillado con Arroz Blanco",
        description:
          "El arroz con pollo es un plato típico de América Latina y España con variaciones regionales. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras y sazonado con especias",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Arroz blanco hervido en caldo de verduras. Pechuga de pollo grillada en parrilla a gas",
        dayOfWeek: new Date(),
      },
      {
        id: "adfgojkhk5",
        mainImage:
          "http://viandasmardelplata.com./uploads/762/full_370x200.jpg",
        name: "Pollo Grillado con Arroz Blanco",
        description:
          "El arroz con pollo es un plato típico de América Latina y España con variaciones regionales. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras y sazonado con especias",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Arroz blanco hervido en caldo de verduras. Pechuga de pollo grillada en parrilla a gas",
        dayOfWeek: new Date(),
      },
      {
        id: "adfgojkhk6",
        mainImage:
          "http://viandasmardelplata.com./uploads/762/full_370x200.jpg",
        name: "Pollo Grillado con Arroz Blanco",
        description:
          "El arroz con pollo es un plato típico de América Latina y España con variaciones regionales. Consiste en arroz cocinado con pollo, en presas o desmechado, verduras y sazonado con especias",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Arroz blanco hervido en caldo de verduras. Pechuga de pollo grillada en parrilla a gas",
        dayOfWeek: new Date(),
      },
    ],
  },
  {
    menuType: "Menu Tradicional",
    foodItem: [
      {
        id: "adfgojkhk1",
        mainImage:
          "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
        name: "Hamburguesa Completa",
        description: "Medallon de carne con pan artesanal",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Medallon de carne condimentado, huevo, panceta, cebolla crispy, lechuga, tomate, pepino y aderezos caseros",
        dayOfWeek: new Date(),
      },
      {
        id: "adfgojkhk2",
        mainImage:
          "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
        name: "Hamburguesa Completa",
        description: "Medallon de carne con pan artesanal",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Medallon de carne condimentado, huevo, panceta, cebolla crispy, lechuga, tomate, pepino y aderezos caseros",
        dayOfWeek: new Date(),
      },
      {
        id: "adfgojkhk3",
        mainImage:
          "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
        name: "Hamburguesa Completa",
        description: "Medallon de carne con pan artesanal",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Medallon de carne condimentado, huevo, panceta, cebolla crispy, lechuga, tomate, pepino y aderezos caseros",
        dayOfWeek: new Date(),
      },
      {
        id: "adfgojkhk4",
        mainImage:
          "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
        name: "Hamburguesa Completa",
        description: "Medallon de carne con pan artesanal",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Medallon de carne condimentado, huevo, panceta, cebolla crispy, lechuga, tomate, pepino y aderezos caseros",
        dayOfWeek: new Date(),
      },
      {
        id: "adfgojkhk5",
        mainImage:
          "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
        name: "Hamburguesa Completa",
        description: "Medallon de carne con pan artesanal",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Medallon de carne condimentado, huevo, panceta, cebolla crispy, lechuga, tomate, pepino y aderezos caseros",
        dayOfWeek: new Date(),
      },
      {
        id: "adfgojkhk6",
        mainImage:
          "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
        name: "Hamburguesa Completa",
        description: "Medallon de carne con pan artesanal",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Medallon de carne condimentado, huevo, panceta, cebolla crispy, lechuga, tomate, pepino y aderezos caseros",
        dayOfWeek: new Date(),
      },
    ],
  },
  {
    menuType: "Menu Ensaladas",
    foodItem: [
      {
        id: "adfgojkhk1",
        mainImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlARqH325ti75lGiF1nKpiEmanaQjGwhhEb0-PROQhuMsJ4KzNMibFUbhIcMVPbAoZ6Ho&usqp=CAU",
        name: "Ensalada",
        description: "Ensalada mix de vegetales",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Lechuga, tomate cherry, palta, mix de semillas y opcional limón",
        dayOfWeek: new Date("Feb 28 2022"),
      },
      {
        id: "adfgojkhk2",
        mainImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlARqH325ti75lGiF1nKpiEmanaQjGwhhEb0-PROQhuMsJ4KzNMibFUbhIcMVPbAoZ6Ho&usqp=CAU",
        name: "Ensalada",
        description: "Ensalada mix de vegetales",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Lechuga, tomate cherry, palta, mix de semillas y opcional limón",
        dayOfWeek: new Date("Mar 1 2022"),
      },
      {
        id: "adfgojkhk3",
        mainImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlARqH325ti75lGiF1nKpiEmanaQjGwhhEb0-PROQhuMsJ4KzNMibFUbhIcMVPbAoZ6Ho&usqp=CAU",
        name: "Ensalada",
        description: "Ensalada mix de vegetales",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Lechuga, tomate cherry, palta, mix de semillas y opcional limón",
        dayOfWeek: new Date("Mar 2 2022"),
      },
      {
        id: "adfgojkhk4",
        mainImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlARqH325ti75lGiF1nKpiEmanaQjGwhhEb0-PROQhuMsJ4KzNMibFUbhIcMVPbAoZ6Ho&usqp=CAU",
        name: "Ensalada",
        description: "Ensalada mix de vegetales",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Lechuga, tomate cherry, palta, mix de semillas y opcional limón",
        dayOfWeek: new Date("Mar 3 2022"),
      },
      {
        id: "adfgojkhk5",
        mainImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlARqH325ti75lGiF1nKpiEmanaQjGwhhEb0-PROQhuMsJ4KzNMibFUbhIcMVPbAoZ6Ho&usqp=CAU",
        name: "Ensalada",
        description: "Ensalada mix de vegetales",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Lechuga, tomate cherry, palta, mix de semillas y opcional limón",
        dayOfWeek: new Date("Mar 4 2022"),
      },
      {
        id: "adfgojkhk6",
        mainImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlARqH325ti75lGiF1nKpiEmanaQjGwhhEb0-PROQhuMsJ4KzNMibFUbhIcMVPbAoZ6Ho&usqp=CAU",
        name: "Ensalada",
        description: "Ensalada mix de vegetales",
        price: 99999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Lechuga, tomate cherry, palta, mix de semillas y opcional limón",
        dayOfWeek: new Date("Mar 5 2022"),
      },
    ],
  },
];

export default function MainPage() {
  const classes = useStyles();

  const [imageIndex, setImageIndex] = React.useState(0);

  const handleChange = (current: any, next: any) => {
    setImageIndex(next);
  };

  return (
    <Layout>
      <>
        <Container style={{ marginBottom: "1rem" }}>
          <MySlider imageIndex={imageIndex} handleChange={handleChange} />
        </Container>
        <Grid style={{ margin: "1rem" }}>
          <Grid container spacing={3}>
            {menuItems[imageIndex]?.foodItem.map(
              (foodItem: Food) =>
                foodItem && (
                  <Grid item md={6} lg={2} key={foodItem.id}>
                    <Box className={classes.weekDay}>
                      <Typography className={classes.weekDayTitle}>
                        {daysOfWeek[foodItem.dayOfWeek.getDay()] + ' ' + foodItem.dayOfWeek.getDate()}
                      </Typography>
                    </Box>
                    <FoodItemCard item={foodItem} />
                  </Grid>
                )
            )}
          </Grid>
        </Grid>
      </>
    </Layout>
  );
}
