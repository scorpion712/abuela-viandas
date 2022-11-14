
export const createAddaptedSignUp = (data: FormData)=> { 
    const formattedData: any = { 
        email:  data.get('email')?.toString() || "" ,
        password: data.get('password')?.toString() || "",
        firstName: data.get('firstName')?.toString() || "",
        lastName: data.get('lastName')?.toString() || "",
    }
    return formattedData;
}
 