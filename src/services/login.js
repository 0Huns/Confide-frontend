import axios from "axios";

const API = window.location.hostname === "localhost" ? "" : "/api";

const login = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const code = urlParams.get("code");
  const state = urlParams.get("state");
  try {
    const res = await axios({
      method: "POST",
      url: `${API}/loginAuth`,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        code: code,
        state: state,
      },
      withCredentials: true,
    });
    const accessToken = res.data.accesstoken;
    const userId = res.data.userid;
    return {
      accessToken,
      userId,
    };
    // window.localStorage.setItem('accessToken', accessToken);
    // window.localStorage.setItem('userId', userId);
    // window.location.replace('/main');
  } catch (error) {
    if (!error.response) {
      window.alert("서버와 연결할 수 없습니다. 인터넷 연결을 확인하세요.");
    } else {
      window.alert(`로그인 오류! : ${error.response.data.message}`);
    }
    // window.location.replace("/");
  }
};

export default login;
