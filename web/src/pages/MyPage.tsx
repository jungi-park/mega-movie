import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules/rootReducer";
import { getMyPage, sendUserUpdate } from "../utile/DAO/user";
import moment from "moment";
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
      <div className={styles.layout}>
        <div className={styles.leftContainer}>
          <h4 className={styles.liTitle}>마이페이지</h4>
          <div className={styles.leftContent}>
            <div className={styles.userContent}>
              <div className={styles.userImg}></div>
              <div className={styles.userInfo}>
                <h6>박준기</h6>
                <p>현재 포인트 200p</p>
              </div>
            </div>
            <ul className={styles.pageMenu}>
              <ul className={styles.selected}>예매/구매내역</ul>
              <ul>
                영화/스토어 관람권
                <li>- 영화관람권</li>
                <li>- 스토어 교환권</li>
              </ul>
              <ul>메가박스/제휴쿠폰</ul>
              <ul>
                멤버십 포인트
                <li>- 포인트 이용내역</li>
                <li>- 멤버십 카드관리</li>
                <li>- MiL.k 포인트</li>
              </ul>

              <ul>나의 무비스토리</ul>
              <ul>나의 이벤트 응모내역</ul>
              <ul>나의 문의내역</ul>
              <ul>자주쓰는 카드 관리</ul>
              <ul>회원정보</ul>
            </ul>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.liContent}>
            <div className={styles.mainContainer}></div>
            <div className={styles.subContainer}></div>
            <div className={styles.aContainer}></div>
            <div className={styles.bContainer}></div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="form-title">{error.length > 0 ? error : "MY PAGE"}</h2>
      </div>
      <div>
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
      </div>
      {/* <div>
        비밀번호:{" "}
        <input
          value={userInfo?.password}
          onChange={(event) =>
            setUserInfo({ ...userInfo, password: event.target.value })
          }
        ></input>
      </div> */}
      <div>
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
      </div>
    </main>
  );
}
