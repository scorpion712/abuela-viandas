import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import useStyles from "../../hooks/useStyles";

export default function CartCheckout() {
  const classes = useStyles();
  const router = useRouter();

  const handleCheckOut = () => {
    router.push("/shipping");
  };

  return (
    <Box className={classes.cartPurchaseButton}>
      <Button variant="contained" onClick={handleCheckOut}>
        Comprar
      </Button>
    </Box>
  );
}
