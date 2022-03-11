import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import GenericTable from "./GenericTable/GenericTable";
import { menues } from "../utils/table/FoodTableConstants";
import { headCells } from "../utils/table/FoodTableConstants";
import { Menu } from "../utils/interfaces";
import useStyles from "../styles/styles";

interface FoodTableProps {
  search: string;
  handleEditDrawer: (open: boolean) => void;
}

export default function FoodTable(props: FoodTableProps) {
  const { search, handleEditDrawer } = props;
  const classes = useStyles();

  const [filter, setFilter] = React.useState("");

  const buttons = [
    <IconButton color="primary" key="b1" onClick={() => handleEditDrawer(true)}>
      <EditIcon className={classes.editIcon} />
    </IconButton>,
    <IconButton key="b2">
      <DeleteIcon className={classes.deleteIcon} />
    </IconButton>,
  ];

  const handleFilter = (value: string) => {
    setFilter(value.toLocaleLowerCase());
  };

  const foodRows = menues.filter(
    ({ name, category }: Menu) =>
      name.toLowerCase().includes(search) && filter ? category.toLowerCase() === filter : true
  );

  return (
    <GenericTable
      rows={foodRows}
      headCells={headCells}
      buttons={buttons}
      handleFilter={handleFilter}
    />
  );
}
