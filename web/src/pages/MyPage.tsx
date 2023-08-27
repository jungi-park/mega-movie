import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules/rootReducer";
import { getMyPage, sendUserUpdate } from "../utile/DAO/user";
import moment from "moment";

export default function MyPage() {
  const user = useSelector((state: RootState) => state.userReducer);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
    sex: "",
    password: "",
    createdAt: "",
  });

  useEffect(() => {
    // const userEmail = { email: user.email };
    getMyPage(user.email).then((result) => {
      const createDate = result.data.createdAt;
      const formattedDate = formatDate(createDate);
      const userInfo = {
        ...result.data,
        createdAt: formattedDate,
        password: "",
      };
      setUserInfo(userInfo);
    });
  }, [user.email]);

  const formatDate = (date: string) => {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
  };

  const userUpdateHandler = () => {
    if (!validate()) return;

    sendUserUpdate(userInfo)
      .then((Response) => {
        // navigate("/signin");
      })
      .catch((Error) => {
        // setError("아이디가 중복되요");
      });
  };

  const validate = () => {
    if (userInfo.name.length <= 0) {
      setError("이름을 입력해주세요");
      return false;
    }
    if (userInfo.email.length <= 0) {
      setError("이메일을 입력해주세요");
      return false;
    }
    if (userInfo.password.length < 8) {
      setError("비밀번호는 8자리 이상으로 만들어주세요");
      return false;
    }
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
    <div>
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
        이메일:{" "}
        <input
          value={userInfo?.email}
          onChange={(event) =>
            setUserInfo({ ...userInfo, email: event.target.value })
          }
        ></input>
      </div>
      <div>
        비밀번호:{" "}
        <input
          value={userInfo?.password}
          onChange={(event) =>
            setUserInfo({ ...userInfo, password: event.target.value })
          }
        ></input>
      </div>
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
    </div>
  );
}
