import React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";

import { stableSort } from "../../utils/sorter";
import { getComparator, OrderType } from "../../utils/Comparator";
import useStyles from "../../styles/styles";
import { Order } from "../../utils/interfaces";

interface OrderTableBodyProps {
  page: number;
  rows: any[];
  rowsPerPage: number;
  emptyRows: number;
  order: OrderType;
  orderBy: string;
  buttons?: JSX.Element[];
}

export default function OrderTableBody(
  props: OrderTableBodyProps
): JSX.Element {
  const classes = useStyles();
  const { rows, emptyRows, rowsPerPage, order, orderBy, page, buttons } = props;
  return (
    <TableBody>
      {/* if you don't need to support IE11, you can replace the `stableSort` call with:
  rows.slice().sort(getComparator(order, orderBy)) */}
      {stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const labelId = `enhanced-table-checkbox-${index}`;
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={row.id + labelId}>
              <TableCell
                className={classes.tableBody}
                component="th"
                id={labelId}
                scope="row"
                padding="none"
              >
                {row.id}
              </TableCell>
              <TableCell className={classes.tableBody} align="left">
                {row.date.toLocaleString()}
              </TableCell>
              <TableCell className={classes.tableBody} align="left">
                {row.customer}
              </TableCell>
              <TableCell className={classes.tableBody} align="right">
                {"$"+row.total}
              </TableCell>
              <TableCell className={classes.tableBody} align="left">
                {row.deliveryDate.toLocaleString()}
              </TableCell>
              <TableCell className={classes.tableBody} align="right">
                {buttons }
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
  );
}
