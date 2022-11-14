import React from "react";
import {
  Box,
  Dialog,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

import { HeadCell, Order } from "../../utils/interfaces";
import GenericTableHead from "../generics/GenericTableHead";
import { stableSort } from "../../utils/sorter";
import { getComparator, OrderType } from "../../utils/Comparator";
import { orders } from "../../utils/table/OrderTableConstants";
import useStyles from "../../hooks/useStyles";
import GenericTableToolbar from "../generics/GenericTableToolbar";

export const headCells: HeadCell[] = [
  {
    id: "units",
    numeric: false,
    disablePadding: true,
    label: "Cant",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Descripcion",
  },
  {
    id: "price",
    numeric: false,
    disablePadding: false,
    label: "$UD",
  },
  {
    id: "subtotal",
    numeric: false,
    disablePadding: false,
    label: "Subtotal",
  },
  {
    id: "note",
    numeric: false,
    disablePadding: false,
    label: "Nota",
  },
];

interface OrderDetailProps {
  open: boolean;
  toggleOpen: () => void;
  order: Order;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const OrderDetail = (props: OrderDetailProps) => {
  const { open: openEdit, toggleOpen, order } = props;
  const [orderT, setOrder] = React.useState<OrderType>("asc");
  const [orderBy, setOrderBy] = React.useState<string>("price");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && orderT === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const classes = useStyles();

  const ordersRows = orders;
  // search.length > 0
  //   ? orders.filter(
  //       (order) =>
  //         order.customer.toLowerCase().includes(search) ||
  //         order.id.toLowerCase().includes(search)
  //     )
  //   : orders;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - ordersRows.length) : 0;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Dialog
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
      open={openEdit}
      onClose={toggleOpen}
    > 
      <GenericTableToolbar tableTitle={"#orden - Customer - Entregada dd/mm/yyyy"}/>
      <TableContainer>
        <Table aria-labelledby="tableTitle" size="medium">
          <GenericTableHead
            order={orderT}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            headCells={headCells}
            numSelected={0}
            onSelectAllClick={() => {
              /*do nothing  */
            }}
          />
          <TableBody>
            {orders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={order.id + labelId}
                  >
                    <TableCell
                      className={classes.tableBody}
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {order.id}
                    </TableCell>
                    <TableCell className={classes.tableBody} align="left">
                      {order.date.toLocaleString()}
                    </TableCell>
                    <TableCell className={classes.tableBody} align="left">
                      {order.customer}
                    </TableCell>
                    <TableCell className={classes.tableBody} align="right">
                      {"$" + order.total}
                    </TableCell>
                    <TableCell className={classes.tableBody} align="left">
                      {order.deliveryDate.toLocaleString()}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
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
    </Dialog>
  );
};
