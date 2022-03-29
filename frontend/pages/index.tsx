import type { NextPage } from "next";
import Main from "./main";
import { Auth0Provider } from "@auth0/auth0-react";

const Home: NextPage = () => {
  return (
    <Auth0Provider 
      domain="" 
      clientId="" 
      redirectUri="">
      <Main />
    </Auth0Provider>
  );
};

export default Home;
