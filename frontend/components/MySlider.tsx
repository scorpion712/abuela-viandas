import { ClassNames } from "@emotion/react";
import React from "react";
import Slider from "react-slick";
import useStyles from "../styles/styles";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";

const images = [
  "Menu Saludable",
  "Menu Tradicional",
  "Menu Ensaladas",
  "logo la abuela",
];

interface MySliderProps { 
    imageIndex: Number | any,
    handleChange: (current: Number, next: Number) => void
}

export default function MySlider(props: MySliderProps) {

    const { imageIndex, handleChange } = props; 

  const settings: any = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    beforeChange: (current:Number, next: Number) => handleChange(current, next),
  };


  const classes = useStyles();

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={
              idx === imageIndex
                ? `${classes.slide} ${classes.activeSlide}`
                : classes.slide
            }
          >
            {/* <img width="100%" height="100%" src={img} alt={img} /> */}
            <Typography 
                id={idx.toString()}
                onClick={(e : any) =>  handleChange(imageIndex, Number(e.target.id))}
                style={{
                    paddingTop: "3rem",
                    paddingBottom: "3rem",
                    backgroundColor: '#0f0f0f',
                    height: '9rem',
                    color: '#ff6f00',
                    fontFamily: 'Roboto',
                    fontSize: "2rem",
                    borderRadius: '7px',
             }}>
              {img}
            </Typography>
          </div>
        ))}
      </Slider>
    </div>
  );
}
