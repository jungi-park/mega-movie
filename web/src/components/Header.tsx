import axios from "axios";
import React from "react";
import { RootState } from "../modules/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { sendSignOut } from "../utile/DAO/user";
import { logoutUser } from "../modules/user";
import { Link } from "../type/linkType";
import { sendSignInGoogle } from "../utile/DAO/user";
import { useNavigate } from "react-router-dom";

//style
import "../assets/scss/components/header.scss";

// function Header(){
//     const user = useSelector((state: RootState) => state.userReducer);
//     // const url ='http://localhost:8080'
//     // const sendTestAdmin = async() =>{
//     //     const response = await axios.get(`${url}/v1/admin`,{ withCredentials: true }
//     //     ).then((Response)=>{
//     //         console.log("Response",Response)
//     //     })
//     //     .catch((Error)=>{console.log(Error)});
//     //   }

//       return(<>
//       <div className="header">
//         {!user.isLogin&&<button>로그인</button>}
//         {user.isLogin&&<button >로그아웃</button>}
//       </div>
//       </>)
// }

// export default Header

function UtilArea() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

  // const SingOut = async () => {
  //   sendSignOut(form)
  //     .then((Response) => {
  //       dispatch(logoutUser());
  //       console.log("로그아웃", user);
  //     })
  //     .catch((Error) => {
  //       console.log(Error);
  //     });
  // };
  // const SingOut = async () => {
  //   sendSignOut(form)
  //     .then((Response) => {
  //       dispatch(logoutUser());
  //       console.log("로그아웃", user);
  //     })
  //     .catch((Error) => {
  //       console.log(Error);
  //     });
  // };
  const isLoggedIn = false;

  const Links: Link[] = [
    // {
    //   title: "구글로그인",
    //   showWhenLoggedIn: !user.isLogin,
    //   fuc: () => {
    //     window.location.href =
    //       "http://localhost:8080/oauth2/authorization/google";
    //     // sendSignInGoogle()
    //     //   .then((Response) => {
    //     //     window.location.href = Response.data;
    //     //   })
    //     //   .catch((Error) => {
    //     //     console.log(Error);
    //     //   });
    //   },
    // },
    { href: "/signin", title: "로그인", showWhenLoggedIn: !user.isLogin },
    { href: "/signup", title: "회원가입", showWhenLoggedIn: !user.isLogin },
    {
      href: "#",
      title: "로그아웃",
      showWhenLoggedIn: user.isLogin,
      fuc: () => {
        sendSignOut({ email: user.email })
          .then((Response) => {
            dispatch(logoutUser());
            console.log("로그아웃", user);
          })
          .catch((Error) => {
            console.log(Error);
          });
      },
    },
    {
      title: "마이페이지",
      showWhenLoggedIn: user.isLogin,
      fuc: () => {
        navigate("/mypage");
      },
    },
    // { href: "/", title: "고객센터", showWhenLoggedIn: true },
  ];

  return (
    <nav>
      <ul className="lnb">
        {Links.map((link) => (
          <li
            key={link.title}
            style={{
              display: isLoggedIn || link.showWhenLoggedIn ? "flex" : "none",
            }}
          >
            {link.href ? (
              <a
                className="font-link"
                href={link.href}
                title={link.title}
                onClick={(e) => {
                  if (link?.fuc) {
                    link.fuc();
                  }
                }}
              >
                {link.title}
              </a>
            ) : (
              <button
                onClick={(e) => {
                  if (link?.fuc) {
                    link.fuc();
                  }
                }}
              >
                {link.title}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Nav
type Gnb = {
  href: string;
  title: string;
  body: string[];
};

function Nav() {
  const gnbData: Gnb[] = [
    {
      href: "movie",
      title: "영화",
      body: ["전체영화", "큐레이션", "무비포스트"],
    },
    {
      href: "mypage",
      title: "예매",
      body: ["빠른예매", "상영시간표", "더 부티크 프라이빗 예매"],
    },
    {
      href: "movieinfo",
      title: "극장",
      body: ["전체극장", "특별관"],
    },
    {
      href: "/",
      title: "이벤트",
      body: ["진행중 이벤트", "지난 이벤트", "당첨자발표"],
    },
    {
      href: "/",
      title: "스토어",
      body: [],
    },
    {
      href: "/",
      title: "혜택",
      body: ["VIP LOUNGE", "메가박스 멤버쉽", "제휴/할인"],
    },
  ];

  return (
    <nav>
      <ul className="gnb">
        {gnbData.map((gnb) => (
          <li className="menu" key={gnb.title}>
            <a className="font-menu" href={gnb.href}>
              {gnb.title}
            </a>
            <ul className="menu-detail">
              {gnb.body.map((lnb, index) => (
                <li className="font-link" key={index}>
                  {lnb}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

type HeaderClass = {
  className: string; // className 속성 추가
};

// Header
function Header(color: HeaderClass) {
  return (
    <header className="header">
      <div className="layout">
        <h1 className="ci-w">
          <a href="/" title="MEGABOX 메인으로 가기">
            MEGABOX : Life Theater
          </a>
        </h1>
        <Nav></Nav>
        <UtilArea></UtilArea>
      </div>
    </header>
  );
}
export default Header;
