import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules/rootReducer";
import { getMyPage, sendUserUpdate } from "../utile/DAO/user";
import moment from "moment";
import Navigation from "../components/Navigation";
import styles from "./MyPage.module.scss";

export default function MyPage() {
  const user = useSelector((state: RootState) => state.userReducer);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
    sex: "",
    // password: "",
    createdAt: "",
  });

  useEffect(() => {
    // const userEmail = { email: user.email };
    getMyPage(user.email).then((result) => {
      const createDate = result.data.createdAt;
      const formattedDate = formatDate(createDate);
      const userInfo = {
        name: result.data.name,
        email: result.data.email,
        phoneNumber: result.data.phoneNumber,
        sex: result.data.sex,
        birthDate: result.data.birthDate,
        createdAt: formattedDate,
        // password: "",
      };
      setUserInfo(userInfo);
    });
  }, [user.email]);

  const formatDate = (date: string) => {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
  };

  const userUpdateHandler = () => {
    if (!validate()) return;
    // console.log("userInfo", userInfo);
    const updateData = { ...userInfo, createdAt: null };

    sendUserUpdate(updateData)
      .then((Response) => {
        console.log("Response", Response);
        // navigate("/signin");
      })
      .catch((Error) => {
        console.log("Error", Error);
        // setError("아이디가 중복되요");
      });
  };

  const validate = () => {
    if (userInfo.name.length <= 0) {
      setError("이름을 입력해주세요");
      return false;
    }

    // if (userInfo.password.length < 8) {
    //   setError("비밀번호는 8자리 이상으로 만들어주세요");
    //   return false;
    // }
    if (userInfo.birthDate.length <= 0 || userInfo.birthDate.length > 6) {
      setError("생일은 6자리로 입력해주세요");
      return false;
    }
    if (userInfo.phoneNumber.length <= 0) {
      setError("핸드폰번호를 입력해주세요");
      return false;
    }
    if (userInfo.sex.length <= 0) {
      setError("성별을 선택해주세요");
      return false;
    }
    setError("MY PAGE");
    return true;
  };

  return (
    <main>
      <Navigation></Navigation>
      <div className={styles.layout}>
        <div className={styles.nav}>
          <h3 className={styles.location}>MY BOX</h3>
          <ul className={styles.list}>
            <ul className={styles.selected}>
              <h6>예매/구매내역</h6>
            </ul>
            <ul>
              <h6>영화/스토어 관람권</h6>
              <li>- 영화관람권</li>
              <li>- 스토어 교환권</li>
            </ul>
            <ul>
              <h6>메가박스/제휴쿠폰</h6>
            </ul>
            <ul>
              <h6>멤버십 포인트</h6>
              <li>- 포인트 이용내역</li>
              <li>- 멤버십 카드관리</li>
              <li>- MiL.k 포인트</li>
            </ul>

            <ul>
              <h6>나의 무비스토리</h6>
            </ul>
            <ul>
              <h6>나의 이벤트 응모내역</h6>
            </ul>
            <ul>
              <h6>나의 문의내역</h6>
            </ul>
            <ul>
              <h6>자주쓰는 카드 관리</h6>
            </ul>
            <ul>
              <h6>회원정보</h6>
            </ul>
          </ul>
        </div>
        <div className={styles.content}>
          <ul className={styles.list_con}>
            <li className={styles.main}>
              <div className={styles.user}>
                <div className={styles.left_con}>
                  <div className={styles.symbol}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon.svg"}
                      alt=""
                    />
                  </div>
                  <div className={styles.text}>
                    <div>
                      <h3>박준기님은</h3>
                      <h3>
                        <span>WELCOME</span> 등급입니다.
                      </h3>
                    </div>
                    <div className={styles.link}>
                      <a href="">개인정보 수정</a>
                      <a href="">지난등급조회</a>
                    </div>
                  </div>
                </div>
                <ul className={styles.right_con}>
                  <li className={styles.point}>
                    <h4>100 p</h4>
                  </li>
                  <li>
                    <h6>다음 등급까지</h6>
                    <h6>100p</h6>
                  </li>
                  <li>
                    <p>적립 예정</p>
                    <p>100p</p>
                  </li>
                  <li>
                    <p>당월소멸예정</p>
                    <p>100p</p>
                  </li>
                </ul>
              </div>
              <div className={styles.rank}>
                <div className={styles.line}>
                  <div className={styles.percent}>
                    <div className={styles.color}></div>
                  </div>
                  <ul className={styles.dot}>
                    <li className={styles.on}>
                      <p>WELCOME</p>
                    </li>
                    <li>
                      <p>FRIEDN</p>
                    </li>
                    <li>
                      <p>VIP</p>
                    </li>
                    <li>
                      <p>VVIP</p>
                    </li>
                    <li>
                      <p>MVIP</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.sub}>
                <div className={styles.left_con}>
                  <ul>
                    <li>
                      <img
                        src={process.env.PUBLIC_URL + "/images/ticket2.svg"}
                        alt=""
                      />
                      <p>영화관람권</p>
                      <p>0</p>
                    </li>
                    <li>
                      <img
                        src={process.env.PUBLIC_URL + "/images/ticket2.svg"}
                        alt=""
                      />
                      <p>영화관람권</p>
                      <p>0</p>
                    </li>
                    <li>
                      <img
                        src={process.env.PUBLIC_URL + "/images/ticket2.svg"}
                        alt=""
                      />
                      <p>영화관람권</p>
                      <p>0</p>
                    </li>
                    <li>
                      <img
                        src={process.env.PUBLIC_URL + "/images/ticket2.svg"}
                        alt=""
                      />
                      <p>영화관람권</p>
                      <p>0</p>
                    </li>
                  </ul>
                </div>
                <div className={styles.right_con}>
                  <p>가입된 멤버십이 없습니다.</p>
                </div>
              </div>
            </li>
            <li className={styles.container_1}>
              <div className={styles.left_con}>
                <h5 className={styles.title}>선호관람정보</h5>
                <div className={styles.box}>
                  <div className={styles.group}>
                    <h6 className={styles.name}>
                      내 선호극장
                      <img
                        src={process.env.PUBLIC_URL + "/images/icon_plus.svg"}
                        alt=""
                      />
                    </h6>
                    <ul className={styles.item}>
                      <li>인천아아</li>
                      <li>아아</li>
                    </ul>
                  </div>
                  <div className={styles.group}>
                    <h6 className={styles.name}>
                      내 선호극장
                      <img
                        src={process.env.PUBLIC_URL + "/images/icon_plus.svg"}
                        alt=""
                      />
                    </h6>
                    <ul className={styles.item}>
                      <li>인천아아</li>
                      <li>아아</li>
                    </ul>
                  </div>
                  <div className={styles.group}>
                    <h6 className={styles.name}>
                      내 선호극장
                      <img
                        src={process.env.PUBLIC_URL + "/images/icon_plus.svg"}
                        alt=""
                      />
                    </h6>
                    <ul className={styles.item}>
                      <li>인천아아</li>
                      <li>아아</li> <li>인천아아</li> <li>인천아아</li>{" "}
                      <li>인천아아</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.right_con}>
                <h5 className={styles.title}>나의 무비스토리</h5>
                <div className={styles.box}>
                  <div className={styles.category}>
                    <ul className={styles.item}>
                      <li>
                        <h4>0</h4>
                        <p>본 영화</p>
                      </li>
                      <li>
                        <h4>0</h4>
                        <p>본 영화</p>
                      </li>
                      <li>
                        <h4>0</h4>
                        <p>본 영화</p>
                      </li>
                      <li>
                        <h4>0</h4>
                        <p>본 영화</p>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.category}>
                    <h6 className={styles.name}>최근 본 영화</h6>
                    <ul className={styles.list}>
                      <li>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/img_poster_sleep.jpg"
                          }
                          alt=""
                        />
                      </li>
                      <li>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/img_poster_sleep.jpg"
                          }
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className={styles.container_2}>
              <h5 className={styles.title}>나의 예매내역</h5>
              <div className={styles.box}></div>
            </li>
            <li className={styles.container_2}>
              <h5 className={styles.title}>선호관람정보</h5>
              <div className={styles.box}></div>
            </li>
            <li className={styles.container_1}>
              <div className={styles.left_con}></div>
              <div className={styles.right_con}></div>
            </li>
          </ul>
        </div>
      </div>
      {/* <div>
        <h2 className="form-title">{error.length > 0 ? error : "MY PAGE"}</h2>
      </div> */}
      {/* <div>
        이름:{" "}
        <input
          value={userInfo?.name}
          onChange={(event) =>
            setUserInfo({ ...userInfo, name: event.target.value })
          }
        ></input>
      </div>
      <div>
        이메일: <input value={userInfo?.email} readOnly></input>
      </div> */}
      {/* <div>
        비밀번호:{" "}
        <input
          value={userInfo?.password}
          onChange={(event) =>
            setUserInfo({ ...userInfo, password: event.target.value })
          }
        ></input>
      </div> */}
      {/* <div>
        핸드폰번호:{" "}
        <input
          value={userInfo?.phoneNumber}
          onChange={(event) =>
            setUserInfo({ ...userInfo, phoneNumber: event.target.value })
          }
        ></input>
      </div>
      <div>
        생년월일:{" "}
        <input
          value={userInfo?.birthDate}
          onChange={(event) =>
            setUserInfo({ ...userInfo, birthDate: event.target.value })
          }
        ></input>
      </div>
      <div>
        성별:{" "}
        <select
          className="input"
          value={userInfo?.sex}
          onChange={(event) =>
            setUserInfo({ ...userInfo, sex: event.target.value })
          }
        >
          <option value="">성별선택</option>
          <option value="1">남자</option>
          <option value="2">여자</option>
        </select>
      </div>
      <div>
        생성날자: <input value={userInfo?.createdAt} readOnly></input>
      </div>
      <div>
        <button
          onClick={() => {
            userUpdateHandler();
          }}
        >
          수정
        </button>
      </div> */}
    </main>
  );
}
