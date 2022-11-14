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
      <Button variant="contained" onClick={handleCheckOut}  style={{fontSize:'1.3rem', fontWeight: "600", color: "#fafafa", paddingLeft: '2rem', paddingRight: '2rem', backgroundColor: '#ff3600'}}>
        Comprar
      </Button>
    </Box>
  );
}
