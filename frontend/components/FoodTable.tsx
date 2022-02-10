import React from 'react';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import EnhancedTable from './Table/EnhancedTable';
import { menues } from '../utils/table/FoodTable';
import { headCells } from '../utils/table/FoodTable';
import { Menu } from '../utils/interfaces';

interface FoodTableProps {
  search: string,
};

export default function FoodTable(props: FoodTableProps) {

  const { search } = props;

  const buttons = [
    <IconButton key="b1" onClick={() => console.log('clic')}>
      <EditIcon />
    </IconButton>,
    <IconButton key="b2">
      <DeleteIcon />
    </IconButton>
  ];

  const foodRows = menues.filter(({ name }: Menu) => name.toLowerCase().includes(search));

  return <EnhancedTable rows={foodRows} headCells={headCells} buttons={buttons} />;
}
