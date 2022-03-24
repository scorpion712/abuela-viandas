import { alpha, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'; 
import useStyles from '../../hooks/useStyles';

import FoodTableFilter from '../food/FoodTableFilter';

interface GenericTableToolbarProps {
  children?: JSX.Element;
  tableTitle: string
}

const GenericTableToolbar = (props: GenericTableToolbarProps) => { 
  const classes = useStyles();
  const { children, tableTitle } = props;

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
      {children}
    </Toolbar>
  );
};

export default GenericTableToolbar;
