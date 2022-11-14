import { createAddaptedAuth } from "../../components/registration/adapters/login.addapter";
import { IAuthData } from "../../models/Auth";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../utils/constants";

export const authFirebase =  async (dispatch: any, data: FormData) => {
    dispatch({
        type: LOGIN_REQUEST,
    });
    try {
        console.log(`validate addapted ${data} on firebase auth and set response`);
        const addaptedData = createAddaptedAuth(data);
        // simulate response waiting for 1 second
        const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
        await sleep(1000); 
        if (addaptedData.email != 'test' && addaptedData.password != 'testing') {
            return dispatch({
                type: LOGIN_ERROR,
                payload: "Usuario no valido" 
            })
        }
        return dispatch({
            type: LOGIN_SUCCESS,
            payload: addaptedData
        })
    } catch (error: any) {
        return dispatch({
            type: LOGIN_ERROR,
            payload: error.message
        })
    }
}

export const authGoogle =  async (dispatch: any, data: FormData) => {
    dispatch({
        type: LOGIN_REQUEST,
    });
    try {
        console.log(`validate addapted ${data} on google auth`);
        const addaptedData = createAddaptedAuth(data);
        // simulate response waiting for 1,5 seconds
        const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
        await sleep(1500);
        return dispatch({
            type: LOGIN_SUCCESS,
            payload: data 
        })
    } catch (error: any) {
        return dispatch({
            type: LOGIN_ERROR,
            payload: error.message
        })
    }
}

export const authFacebook =  async (dispatch: any, data: FormData) => {
    dispatch({
        type: LOGIN_REQUEST,
    });
    try {
        console.log(`validate addapted ${data} on facebook auth`);
        const addaptedData = createAddaptedAuth(data);
        // simulate response waiting for 1,5 seconds
        const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
        await sleep(1500);
        return dispatch({
            type: LOGIN_SUCCESS,
            payload: data 
        })
    } catch (error: any) {
        return dispatch({
            type: LOGIN_ERROR,
            payload: error.message
        })
    }
}

