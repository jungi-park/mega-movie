import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules/rootReducer";
import { getMyPage } from "../utile/DAO/user";

export default function MyPage() {
  const user = useSelector((state: RootState) => state.userReducer);
  useEffect(() => {
    // const userEmail = { email: user.email };
    console.log("userEmailuserEmail", user.email);
    getMyPage(user.email).then((result) => {
      console.log("result", result);
    });
  }, []);
  return <div>myPage</div>;
}
