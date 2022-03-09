import React from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material'; 

import { stableSort } from '../../utils/sorter';
import { getComparator, OrderType } from '../../utils/Comparator';
import useStyles from '../../styles/styles';
import { Menu } from '../../utils/interfaces';
 
interface FoodTableBodyProps {
    page: number,
    rows: any[],
    rowsPerPage: number,
    emptyRows: number,
    order: OrderType,
    orderBy: string,
    buttons?: JSX.Element []
};

export default function FoodTableBody(props: FoodTableBodyProps) : JSX.Element {
  
  const classes = useStyles();
    const {rows, emptyRows, rowsPerPage, order, orderBy, page, buttons} = props;
    return (
      <TableBody>
  {/* if you don't need to support IE11, you can replace the `stableSort` call with:
  rows.slice().sort(getComparator(order, orderBy)) */}
  {stableSort(rows, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row, index) => {
      const labelId = `enhanced-table-checkbox-${index}`; 
      return (
        <TableRow
          hover 
          role="checkbox" 
          tabIndex={-1}
          key={row.name} 
        >
          <TableCell
          className={classes.tableBody}
            component="th"
            id={labelId}
            scope="row"
            padding="none"
          >
            {row.name}
          </TableCell>
          <TableCell className={classes.tableBody} align="left">{row.category}</TableCell>
          <TableCell className={classes.tableBody} align="right">{row.price}</TableCell>
          <TableCell className={classes.tableBody} align="left">{row.last_date}</TableCell>
          <TableCell className={classes.tableBody} align="right">
            {
                buttons
            }
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
