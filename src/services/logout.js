import axios from "axios";
import store from "../store/index";
import { clearToken } from "../store/module/tokenModule";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const logout = async () => {
  try {
    // 서버에 로그아웃 요청
    const userId = store.getState().tokenModule.userId;
    await axios.post(
      `${SERVER_URL}/logout`,
      { userId },
      { withCredentials: true }
    );

    // 클라이언트 측 토큰 제거
    store.dispatch(clearToken());

    // 로그인 페이지로 리다이렉트
    window.location.replace("/");
  } catch (error) {
    // 오류 처리
    store.dispatch(clearToken());
    window.location.replace("/");
  }
};

export default logout;
