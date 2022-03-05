import React from "react";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { CardActions, IconButton, TextField, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import useStyles from "../styles/styles";

export default function ItemViewActions() {
  const classes = useStyles();

  return (
    <DialogActions style={{ marginRight: "2rem" }}>
      <Typography
        gutterBottom
        style={{
          marginRight: ".5rem",
          marginTop: ".1rem",
          marginBottom: ".1rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          fontSize: "1.65rem",
          fontWeight: "normal",
          fontFamily: "Roboto",
        }}
      >
        ${"99999.99"}
      </Typography>
      <TextField
        id="filled-number"
        label="Unidad"
        type="number"
        defaultValue={1}
        InputLabelProps={{
          shrink: true,
        }}
        value={1}
        // onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleQtyChange(e)}
        style={{ width: "90px" }}
        variant="outlined"
      />
      <IconButton
        aria-label="add to cart"
        size="large"
        onClick={() => console.log("handle save n close")}
      >
        <AddShoppingCartIcon color="success" />
      </IconButton>
    </DialogActions>
  );
}
