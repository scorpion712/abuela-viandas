import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import EnhancedTable from "./Table/EnhancedTable";
import { menues } from "../utils/table/FoodTableConstants";
import { headCells } from "../utils/table/FoodTableConstants";
import { Menu } from "../utils/interfaces";

interface FoodTableProps {
  search: string;
}

export default function FoodTable(props: FoodTableProps) {
  const { search } = props;

  const [filter, setFilter] = React.useState("");

  const buttons = [
    <IconButton key="b1" onClick={() => console.log("clic")}>
      <EditIcon />
    </IconButton>,
    <IconButton key="b2">
      <DeleteIcon />
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
    <EnhancedTable
      rows={foodRows}
      headCells={headCells}
      buttons={buttons}
      handleFilter={handleFilter}
    />
  );
}
