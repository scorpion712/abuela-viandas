import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import EnhancedTable from './Table/EnhancedTable';
import {menues} from '../utils/table/FoodTable';
import {headCells} from '../utils/table/FoodTable';

export default function FoodTable() {

  const buttons = [ 
    <IconButton key="b1" onClick={() => console.log('clic')}>
      <EditIcon />
    </IconButton>,
    <IconButton key="b2">
      <DeleteIcon />
    </IconButton>
  ];
  

  return <EnhancedTable rows={menues} headCells={headCells} buttons={buttons} />;
}
