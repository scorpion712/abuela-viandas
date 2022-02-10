import React from 'react';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { getComparator, Order } from '../../utils/Comparator';
import { stableSort } from '../../utils/sorter';
import { Menu } from '../../utils/interfaces';
 
interface EnhancedTableBodyProps {
    page: number,
    rows: any[],
    rowsPerPage: number,
    emptyRows: number,
    order: Order,
    orderBy: keyof Menu,
    buttons?: JSX.Element []
};

export default function EnhancedTableBody(props: EnhancedTableBodyProps) : JSX.Element {
    
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
            component="th"
            id={labelId}
            scope="row"
            padding="none"
          >
            {row.name}
          </TableCell>
          <TableCell align="right">{row.price}</TableCell>
          <TableCell align="left">{row.last_date}</TableCell>
          <TableCell align="right">
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
