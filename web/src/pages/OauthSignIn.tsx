import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { loginUser } from "../modules/user";
import { useDispatch } from "react-redux";

const OauthSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다
  const [searchParams, setSeratchParams] = useSearchParams();
  const email = searchParams.get("email");
  const name = searchParams.get("name");
  useEffect(() => {
    autoSignIn();
  }, []);

  const autoSignIn = () => {
    dispatch(loginUser({ email: email, name: name }));
    navigate("/");
  };

  return <></>;
};

export default OauthSignIn;
