import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules/rootReducer";
import { getMyPage } from "../utile/DAO/user";
import moment from "moment";

export default function MyPage() {
  const user = useSelector((state: RootState) => state.userReducer);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
    sex: "",
    createdAt: "",
  });

  useEffect(() => {
    // const userEmail = { email: user.email };
    getMyPage(user.email).then((result) => {
      const createDate = result.data.createdAt;
      const formattedDate = formatDate(createDate);
      const userInfo = { ...result.data, createdAt: formattedDate };
      setUserInfo(userInfo);
    });
  }, [user.email]);

  const formatDate = (date: string) => {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
  };

  return (
    <div>
      <div>myPage</div>
      <div>이름: {userInfo?.name}</div>
      <div>이메일: {userInfo?.email}</div>
      <div>핸드폰번호: {userInfo?.phoneNumber}</div>
      <div>생년월일: {userInfo?.birthDate}</div>
      <div>성별: {userInfo?.sex === "1" ? "남자" : "여자"}</div>
      <div>생성날자: {userInfo?.createdAt}</div>
    </div>
  );
}
