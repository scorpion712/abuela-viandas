import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse'; 
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'; 
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { TextField } from '@mui/material';
import useStyles from '../styles/styles';

interface Food { 
  id: string,
  mainImage: string,
  name: string,
  description: string,
  longDescriptionTitle?: string,
  longDescription?: string,
  price: number
}


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface FoodItemCardProps {
  item : Food
}

export default function FoodItemCard(props: FoodItemCardProps) {
  const { item } = props; 
console.log(item);
  const [expanded, setExpanded] = React.useState(false);
  const [productQty, setQuantity] = React.useState<Number>(1);

  const classes = useStyles();
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleQtyChange = (e : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value: Number = Number(e.target.value);
    if (value >= 1 && value <= 999) {
      setQuantity(value);
    } else {
      setQuantity(value < 1 ? 1 : 999);
    }
  }

  const openProductDialog = () => {
    console.log('open product detail dialog');
  }

  return (
    <Card sx={{ maxWidth: 345 }} > 
      <CardMedia
        component="img"
        height="194"
        image={item.mainImage}
        alt="Image Not Found"
        onClick={openProductDialog}
      />
      <CardContent 
        onClick={openProductDialog}>
        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
      <TextField
          id="filled-number"
          label="Unidad" 
          type="number" 
          defaultValue={1}
          InputLabelProps={{
            shrink: true,  
          }}
          value={productQty}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleQtyChange(e)}
          className={classes.qtyInput}
          variant="outlined"
        />
        <IconButton aria-label="add to cart">
          <AddShoppingCartIcon color='success'/>
        </IconButton>
        <Typography gutterBottom className={classes.cardProductPrice}>${item.price}</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon color="info" />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className={classes.cardDescriptionTitle}>{item.longDescriptionTitle}:</Typography>
          <Typography paragraph>
            {item.longDescription}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}