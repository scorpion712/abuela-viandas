import { Container, Grid, Link, List, ListItem, Typography } from "@mui/material";
import React from "react";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';

import useStyles from "../hooks/useStyles";
import { Box } from "@mui/system";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container spacing={2} style={{marginTop: '.2rem'}}>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={12}>
                <Typography gutterBottom variant="h6" >
                    <WhatsAppIcon style={{marginRight: '1rem', color: '#ff3600'}}  color='secondary'/>
                    +542266466035
                </Typography>   
            </Grid>
            <Grid item xs={12}>
                <Typography  gutterBottom variant="h6">
                    <FacebookIcon style={{marginRight: '1rem', color: '#ff3600'}} color='secondary'/>
                    Viandas la abuela
                </Typography>   
            </Grid>
            <Grid item xs={12}>
                <Typography  gutterBottom variant="h6">
                    <InstagramIcon style={{marginRight: '1rem', color: '#ff3600'}} color='secondary'/>
                    bernaiseeventos1
                </Typography>   
            </Grid>
            <Grid item xs={12}>
                <Typography  gutterBottom variant="h6">
                    <TwitterIcon style={{marginRight: '1rem', color: '#ff3600'}} color='secondary'/>
                    @laviandas
                </Typography>   
            </Grid>
            <Grid item xs={12}>
                <Typography  gutterBottom variant="h6">
                    <EmailIcon style={{marginRight: '1rem', color: '#ff3600'}} color='secondary'/>
                    viandaslaabuela@gmail.com
                </Typography>   
            </Grid>  
            <Grid item xs={12}>
                <Typography gutterBottom variant="h6">
                    <RoomIcon style={{marginRight: '1rem', color: '#ff3600'}} color='secondary'/>
                    Calle 25, Nro. 760 Balcarce, 7620. Buenos Aires, Argentina
                </Typography>   
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
            <Container>

          <Typography variant="h3">Logo</Typography>
          <Typography variant="h4">Slogan</Typography>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={12}>
              <Link style={{color:'#000', textDecoration:'none'}}>
              <Typography variant="h5" gutterBottom>About Us</Typography>    
             </Link> 
            </Grid>
            <Grid item xs={12}>
              <Link style={{color:'#000', textDecoration:'none'}}>
                <Typography variant="h5" gutterBottom>Políticas de Seguridad
                </Typography>
             </Link>
            </Grid>
            <Grid item xs={12}>
              <Link style={{color:'#000', textDecoration:'none'}}>
                <Typography variant="h5" gutterBottom>Preguntas Frecuentes</Typography> 
             </Link>   
            </Grid>
            <Grid item xs={12}>
              <Link style={{color:'#000', textDecoration:'none'}}>
                <Typography variant="h5" gutterBottom>Medios de Pago</Typography> 
             </Link>   
            </Grid>
        </Grid>
        </Grid>
      </Grid>
      <Copyright />
    </footer>
  );
};
