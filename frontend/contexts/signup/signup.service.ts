import { createAddaptedSignUp } from "../../components/registration/adapters/signup.adapter";
import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../../utils/constants";

export const signFirebase =  async (dispatch: any, data: FormData) => {
    dispatch({
        type: SIGNUP_REQUEST,
    });
    try {
        console.log(`register addapted ${data} on firebase auth and set response`);
        const addaptedData = createAddaptedSignUp(data);
        // simulate response waiting for 1 second
        const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
        await sleep(1000); 
        if (addaptedData.email != 'test' && addaptedData.password != 'testing') {
            return dispatch({
                type: SIGNUP_ERROR,
                payload: "Usuario no valido" 
            })
        }
        
        return dispatch({
            type: SIGNUP_SUCCESS,
            payload: addaptedData
        })
    } catch (error: any) {
        return dispatch({
            type: SIGNUP_ERROR,
            payload: error.message
        })
    }
}

export const signGoogle =  async (dispatch: any, data: FormData) => {
    dispatch({
        type: SIGNUP_REQUEST,
    });
    try {
        console.log(`register addapted ${data} on firebase google auth and set response`);
        const addaptedData = createAddaptedSignUp(data); 
        
        return dispatch({
            type: SIGNUP_SUCCESS,
            payload: addaptedData
        }) 
    } catch (error: any) {
        return dispatch({
            type: SIGNUP_ERROR,
            payload: error.message
        })
    }
}

export const signFacebook =  async (dispatch: any, data: FormData) => {
    dispatch({
        type: SIGNUP_REQUEST,
    });
    try {
        console.log(`register addapted ${data} on firebase facebook and set response`);
        const addaptedData = createAddaptedSignUp(data);
        
        return dispatch({
            type: SIGNUP_SUCCESS,
            payload: addaptedData
        })
    } catch (error: any) {
        return dispatch({
            type: SIGNUP_ERROR,
            payload: error.message
        })
    }
}