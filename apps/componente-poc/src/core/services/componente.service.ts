import Http from './connection/http'; 

export const getTextoBarraComponente = (page = 0, extraParams = {}) => {
  const params = { page, ...extraParams }; 
  
  return Http.get<string>('/getTextoBarraComponente', { params });
};
export const getVisaoGeralDePrivacidade = (page = 0, extraParams = {}) => {
  const params = { page, ...extraParams }; 
  
  return Http.get<string>('/getVisaoGeralDePrivacidade', { params });
};
export const getCookieDeclaration = (page = 0, extraParams = {}) => {
  const params = { page, ...extraParams }; 
  
  return Http.get<string>('/getCookieDeclaration', { params });
};
export const getPrivacyPolicy = (page = 0, extraParams = {}) => {
  const params = { page, ...extraParams }; 
  
  return Http.get<string>('/getPrivacyPolicy', { params });
};
export const getUserPreferences = (KEY = 0, extraParams = {}) => {
  const params = { KEY, ...extraParams }; 
  
  return Http.get<string>('/getUserPreferences', { params });
};