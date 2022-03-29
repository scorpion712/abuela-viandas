import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { TextField } from "@mui/material";
import useStyles from "../../hooks/useStyles";
import { useCart } from "../../Cart/hooks/useCart";
import { useState } from "react";

interface Food {
  id: string;
  mainImage: string;
  name: string;
  description: string;
  longDescriptionTitle?: string;
  longDescription?: string;
  price: number;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface FoodItemCardProps {
  item: Food;
  handleCardClick: (item: Food) => void;
}

export default function FoodItemCard(props: FoodItemCardProps) {
  const { item, handleCardClick } = props;
  const [expanded, setExpanded] = React.useState(false);
  const [productQty, setQuantity] = React.useState<number>(1);

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleQtyChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value: number = parseInt(e.target.value);
    if (value >= 1 && value <= 999) {
      setQuantity(value);
    } else {
      setQuantity(value < 1 ? 1 : 999);
    }
  };

  const { addToCart } = useCart();

  const handleAddToCart = (item: Food, productQty: number) => {
    addToCart({
      itemId: item.id,
      item: {
        id: item.id,
        name: item.name,
        description: item.description,
        unitPrice: item.price,
        image: item.mainImage,
      },
      itemQty: productQty,
      note: note,
      subTotal: item.price * productQty,
    });
  };

  const [note, setNote] = useState<string>("");

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const CardBody = () => {
    return (
      <>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={classes.cardTitle}
        >
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </>
    );
  };

  const CardActionsBar = () => {
    return (
      <>
        <TextField
          id="filled-number"
          label="Unidad"
          type="number"
          defaultValue={1}
          InputLabelProps={{
            shrink: true,
          }}
          value={productQty}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => handleQtyChange(e)}
          className={classes.qtyInput}
          variant="outlined"
        />
        <IconButton
          aria-label="add to cart"
          onClick={() => handleAddToCart(item, productQty)}
        >
          <AddShoppingCartIcon color="success" />
        </IconButton>
        <Typography gutterBottom className={classes.cardProductPrice}>
          ${item.price}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon color="info" />
        </ExpandMore>
      </>
    );
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ cursor: "pointer" }}>
      <CardMedia
        component="img"
        height="194"
        image={item.mainImage}
        alt="Image Not Found"
        onClick={() => handleCardClick(item)}
      />
      <CardContent onClick={() => handleCardClick(item)}>
        <CardBody />
      </CardContent>
      <CardActions disableSpacing>
        <CardActionsBar />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <TextField
            variant="standard"
            multiline
            maxRows={4}
            InputProps={{
              disableUnderline: true,
            }}
            className={classes.orderNote}
            aria-label="maximum height"
            placeholder="Escriba una nota para su pedido"
            value={note}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleNoteChange(e)}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
}
