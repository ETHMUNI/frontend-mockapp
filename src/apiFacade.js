import {BASE_URL_DEV} from "./utils/globalVariables.js"


export const login = async (username, password, callback) => {
    try{
        const response = await fetch(`${BASE_URL_DEV}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();
        callback(data);
    }catch(error){
        console.log(error);
    }
}


export const register = async (username, password, callback) => {
    try{
        const response = await fetch(`${BASE_URL_DEV}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();
        callback(data);
        console.log(data);
    }catch (error){
        console.log(error);
    }

}