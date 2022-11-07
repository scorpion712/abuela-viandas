import React from "react";

interface ILoginContext {
    loading: boolean;
    isLogged: boolean;
    user: string;
    dispatch: any;
}

const LoginContext: React.Context<ILoginContext> = React.createContext({} as ILoginContext);

export default LoginContext;