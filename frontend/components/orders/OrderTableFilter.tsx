import * as React from "react";
import IconButton from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Grid,
  List,
  ListItem,
  Paper,
  Slider,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";

import useStyles from "../../hooks/useStyles";
import { Box } from "@mui/system";

const filterDialogTitle = "Seleccione una fecha para filtrar";

export interface SimpleDialogProps {
  open: boolean; 
  onClose: (initDate?: Date, endDate?: Date, maxTotal?: number | number[]) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const [initDate, setInitDate ] = React.useState<Date>(new Date());
  const [endDate, setEndDate ] = React.useState<Date>(new Date());
  const [maxTotal, setMaxTotal] = React.useState<number | number[]>(80);

  const handleClose = () => { 
    onClose(initDate, endDate, maxTotal);
  }; 


  // get max total from orders and divide into 4
  const marks = [
    {
      value: 0,
      label: "$0",
    },
    {
      value: 20,
      label: "$20",
    },
    {
      value: 37,
      label: "$37",
    },
    {
      value: 100,
      label: "$100",
    },
  ];

  function valuetext(value: number) {
    return `$${value}`;
  }


  // useEffect: 
  // - fetch from api orders from today
  // - cuando cierro dialog de filtros [open]

  const handleInitDate =  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInitDate(new Date(e.target.value));
  }
  const handleEndDate =  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEndDate(new Date(e.target.value));
  }
 
  const handleSliderChange = (e: any, value: number | number []) => {
    setMaxTotal(value);
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{filterDialogTitle}</DialogTitle>
      <List>
        <ListItem>
          <TextField
            color="success"
            id="start_date"
            label="Inicio"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={ (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleInitDate(e)}
          />
        </ListItem>
        <ListItem>
          <TextField
            color="success"
            id="end_date"
            label="Fin"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={ (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleEndDate(e)}
          />
        </ListItem>
        <ListItem>
          <Typography gutterBottom variant="h6">
            Seleccione un rango para el total
          </Typography>
        </ListItem>
        <ListItem>
          <Slider
            aria-label="Always visible"
            defaultValue={80}
            getAriaValueText={valuetext}
            step={10}
            value={maxTotal}
            marks={marks}
            valueLabelDisplay="on"
            onChange={(e, value) => handleSliderChange(e, value) }
          />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function OrderTableFilter(props: {
  handleFilter?: (e: any) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  const { handleFilter } = props;
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (initDate?: Date, endDate?: Date, maxTotal?: number | number[]) => {
    console.log(initDate, endDate, maxTotal)
    setOpen(false);
    //setSelectedValue(initDate?.toLocaleDateString('es-ES'));
    //handleFilter ? handleFilter(value) : true;
  };

  return (
    <Tooltip title="Filter list">
      <Grid container spacing={3}>
        <Grid item xs={10}>
          {selectedValue.length > 0 && (
            <Typography
              variant="subtitle1"
              component="text"
              style={{
                borderRadius: "1rem",
                padding: ".5rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                fontSize: "1.1rem",
                fontWeight: "500",
                backgroundColor: "#F49839",
                color: "#FAFAFA",
              }}
            >
              {selectedValue}
            </Typography>
          )}
        </Grid>
        <Grid item xs={1}>
          <div>
            <IconButton onClick={handleClickOpen}>
              <FilterListIcon className={classes.filterIcon} />
            </IconButton>
            <SimpleDialog 
              open={open}
              onClose={() => handleClose()}
            />
          </div>
        </Grid>
      </Grid>
    </Tooltip>
  );
}
