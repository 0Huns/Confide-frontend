import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import login from "../services/login";
import { setToken } from "../store/module/tokenModule";
import { TokenLoading } from "../component/Skeletone";

function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginApi = async () => {
    const loginRes = await login();
    const { accessToken, userId } = loginRes;
    if (loginRes) {
      dispatch(setToken(accessToken, userId));
      return navigate("/main/post", { replace: true });
    }
  };

  useEffect(() => {
    loginApi();
  }, []);

  return <TokenLoading />;
}

export default Auth;
