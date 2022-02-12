import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper'; 

import EnhancedTableToolbar from './EnhancedTableToolbar';
import { Menu } from '../../utils/interfaces';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableBody from './EnhancedTableBody';
import { Order } from '../../utils/Comparator';


interface EnhancedTableProps {
  headCells: any[];
  rows: any[];
  buttons: any[];
  handleFilter?: (e: any) => void;
}

export default function EnhancedTable(props: EnhancedTableProps) {
  const { rows, headCells, buttons, handleFilter } = props;
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Menu>('price'); 
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Menu
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
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
 
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar handleFilter={handleFilter} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead 
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells} numSelected={0} onSelectAllClick={() => {/*do nothing */}}/>
            <EnhancedTableBody 
              page={page} 
              rows={rows} 
              emptyRows={emptyRows} 
              rowsPerPage={rowsPerPage} 
              order={order} 
              orderBy={orderBy}
              buttons={buttons}/>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
