import { Box, Grid, MenuItem, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import useStyles from "../../hooks/useStyles";

import { Food } from "../../utils/interfaces";
import FoodItemCard from "../food/FoodItemCard";

interface MenuItem {
  menuType: string;
  foodItem: Food[];
}

const daysOfWeek = [
"Domingo", 
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

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
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Arroz blanco hervido en caldo de verduras. Pechuga de pollo grillada en parrilla a gas",
        dayOfWeek:  new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - new Date().getDay() + 1),
      },
      {
        id: "adfgojkhk2",
        mainImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCVw52acS9XmVuijzQ5PF-SlTlPg6H0DjSw&usqp=CAU",
        name: "Mila de Pollo con Pure",
        description:
          "Milanesa de pollo al horno sin aceite con guarnicion de pure de papas",
        price: 9999.00,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Pechuga de pollo, huevo, pan rallado, papa, leche, manteca, pimienta, nuez moscada, sal",
        dayOfWeek: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2 - new Date().getDay()),
      },
      {
        id: "adfgojkhk3",
        mainImage:
          "http://www.comedera.com/wp-content/uploads/2014/05/arroz-con-verduras.jpg",
        name: "Arroz con verduras",
        description:
          "Casuela de arroz con verduras",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Arroz y verudras varias",
          dayOfWeek: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3 - new Date().getDay()),
      },
      {
        id: "adfgojkhk4",
        mainImage:
          "https://estag.fimagenes.com/img/2/3/K/w/d/3Kwd_900.jpg",
        name: "Filet de Merluza con Papas al Horno",
        description:
          "Filet de merluza al horno con papas rusticas al horno",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Filet de merluza, papa",
        dayOfWeek: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 4 - new Date().getDay()),
      },
      {
        id: "adfgojkhk5",
        mainImage:
          "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/elgranchef/E/Ensalada%20de%20pollo%20grillado%20con%20aderezo%20de%20gazpacho%204.jpg",
        name: "Pechuga de Pollo Grillada con Ensalada",
        description:
          "Pechuga de pollo grillada con mix de ensalada de hojas verdes, cebolla y tomate",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Pechuga de pollo, rucula, tomate cherry, cebolla morada, palta, opcional parmesano",
        dayOfWeek: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 5 - new Date().getDay()),
      },
      {
        id: "adfgojkhk6",
        mainImage:
          "https://i.ytimg.com/vi/XhGFZEhDR_w/maxresdefault.jpg",
        name: "Wok de Carne y Vegetales",
        description:
          "Wok de carne y vegetales picante",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Vegatales varios, A eleccion carne vacuna o cerdo",
        dayOfWeek: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 6 - new Date().getDay()),
      },
    ],
  },
  {
    menuType: "Menu Tradicional",
    foodItem: [
      {
        id: "bdfgojkhk1",
        mainImage:
          "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
        name: "Hamburguesa Completa",
        description: "Medallon de carne con pan artesanal",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Medallon de carne condimentado, huevo, panceta, cebolla crispy, lechuga, tomate, pepino y aderezos caseros",
        dayOfWeek: new Date(),
      },
      {
        id: "bdfgojkhk2",
        mainImage:
          "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
        name: "Hamburguesa Completa",
        description: "Medallon de carne con pan artesanal",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Medallon de carne condimentado, huevo, panceta, cebolla crispy, lechuga, tomate, pepino y aderezos caseros",
        dayOfWeek: new Date(),
      },
      {
        id: "bdfgojkhk3",
        mainImage:
          "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
        name: "Hamburguesa Completa",
        description: "Medallon de carne con pan artesanal",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Medallon de carne condimentado, huevo, panceta, cebolla crispy, lechuga, tomate, pepino y aderezos caseros",
        dayOfWeek: new Date(),
      },
      {
        id: "bdfgojkhk4",
        mainImage:
          "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
        name: "Hamburguesa Completa",
        description: "Medallon de carne con pan artesanal",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Medallon de carne condimentado, huevo, panceta, cebolla crispy, lechuga, tomate, pepino y aderezos caseros",
        dayOfWeek: new Date(),
      },
      {
        id: "bdfgojkhk5",
        mainImage:
          "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
        name: "Hamburguesa Completa",
        description: "Medallon de carne con pan artesanal",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Medallon de carne condimentado, huevo, panceta, cebolla crispy, lechuga, tomate, pepino y aderezos caseros",
        dayOfWeek: new Date(),
      },
      {
        id: "bdfgojkhk6",
        mainImage:
          "https://static-sevilla.abc.es/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
        name: "Hamburguesa Completa",
        description: "Medallon de carne con pan artesanal",
        price: 9999.99,
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
        id: "cdfgojkhk1",
        mainImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlARqH325ti75lGiF1nKpiEmanaQjGwhhEb0-PROQhuMsJ4KzNMibFUbhIcMVPbAoZ6Ho&usqp=CAU",
        name: "Ensalada",
        description: "Ensalada mix de vegetales",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Lechuga, tomate cherry, palta, mix de semillas y opcional limón",
        dayOfWeek: new Date("Feb 28 2022"),
      },
      {
        id: "cdfgojkhk2",
        mainImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlARqH325ti75lGiF1nKpiEmanaQjGwhhEb0-PROQhuMsJ4KzNMibFUbhIcMVPbAoZ6Ho&usqp=CAU",
        name: "Ensalada",
        description: "Ensalada mix de vegetales",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Lechuga, tomate cherry, palta, mix de semillas y opcional limón",
        dayOfWeek: new Date("Mar 1 2022"),
      },
      {
        id: "cdfgojkhk3",
        mainImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlARqH325ti75lGiF1nKpiEmanaQjGwhhEb0-PROQhuMsJ4KzNMibFUbhIcMVPbAoZ6Ho&usqp=CAU",
        name: "Ensalada",
        description: "Ensalada mix de vegetales",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Lechuga, tomate cherry, palta, mix de semillas y opcional limón",
        dayOfWeek: new Date("Mar 2 2022"),
      },
      {
        id: "cdfgojkhk4",
        mainImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlARqH325ti75lGiF1nKpiEmanaQjGwhhEb0-PROQhuMsJ4KzNMibFUbhIcMVPbAoZ6Ho&usqp=CAU",
        name: "Ensalada",
        description: "Ensalada mix de vegetales",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Lechuga, tomate cherry, palta, mix de semillas y opcional limón",
        dayOfWeek: new Date("Mar 3 2022"),
      },
      {
        id: "cdfgojkhk5",
        mainImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlARqH325ti75lGiF1nKpiEmanaQjGwhhEb0-PROQhuMsJ4KzNMibFUbhIcMVPbAoZ6Ho&usqp=CAU",
        name: "Ensalada",
        description: "Ensalada mix de vegetales",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Lechuga, tomate cherry, palta, mix de semillas y opcional limón",
        dayOfWeek: new Date("Mar 4 2022"),
      },
      {
        id: "cdfgojkhk6",
        mainImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlARqH325ti75lGiF1nKpiEmanaQjGwhhEb0-PROQhuMsJ4KzNMibFUbhIcMVPbAoZ6Ho&usqp=CAU",
        name: "Ensalada",
        description: "Ensalada mix de vegetales",
        price: 9999.99,
        longDescriptionTitle: "Ingredientes",
        longDescription:
          "Lechuga, tomate cherry, palta, mix de semillas y opcional limón",
        dayOfWeek: new Date("Mar 5 2022"),
      },
    ],
  },
];

export const CarouselDay = (props: { imageIndex: Number | any }) => {
  const classes = useStyles();
  const { imageIndex: idx } = props;

  const [imageIndex, setImageIndex] = React.useState(new Date().getDay());

  // change menu items
  const handleChange = (current: any, next: any) => {
    setImageIndex(next);
  };

  const settings: any = {
    className: "center", 
    infinite: false,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3, 
    beforeChange: (current: Number, next: Number) =>
      handleChange(current, next),
  };
 
  return (
    <div>
      <Slider {...settings}>
        {menuItems[idx]?.foodItem.map(
          (foodItem: Food) =>
            foodItem && (
              <Box style={{ display: "space-between",  }}> 
                <Grid item md={6} lg={2} key={foodItem.id} spacing={5} >
                  <FoodItemCard
                    day={
                      daysOfWeek[foodItem.dayOfWeek.getDay()] +
                      " " +
                      foodItem.dayOfWeek.getDate()
                    }
                    item={foodItem}
                  />
                </Grid>
              </Box>
            )
        )}
      </Slider>
    </div>
  );
};
