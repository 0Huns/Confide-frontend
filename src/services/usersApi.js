import axios from 'axios';
import logout from './logout';
import store from '../store/index';
import { setToken } from '../store/module/tokenModule';
const SERVER_USERS_URL = process.env.REACT_APP_SERVER_USERS_URL;
const SERVER_REFRESH_URL = process.env.REACT_APP_SERVER_REFRESH_URL;

const usersApi = axios.create({
  baseURL: `${SERVER_USERS_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

//서버로 api요청 시 header에 access토큰 담아서 전송
usersApi.interceptors.request.use((config) => {
  const accessToken = store.getState().tokenModule.token;
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
},
(error) => {
  console.log(error);
  return Promise.reject(error);
 }
);

//서버로 api요청 후 응답 처리 및 토큰 재발급
usersApi.interceptors.response.use((response) => {
  return response;
},
async (error) => {
  //AccessToken 만료 시 재발급
  error.config.sent = true;
  const isUnauthorized = error.response.status === 401;
  const isTokenExpired = error.response.data.message === 'jwt expired';
  const isTokenRefreshLoss = error.response.data.message === 'Token refresh loss';

  if(isUnauthorized && (isTokenExpired || isTokenRefreshLoss)){
    try{
      const res = await axios.post(
        `${SERVER_REFRESH_URL}`,
        {},
        { 'Content-Type': 'application/json', withCredentials: true, },
      );
      const {newAccessToken, clientUserId} = res.data;
      //스토어에 토큰,id 저장
      store.dispatch(setToken(newAccessToken, clientUserId));
      console.log('accessToken 재발급!');
      //원래 요청 재시도
      return usersApi(error.config);
    }catch(refreshErr){//AccessToken 재발급 시 오류 처리
      window.alert(`토큰 오류: 로그인이 필요합니다! ${refreshErr.response.data.message}`);
      logout();
      return Promise.reject(refreshErr);
    }
  }else{//요청 시 RefreshToken 없을 때 오류 처리
    window.alert(`로그인이 필요합니다! ${error.response.data.message}`);
    logout();
    return Promise.reject(error);
  }
 }
);

export default usersApi;