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
import { useState } from "react";

export default function Login() {
  const classes = useStyles(); 

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
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="success"
              >
                Login
              </Button>
            </ListItem>
            <ListItem style={{ fontSize: "1.2rem" }}>
              <Typography gutterBottom variant="h6">
                {haveAccount}
              </Typography>
              <NextLink href="/register" passHref>
                <Link style={{ color: "#2e7d32", fontWeight: "500" }}>
                  Register
                </Link>
              </NextLink>
            </ListItem>
          </List>
        </form>
      </Container>
    </Layout>
  );
}
