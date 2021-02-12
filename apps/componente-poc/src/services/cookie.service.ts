import Http from './http'; // não precisa de .js


export function getAllCurrentDomainCookies():Promise<{name:String,value:string}[]>{
    return new Promise((resolve,reject)=>{
        let cookies:{name:string,value:string}[] = [];
        document.cookie.split(";")
        .reduce( (ac, cv, i) => cookies.push({name:cv.split('=')[0].trim(), value:cv.split('=')[1]}), {});
        resolve(cookies);
    })
}

export const getAllCookies = (KEY = "0", extraParams = {}) => {
    const params = { KEY, ...extraParams }; 
    
    return Http.get<string>('/cookieScan', { params });
};