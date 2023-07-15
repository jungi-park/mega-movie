import styles from "./Header.module.scss";

type menu = [
  {
    id: "movie";
    title: "영화";
    sub: ["전체영화", "큐레이션", "영화제", "무비포스트"];
  }
];

function Nav(props: menu) {
  const lis = [];
  for (let i = 0; i < props.length; i++) {
    let menu = props[i];
    lis.push(
      <li>
        <a href={"/" + menu.id} title={menu.title}>
          {menu.title}
        </a>
        <div>
          <ul>
            <li>
              <a title={menu.sub[0]}>{menu.sub[0]}</a>
            </li>
            <li>
              <a title={menu.sub[1]}>{menu.sub[1]}</a>
            </li>
            <li>
              <a title={menu.sub[2]}>{menu.sub[2]}</a>
            </li>
            <li>
              <a title={menu.sub[3]}>{menu.sub[3]}</a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <nav>
      <ul>{lis}</ul>
    </nav>
  );
}

function Header() {
  return (
    <header className={` ${styles.mainHeader} `}>
      <h1 className={`${styles.ci}`}>
        <a href="/" title="MEGABOX 메인으로 가기"></a>
      </h1>

      <Nav></Nav>
    </header>
  );
}
export default Header;
