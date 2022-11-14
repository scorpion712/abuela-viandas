import React, { useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { CardActions, IconButton, TextField, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import useStyles from "../hooks/useStyles";
import { Food } from "../utils/interfaces";

export default function ItemViewActions(props: { item: Food, note: string }) {
  const classes = useStyles();
  const { item, note: anote } = props;
  const [ note, setNote ] = useState<string>(anote);

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setNote(e.target.value); 
  } 

  return (
    <DialogActions  >
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
            style={{marginRight: '1rem', minWidth: '17rem', maxWidth: '17rem'}}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleNoteChange(e)}
          />
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
        ${item.price}
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
        onClick={() => console.log("handle save n close", item)}
      >
        <AddShoppingCartIcon color="success" />
      </IconButton>
    </DialogActions>
  );
}
