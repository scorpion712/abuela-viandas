import { Container, Grid, Typography } from '@mui/material'
import React from 'react' 
import Layout from '../components/Layout'
import useStyles from '../styles/styles';
import FoodPage from './FoodPage';

export default function HomePage() {
    const classes = useStyles();
  return (
    //   <Layout>  
    //       <div  style={{marginLeft:"3rem", marginRight: '3rem'}}>

 
    //     <Grid direction="row" container> 
    //         <Grid item xs={2} className={classes.gridWeekDay}>
    //             Lunes 14
    //         </Grid>
    //         <Grid item xs={2} className={classes.gridWeekDay} >
    //             Martes 15    
    //         </Grid>
    //         <Grid item xs={2} className={classes.gridWeekDay}>
    //             Miercoles 16    
    //         </Grid>
    //         <Grid item xs={2} className={classes.gridWeekDay}>
    //             Jueves 17
    //         </Grid>
    //         <Grid item xs={2} className={classes.gridWeekDay}>
    //             Viernes 18
    //         </Grid>
    //         <Grid item xs={2} className={classes.gridWeekDay}>
    //             Sabado 19
    //         </Grid>
    //     </Grid>  
    //       </div>
          
    //   </Layout>
    <FoodPage /> 
  )
}
