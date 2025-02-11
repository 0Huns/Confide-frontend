import { useEffect } from "react";
import Body from "../component/Body";
import { TokenLoading } from "../component/Skeletone";
import { useUserAccess } from "../hooks/useUserAccess";
import { setToken } from "../store/module/tokenModule";
import login from "../services/login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Main() {
  const { data, isLoading, isError, isFetching } = useUserAccess();

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

  if (isFetching || isLoading) {
    return <TokenLoading />;
  }

  if (isError) {
    return <div>Error: 데이터를 불러오지 못했습니다.</div>;
  }

  return <>{data && <Body />}</>;
}

export default Main;
