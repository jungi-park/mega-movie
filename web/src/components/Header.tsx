import axios from "axios";
import React from "react";
import { RootState } from "../modules/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.scss";
import { sendSignOut } from "../utile/sign";
import { logoutUser } from "../modules/user";

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

// UtilArea
type LeftLink = {
  href: string;
  title: string;
};

type RightLink = {
  href: string;
  title: string;
  showWhenLoggedIn: boolean;
  fuc?: () => void;
};

function UtilArea() {
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

  const leftLinks: LeftLink[] = [
    { href: "/", title: "VIP LOUNGE" },
    { href: "/", title: "멤버십" },
    { href: "/", title: "고객센터" },
  ];

  const rightLinks: RightLink[] = [
    { href: "/signin", title: "로그인", showWhenLoggedIn: !user.isLogin },
    { href: "/", title: "회원가입", showWhenLoggedIn: false },
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
    { href: "/", title: "알림", showWhenLoggedIn: true },
    { href: "/", title: "빠른예매", showWhenLoggedIn: true },
  ];

  return (
    <div className={styles.utilArea}>
      <ul className={styles.leftArea}>
        {leftLinks.map((link) => (
          <li key={link.title}>
            <a href={link.href} title={link.title}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <ul className={styles.rightArea}>
        {rightLinks.map((link) => (
          <li
            key={link.title}
            style={{
              display: isLoggedIn || link.showWhenLoggedIn ? "block" : "none",
            }}
          >
            <a
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
          </li>
        ))}
      </ul>
    </div>
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
      href: "/",
      title: "영화",
      body: ["전체영화", "큐레이션", "무비포스트"],
    },
    {
      href: "/",
      title: "예매",
      body: ["빠른예매", "상영시간표", "더 부티크 프라이빗 예매"],
    },
    {
      href: "/",
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
      body: ["메가박스 멤버쉽", "제휴/할인"],
    },
  ];

  return (
    <nav>
      <ul className={styles.gnbList}>
        <li className={styles.leftGnb}>
          <svg viewBox="0 0 54 54">
            <path
              d="M-4542-24v-3h48v3zm0-12v-3h48v3z"
              transform="translate(4545 59)"
            ></path>
          </svg>
          <div className={styles.gnbSearch}></div>
        </li>
        {gnbData.map((gnb) => (
          <li className={styles.gnbTitle} key={gnb.title}>
            <a href={gnb.href}>{gnb.title}</a>
            <ul className={styles.gnbBody}>
              {gnb.body.map((lnb, index) => (
                <li key={index}>{lnb}</li>
              ))}
            </ul>
          </li>
        ))}
        <li className={styles.rightGnb}>
          <div className={styles.gnbCalendar}></div>
          <div className={styles.gnbPerson}></div>
        </li>
      </ul>
    </nav>
  );
}

// Header
function Header() {
  return (
    <header className={styles.mainHeader}>
      <h1 className={styles.ci}>
        <a href="/" title="MEGABOX 메인으로 가기">
          MEGABOX : Life Theater
        </a>
      </h1>
      <UtilArea></UtilArea>
      <Nav></Nav>
    </header>
  );
}
export default Header;
