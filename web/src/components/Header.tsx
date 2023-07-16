import styles from "./Header.module.scss";

// UtilArea
type LeftLink = {
  href: string;
  title: string;
};

type RightLink = {
  href: string;
  title: string;
  showWhenLoggedIn: boolean;
};

function UtilArea() {
  const isLoggedIn = false;

  const leftLinks: LeftLink[] = [
    { href: "/", title: "VIP LOUNGE" },
    { href: "/", title: "멤버십" },
    { href: "/", title: "고객센터" },
  ];

  const rightLinks: RightLink[] = [
    { href: "/", title: "로그인", showWhenLoggedIn: false },
    { href: "/", title: "회원가입", showWhenLoggedIn: false },
    { href: "/", title: "로그아웃", showWhenLoggedIn: true },
    { href: "/", title: "알림", showWhenLoggedIn: true },
    { href: "/", title: "빠른예매", showWhenLoggedIn: true },
  ];

  return (
    <div className={styles.utilArea}>
      <ul className="leftarea">
        {leftLinks.map((link) => (
          <li key={link.title}>
            <a href={link.href} title={link.title}>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <ul className="rightarea">
        {rightLinks.map((link) => (
          <li
            key={link.title}
            style={{
              display: isLoggedIn || link.showWhenLoggedIn ? "block" : "none",
            }}
          >
            <a href={link.href} title={link.title}>
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
        {gnbData.map((gnb) => (
          <li key={gnb.title}>
            <a href={gnb.href}>{gnb.title}</a>
            <ul>
              {gnb.body.map((lnb, index) => (
                <li key={index}>{lnb}</li>
              ))}
            </ul>
          </li>
        ))}
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
