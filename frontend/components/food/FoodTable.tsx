import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import GenericTableToolbar from "../generics/GenericTableToolbar";
import { Menu } from "../../utils/interfaces";
import GenericTableHead from "../generics/GenericTableHead";
import { OrderType } from "../../utils/Comparator";
import useStyles from "../../styles/styles";
import FoodTableBody from "./FoodTableBody";
import { menues } from "../../utils/table/FoodTableConstants";
import { headCells } from "../../utils/table/FoodTableConstants";
import { foodTableTitle } from "../../utils/constants";
import FoodTableFilter from "./FoodTableFilter";

interface FoodTableProps {
  search: string;
}

export default function FoodTable(props: FoodTableProps) {
  const [order, setOrder] = React.useState<OrderType>("asc");
  const [orderBy, setOrderBy] = React.useState<string>("price");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [filter, setFilter] = React.useState("");

  const { search } = props; 
  const classes = useStyles();

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }; 

  const handleFilter = (value: string) => {
    setFilter(value.toLocaleLowerCase());
  };  

  const foodRows = menues.filter(({ name, category }: Menu) => 
    name.toLowerCase().includes(search) && (filter.length>0
      ? category.toLowerCase() === filter
      : true)
  );

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - foodRows.length) : 0;

  const buttons = [
    <IconButton color="primary" key="b1" onClick={() => console.log("clic")}>
      <EditIcon className={classes.editIcon} />
    </IconButton>,
    <IconButton key="b2">
      <DeleteIcon className={classes.deleteIcon} />
    </IconButton>,
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <GenericTableToolbar tableTitle={foodTableTitle}>
          <FoodTableFilter handleFilter={handleFilter} />
          </GenericTableToolbar>
        <TableContainer style={{ paddingLeft: "1.5rem" }}>
          <Table aria-labelledby="tableTitle" size="medium">
            <GenericTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={headCells}
              numSelected={0}
              onSelectAllClick={() => {
                /*do nothing */
              }}
            />
            <FoodTableBody
              page={page}
              rows={foodRows}
              emptyRows={emptyRows}
              rowsPerPage={rowsPerPage}
              order={order}
              orderBy={orderBy}
              buttons={buttons}
            />
          </Table>
        </TableContainer>
        <TablePagination
          className={classes.tableFoot}
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={foodRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
