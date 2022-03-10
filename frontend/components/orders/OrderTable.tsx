import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import FindInPageIcon from '@mui/icons-material/FindInPage';
import CancelIcon from '@mui/icons-material/Cancel';

import GenericTableToolbar from "../generics/GenericTableToolbar";
import GenericTableHead from "../generics/GenericTableHead";
import { OrderType } from "../../utils/Comparator";
import useStyles from "../../styles/styles";
import OrderTableBody from "./OrderTableBody";
import { orders } from "../../utils/table/OrderTableConstants";
import { headCells } from "../../utils/table/OrderTableConstants";
import { orderTableTitle } from "../../utils/constants";

interface OrderTableProps {
  search: string;
}

export default function OrderTable(props: OrderTableProps) {
  const classes = useStyles();

  const [order, setOrder] = React.useState<OrderType>("asc");
  const [orderBy, setOrderBy] = React.useState<string>("id");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [filter, setFilter] = React.useState("");

  const { search } = props;

  const ordersRows = orders.filter(() => true);

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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - ordersRows.length) : 0;

  const buttons = [
    <IconButton color="primary" key="b1" onClick={() => console.log("clic")}>
      <FindInPageIcon className={classes.editIcon} />
    </IconButton>,
    <IconButton key="b2">
      <CancelIcon className={classes.deleteIcon} />
    </IconButton>,
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <GenericTableToolbar tableTitle={orderTableTitle}>
            <div>ACA VA FILTRO DATE PICKER</div>
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
            <OrderTableBody
              page={page}
              rows={ordersRows}
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
          count={ordersRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
