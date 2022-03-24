import { alpha, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'; 
import useStyles from '../../hooks/useStyles';

import { tableTitle } from '../../utils/constants';
import FoodTableFilter from '../FoodTableFilter';

interface GenericTableToolbarProps {
  handleFilter?: (e: any) => void;
}

const GenericTableToolbar = (props: GenericTableToolbarProps) => { 
  const classes = useStyles();
  const {handleFilter} = props;

  return (
    <Toolbar
      className={classes.tableToolBar}
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: '0 50%', fontSize: '1.76rem' }}
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

export default GenericTableToolbar;
