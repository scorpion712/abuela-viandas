import {
  Button,
  Container,
  Link,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material"; 
import React from "react";
import NextLink from "next/link";

import Layout from "../components/Layout";
import useStyles from "../styles/styles";
import { haveAccount } from "../utils/constants";
import GoogleLogin from "react-google-login";

export default function Login() {
  const classes = useStyles();

  handleFailure = (result) => {
    alert(result);
  }

  const handleLogin = (googleData) => {
    console.log(googleData);
  }

  return (
    <Layout>
      <Container className={classes.main}>
        <form className={classes.loginForm}>
          <Typography component="h2" variant="h2">
            Login
          </Typography>
          <List>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                inputProps={{ type: "email" }}
              />
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Password"
                inputProps={{ type: "password" }}
              />
            </ListItem>
            <ListItem>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Iniciar Sesión con Google"
                onSucces={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
                >

              </GoogleLogin>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="success"
              >
                Login
              </Button>
            </ListItem>
            <ListItem style={{fontSize: '1.2rem'}}>
              <Typography gutterBottom variant="h6">
                {haveAccount}
              </Typography>
              <NextLink href="/register" passHref>
                <Link style={{color: '#2e7d32', fontWeight: '500'}}>Register</Link>
              </NextLink>
            </ListItem>
          </List>
        </form>
      </Container>
    </Layout>
  );
}
