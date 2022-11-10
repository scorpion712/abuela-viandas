import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; 
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
 
import { useState } from 'react';
import { Alert, Link, Slide, Snackbar, Typography } from '@mui/material';
import useStyles from '../../../hooks/useStyles';
import { signFacebook, signFirebase, signGoogle } from '../../../contexts/signup/signup.service';
import LoginContext from '../../../contexts/login/login.context';


function TransitionLeft(props: any) {
  return <Slide {...props} direction="left" />;
}


export const SignUpComponent = () => {
  const classes = useStyles();

  const [authWay, setAuthWay] = useState(""); // selected registration way
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = React.useState(false);

  const { dispatch } = useContext(LoginContext);

  const handleRegistration = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAuthWay(event.currentTarget.name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName')
    });
    if (!data.get('firstName') || !data.get('lastName') || !data.get('email') || !data.get('password')) {
      setErrorMessage("Por favor, complete los campos.");
      setOpen(true);
    } else {
      switch (authWay) {
        case "facebook":
          signFacebook(dispatch, data);
          break;
        case "google":
          signGoogle(dispatch, data);
          break;
        default:
          signFirebase(dispatch, data);
          break;
      }
    }
  };

  return (
    <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registración
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Dirección de Correo Electrónico"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
          type="submit"
          name="firebase"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={(e) => handleRegistration(e)}
        >
          Registrarse
        </Button>
        <Button
          type="submit"
          name="google"
          fullWidth
          variant="outlined"
          sx={{ mt: 2, mb: 2 }}
          className={classes.googleButton}
          startIcon={<GoogleIcon style={{ color: "#FFF" }} />}
          onClick={(e) => handleRegistration(e)}
        >
          Registrarse con Google
        </Button>
        <Button
          type="submit"
          name="facebook"
          fullWidth
          variant="contained"
          sx={{ mb: 2 }}
          className={classes.facebookButton}
          startIcon={<FacebookIcon />}
          onClick={(e) => handleRegistration(e)}
        >
          Registrarse con Facebook
        </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2"  className={classes.loginLink}>
                  Ya tiene una cuenta? Inicie Sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
          {errorMessage && (
        <Snackbar
          open={open}
          onClose={handleClose}
          TransitionComponent={TransitionLeft}
          key={"transition ? transition.name : "}
        >
          <Alert severity="warning" className={classes.popUpMessage}>
            {errorMessage}
          </Alert>
        </Snackbar>
      )}
        </Box>
  )
}
