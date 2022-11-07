import { useReducer } from "react";
import LoginContext from "./login.context";
import loginReducer from "./login.reducer";

export interface ILoginState {
    isLogged: boolean;
    user: string;
    loading: boolean;
}

const initialState: ILoginState = {
    isLogged: false,
    loading: true,
    user: ''
}

const LoginState = (props: { children: any }) => {
    const [state, dispatch] = useReducer(loginReducer, initialState);
    
    return (
      <LoginContext.Provider
        value={{
            isLogged: state.isLogged,
            user: state.user,
            loading: state.loading,
            dispatch: dispatch
        }}
      > 
        {props.children}
      </LoginContext.Provider>
    );
  };
  
  export default LoginState;
  