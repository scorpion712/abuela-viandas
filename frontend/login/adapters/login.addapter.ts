import { IAuthData } from "../../models/Auth";

export const createAddaptedAuth = (data: FormData)=> { 
    const formattedData: IAuthData = { 
        email:  data.get('email')?.toString() || "" ,
        password: data.get('password')?.toString() || ""
    }
    return formattedData;
}
 