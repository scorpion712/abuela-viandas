import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link, Typography } from "@mui/material";
import {
  authFacebook,
  authFirebase,
  authGoogle,
} from "../../contexts/login/login.service";
import LoginContext from "../../contexts/login/login.context";
import { createAddaptedAuth } from "../adapters/login.addapter";

export const LoginComponent = () => {
  const [authWay, setAuthWay] = useState(""); // selected authentication way

  const {loading, isLogged, dispatch} = useContext(LoginContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);  
    switch (authWay) {
      case "facebook":
        authFacebook(dispatch, data);
        break;
      case "google":
        authGoogle(dispatch, data);
        break;
      default:
        authFirebase(dispatch, data);
        break;
    }
  };

  const handleLogin = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAuthWay(event.currentTarget.name);
  };
 
  console.log(`Loading: ${loading}, isLogged: ${isLogged}`)

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Iniciar Sesión
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Dirección de correo electrónico"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Recordarme"
        />
        <Button
          type="submit"
          name="firebase"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          onClick={(e) => handleLogin(e)}
        >
          Iniciar Sesión
        </Button>
        <Button
          type="submit"
          name="google"
          fullWidth
          variant="outlined"
          sx={{ mt: 2, mb: 2 }}
          style={{ backgroundColor: "#DB4437", color: "#FFF" }}
          startIcon={<GoogleIcon style={{ color: "#FFF" }} />}
          onClick={(e) => handleLogin(e)}
        >
          Iniciar Sesión con Google
        </Button>
        <Button
          type="submit"
          name="facebook"
          fullWidth
          variant="contained"
          sx={{ mb: 2 }}
          style={{ backgroundColor: "#3b5998" }}
          startIcon={<FacebookIcon />}
          onClick={(e) => handleLogin(e)}
        >
          Iniciar Sesión con Facebook
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Olvidó su contraseña?
            </Link>
          </Grid>
          <Grid item>
            <Link href="signup" variant="body2">
              {"Aún no tiene cuenta? Registrese"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
