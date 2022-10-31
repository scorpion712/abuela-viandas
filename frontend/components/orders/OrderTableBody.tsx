import React from "react";
import { IconButton, TableBody, TableCell, TableRow } from "@mui/material";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import CancelIcon from "@mui/icons-material/Cancel";
import PrintIcon from "@mui/icons-material/Print";

import { stableSort } from "../../utils/sorter";
import { getComparator, OrderType } from "../../utils/Comparator";
import useStyles from "../../hooks/useStyles";
import { Order } from "../../utils/interfaces";
import { OrderDetail } from "./OrderDetail.Dialog";
import { useToggle } from "../../hooks/useToggle";
import { useState } from "react";

interface OrderTableBodyProps {
  page: number;
  rows: any[];
  rowsPerPage: number;
  emptyRows: number;
  order: OrderType;
  orderBy: string;
}

export default function OrderTableBody(
  props: OrderTableBodyProps
): JSX.Element {
  const classes = useStyles();
  const {
    rows,
    emptyRows,
    rowsPerPage,
    order: orderComparator,
    orderBy,
    page,
  } = props;

  const { open: openEdit, toggleOpen } = useToggle();

  const [detailOrder, setDetailOrder] = useState<Order>({} as Order);

  const handleEditClick = (order: any /*Order*/) => {
    toggleOpen();
    setDetailOrder(order);
  };

  return (
    <>
      <TableBody>
        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
  rows.slice().sort(getComparator(order, orderBy)) */}
        {stableSort(rows, getComparator(orderComparator, orderBy))
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
                <TableCell className={classes.tableBody} align="right">
                  <IconButton
                    color="primary"
                    key="b1"
                    onClick={() => handleEditClick(order)}
                  >
                    <FindInPageIcon className={classes.editIcon} />
                  </IconButton>
                  <IconButton
                    key="b2"
                    onClick={() => console.log("print order", order)}
                  >
                    <PrintIcon color="secondary" />
                  </IconButton>
                  <IconButton
                    key="b3"
                    onClick={() => console.log("delete order", order)}
                  >
                    <CancelIcon className={classes.deleteIcon} />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        {emptyRows > 0 && (
          <TableRow
            style={{
              height: 53 * emptyRows,
            }}
          >
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
      <OrderDetail
        open={openEdit}
        toggleOpen={toggleOpen}
        order={detailOrder}
      />
    </>
  );
}
