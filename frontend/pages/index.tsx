import type { NextPage } from "next";
import MainPage from "./home";
import { Auth0Provider } from "@auth0/auth0-react";

const Home: NextPage = () => {
  return (
    <Auth0Provider 
      domain="" 
      clientId="" 
      redirectUri="">
      <MainPage />
    </Auth0Provider>
  );
};

export default Home;
