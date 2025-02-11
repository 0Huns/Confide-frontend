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
    window.alert("hi");
  };

  useEffect(() => {
    loginApi();
  }, []);

  return <TokenLoading />;
}

export default Auth;
