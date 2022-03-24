import * as React from "react";
import IconButton from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Grid, Tooltip } from "@mui/material";
<<<<<<< HEAD:frontend/components/food/FoodTableFilter.tsx

import useStyles from "../../styles/styles";
=======
import useStyles from "../hooks/useStyles";
>>>>>>> shopping-cart:frontend/components/FoodTableFilter.tsx

const emails = ["Light", "Normal", "Vegano", "Limpiar"];
const filterDialogTitle = "Seleccione un filtro"; 

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{filterDialogTitle}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))} 
      </List>
    </Dialog>
  );
}

export default function FoodTableFilter(props: {
  handleFilter?: (e: any) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  const { handleFilter } = props;
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
    handleFilter ? handleFilter(value) : true;
  };

  return (
    <Tooltip title="Filter list">
      <Grid container spacing={3}>
        <Grid item xs={10}>
          {selectedValue.length > 0 && (
            <Typography variant="subtitle1" component="text" 
            style={{borderRadius: "1rem", padding: '.5rem', paddingLeft: '1rem', paddingRight: '1rem', fontSize: '1.1rem', fontWeight:"500", backgroundColor:"#F49839", color: "#FAFAFA"}}>
                {selectedValue}
            </Typography>
          )}
        </Grid>
        <Grid item xs={1}>
          <div>
            <IconButton
             onClick={handleClickOpen}>
              <FilterListIcon className={classes.filterIcon} />
            </IconButton>
            <SimpleDialog
              selectedValue={selectedValue}
              open={open}
              onClose={handleClose}
            />
          </div>
        </Grid>
      </Grid>
    </Tooltip>
  );
}
