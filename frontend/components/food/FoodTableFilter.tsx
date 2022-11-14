import * as React from "react";
import IconButton from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import ClearIcon from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Chip, Grid, Tooltip } from "@mui/material";

import useStyles from "../../hooks/useStyles";
import { useState } from "react";

interface IFilterString {
  name: string;
  isChecked: boolean;
}

const filters: string [] = ["Light", "Normal", "Vegano", "Limpiar"];
const filterDialogTitle = "Seleccione un tipo de menu para filtrar";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  handleCleanFilters: () => void;
  filters: string[];
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open, handleCleanFilters: cleanFilters, filters: selectedFilters } = props;

  const handleClose = () => {
    onClose("");
  };

  const handleListItemClick = (selectedFilter: string) => {
    onClose(selectedFilter); 
  };

  const handleCleanFilters = () => {
    cleanFilters();
    onClose("");
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{filterDialogTitle}</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
          {filters.map((filter: string) => (
            <Chip
              key={filter}
              label={filter}
              sx={{ ml: 1, mr: 1, mt: 1 }}
              onClick={() => handleListItemClick(filter)}
              style={{backgroundColor: `${selectedFilters.includes(filter.toLowerCase()) ? '#F49839' : ''}`, color: `${selectedFilters.includes(filter.toLowerCase()) ? '#FAFAFA' : ''}`}}
            />
          ))} 
        </Grid>
        </ListItem>
        <ListItem button onClick={handleCleanFilters}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: red[100], color: red[600] }}>
              <ClearIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Limpiar Filtros"} />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function FoodTableFilter(props: {
  handleAddFilter: (e: string) => void;
  handleRemoveFilter: (e: string) => void;
  handleCleanFilters: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [filters, setFilters] = React.useState([] as string[]);
  const { handleAddFilter: handleFilter, handleRemoveFilter, handleCleanFilters } = props;
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string): void => {
    setOpen(false);
    if (value && !filters.some((v) => v.toLowerCase() == value.toLowerCase())) {
      setFilters([...filters, value.toLowerCase()]);
    }
    handleFilter(value);
  };

  const removeFilter = (value: string) => {
    setFilters(filters.filter((f) => f.toLowerCase() !== value.toLowerCase()));
    handleRemoveFilter(value);
  };

  const cleanFilters = () => {
    setFilters([]);
    handleCleanFilters();
  }

  return (
    <Tooltip title="Filtros seleccionados">
      <Grid container spacing={3}>
        <Grid item xs={10}>
          {filters.map((val) => {
            return (
              <Typography
                key={Math.random() * 29}
                variant="subtitle1"
                component="text"
                style={{
                  borderRadius: "1rem",
                  padding: ".5rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  marginLeft: ".3rem",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                  backgroundColor: "#F49839",
                  color: "#FAFAFA",
                  cursor: "pointer",
                }}
                onClick={() => removeFilter(val)}
              >
                {val.toString().charAt(0).toUpperCase() +
                  val.toString().slice(1)}
              </Typography>
            );
          })} 
        </Grid>
        <Grid item xs={1}>
          <div>
            <IconButton onClick={handleClickOpen}>
              <FilterAltIcon className={classes.filterIcon} />
            </IconButton>
            <SimpleDialog open={open} onClose={handleClose} handleCleanFilters={cleanFilters} filters={filters} />
          </div>
        </Grid>
      </Grid>
    </Tooltip>
  );
}
