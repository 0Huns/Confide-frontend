import axios from "axios";

const API = window.location.hostname === "localhost" ? "" : "/api";

const login = async () => {
  try {
    const res = await axios({
      method: "POST",
      url: `${API}/auth`,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      withCredentials: true,
    });
    console.log(res);
    const accessToken = res.headers["accesstoken"];
    const userId = res.headers["userid"];
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
