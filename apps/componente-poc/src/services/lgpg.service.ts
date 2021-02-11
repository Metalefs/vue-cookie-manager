import Http from './http'; // não precisa de .js

//export const create = ({ firstName, lastName }) => Http.post('/user', { firstName, lastName });

export const getVisaoGeralDePrivacidade = (page = 0, extraParams = {}) => {
  const params = { page, ...extraParams }; 
  
  return Http.get('/getVisaoGeralDePrivacidade', { params });
};
export const getCookieDeclaration = (page = 0, extraParams = {}) => {
  const params = { page, ...extraParams }; 
  
  return Http.get('/getCookieDeclaration', { params });
};
export const getPrivacyPolicy = (page = 0, extraParams = {}) => {
  const params = { page, ...extraParams }; 
  
  return Http.get('/getPrivacyPolicy', { params });
};