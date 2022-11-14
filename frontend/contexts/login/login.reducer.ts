import { PlaylistAddOutlined } from "@material-ui/icons";
import { LOGIN_ERROR, LOGIN_SUCCESS } from "../../utils/constants";
import { ILoginState } from "./login.state";

const LOGIN_REQUEST = "auth";

function loginReducer(state: ILoginState, action: any) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_SUCCESS:  
            return {
                ...state,
                loading: false,
                isLogged: action.payload != null
            };
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        // default action
        default:
            return state;
    }
}

export default loginReducer;
