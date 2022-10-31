import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

import GenericTableToolbar from "../generics/GenericTableToolbar";
import GenericTableHead from "../generics/GenericTableHead";
import { OrderType } from "../../utils/Comparator";
import OrderTableFilter from "./OrderTableFilter";
import OrderTableBody from "./OrderTableBody";
import { orders } from "../../utils/table/OrderTableConstants";
import { headCells } from "../../utils/table/OrderTableConstants";
import { orderTableTitle } from "../../utils/constants";
import useStyles from "../../hooks/useStyles";

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

  const ordersRows =
    search.length > 0
      ? orders.filter(
          (order) =>
            order.customer.toLowerCase().includes(search) ||
            order.id.toLowerCase().includes(search)
        )
      : orders;

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

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <GenericTableToolbar tableTitle={orderTableTitle}>
          <OrderTableFilter />
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
