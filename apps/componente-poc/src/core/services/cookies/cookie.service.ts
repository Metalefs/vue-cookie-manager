import Http from '../connection/http'; // não precisa de .js
import {CustomCookie} from '../../../../../../libs/shared/src/interfaces'

export function getAllCurrentDomainCookies():Promise<{name:String,value:string}[]>{
    return new Promise((resolve,reject)=>{
        let cookies:{name:string,value:string}[] = [];
        document.cookie.split(";")
        .reduce( (ac, cv, i) => cookies.push({name:cv.split('=')[0].trim(), value:cv.split('=')[1]}), {});
        resolve(cookies);
    })
}

export const getAllCookies = (KEY = "234", extraParams = {}) => {
    const params = { KEY, ...extraParams }; 
    
    return Http.get<CustomCookie[]>('/cookieScan', { params });
};

export const deleteCookies = () =>{
    localStorage.setItem("save-cookies",document.cookie);
    var cookies = document.cookie.split(';');
    for (var i = 0 ; i < cookies.length; i++) {
        document.cookie = cookies[i].split('=')[0] + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}

export const resetCookies = () =>{
    let savedCookie = localStorage.getItem("save-cookies");
    if(savedCookie?.includes)
    document.cookie = localStorage.getItem("save-cookies")||'';
}