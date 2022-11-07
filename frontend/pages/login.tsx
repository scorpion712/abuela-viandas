import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Layout from "../components/Layout";
import { LoginComponent } from "../login/components/LoginComponent";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        La Abuela Viandas
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  return (
    <Layout>
      <Container component="main" maxWidth="xs">
        <CssBaseline /> 
        <LoginComponent />
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </Layout>
  );
}
