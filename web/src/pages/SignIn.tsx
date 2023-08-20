import { useEffect, useState } from "react";
import "./SignIn.scss";
import axios from "axios";
import { loginUser, logoutUser } from "../modules/user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules/rootReducer";
import { Link, useNavigate } from "react-router-dom";
import { sendSignIn, sendSignOut } from "../utile/sign";
import Header from "../components/Header";

const SingIn = () => {
  const user = useSelector((state: RootState) => state.userReducer);
  const navigate = useNavigate();
  const url = "http://localhost:8080";
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다
  const [rememberId, setRememberId] = useState(false);
  const [form, setForm] = useState({
    password: "",
    email: "",
  });

  useEffect(() => {
    // 체크박스 초기 값 설정
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail !== null) {
      setForm({ ...form, email: savedEmail });
      setRememberId(true);
    }
  }, []);

  // 새로운 이메일 값이 입력될 때마다 localStorage에 저장
  useEffect(() => {
    if (rememberId) {
      localStorage.setItem("savedEmail", form.email);
    } else {
      localStorage.removeItem("savedEmail");
    }
  }, [form.email, rememberId]);

  const googleSingIn = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const kakaoSingIn = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };

  const naverSingIn = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/naver";
  };

  const SingIn = async () => {
    sendSignIn(form)
      .then((Response) => {
        if (Response.data.email) {
          dispatch(
            loginUser({ email: Response.data.email, name: Response.data.name })
          );
          navigate("/");
          console.log("로그인", user);
        } else {
          alert("아이디 및 비밀번호를 확인해주세요");
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  const SingOut = async () => {
    sendSignOut(form)
      .then((Response) => {
        dispatch(logoutUser());
        console.log("로그아웃", user);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <main className="login">
      <div className="content">
        <h1 className="ci">
          <a href="/" title="MEGABOX 메인으로 가기">
            MEGABOX : Life Theater
          </a>
        </h1>
        <div className="loginCont">
          <div className="inputCont">
            <div className="inputBox">
              <div className="idBox">
                <div className="icon-box">
                  <span className="icon"></span>
                </div>
                <input
                  className="idLine"
                  type="text"
                  placeholder="이메일"
                  value={form.email}
                  onChange={(event) =>
                    setForm({ ...form, email: event.target.value })
                  }
                ></input>
              </div>
              <div className="pwBox">
                <div className="icon-box">
                  <span className="icon"></span>
                </div>
                <input
                  className="pwLine"
                  type="password"
                  placeholder="비밀번호"
                  value={form.password}
                  onChange={(event) =>
                    setForm({ ...form, password: event.target.value })
                  }
                ></input>
              </div>
            </div>
            <div className="idSave">
              <input
                onChange={(event) => {
                  setRememberId(event.target.checked);
                }}
                checked={rememberId}
                type="checkbox"
                name=""
                id=""
              />
              <label htmlFor="">아이디 저장</label>
            </div>
          </div>
          <div className="btnLogin">
            {!user.isLogin && (
              <button className="long" onClick={SingIn}>
                로그인
              </button>
            )}
            {/* {user.isLogin && (
              <button className="primaryBtn long" onClick={SingOut}>
                로그아웃
              </button>
            )} */}
          </div>
          <ul className="loginNav">
            <li>아이디 찾기</li>
            <li>비밀번호 찾기</li>
            <li
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원가입
            </li>
          </ul>
        </div>
        <div className="btnEtc">
          <div className="btnNologin">
            <div className="icon-box">
              <span className="icon"></span>
            </div>
            <button className="long">비회원 예매확인</button>
          </div>
          <div className="btngoogle">
            <div className="icon-box">
              <span className="icon"></span>
            </div>
            <button
              className="long"
              onClick={() => {
                googleSingIn();
              }}
            >
              구글 로그인
            </button>
          </div>
          <div className="btnkakao">
            <div className="icon-box">
              <span className="icon"></span>
            </div>
            <button
              className="long"
              onClick={() => {
                kakaoSingIn();
              }}
            >
              카카오 로그인
            </button>
          </div>{" "}
          <div className="btnnaver ">
            <div className="icon-box">
              <span className="icon"></span>
            </div>
            <button
              className="long"
              onClick={() => {
                naverSingIn();
              }}
            >
              네이버 로그인
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingIn;
