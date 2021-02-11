import Http from './http'; // não precisa de .js

export class BaseService{
    
    async get(path:string){
        return Http.get(path)
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
}