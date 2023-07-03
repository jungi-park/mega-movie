import axios from "axios";
import React from "react";
import { RootState } from "../modules/rootReducer";
import { useSelector } from "react-redux";


function Header(){
    const user = useSelector((state: RootState) => state.userReducer);
    // const url ='http://localhost:8080'
    // const sendTestAdmin = async() =>{
    //     const response = await axios.get(`${url}/v1/admin`,{ withCredentials: true }
    //     ).then((Response)=>{
    //         console.log("Response",Response)
    //     })
    //     .catch((Error)=>{console.log(Error)});
    //   }
      

      return(<>
      <div>
      {!user.isLogin&&<button>로그인</button>}
              {user.isLogin&&<button >로그아웃</button>}
      </div>
      </>)
}

export default Header