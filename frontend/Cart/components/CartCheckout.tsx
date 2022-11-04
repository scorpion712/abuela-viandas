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
      <Button variant="contained" onClick={handleCheckOut} color="secondary" style={{fontSize:'1.3rem', fontWeight: "600", color: "#2b2626", paddingLeft: '2rem', paddingRight: '2rem'}}>
        Comprar
      </Button>
    </Box>
  );
}
