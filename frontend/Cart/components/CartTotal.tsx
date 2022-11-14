import { Typography } from "@mui/material"
import useStyles from "../../hooks/useStyles";
import { useCart } from "../hooks/useCart";

export const CartTotal = () => {

    const { total } = useCart();

  return (
    <Typography
      variant="h4"
      align="right"
      color="inherit"
      style={{ marginBottom: "1rem", marginRight: "1rem" }}
    >
      
      {(total > 0) && "Su total es $" + total}
    </Typography>
  )
}
