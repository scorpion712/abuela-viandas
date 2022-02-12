import { alpha, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'; 

import { tableTitle } from '../../utils/constants';
import FoodTableFilter from '../FoodTableFilter';

interface EnhancedTableToolbarProps {
  handleFilter?: (e: any) => void;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => { 

  const {handleFilter} = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: '0 50%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {tableTitle}
      </Typography> 
      <FoodTableFilter handleFilter={handleFilter} />
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
