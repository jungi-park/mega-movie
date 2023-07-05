import { useEffect, useState } from 'react';
import './SignIn.scss';
import axios from 'axios';
import { loginUser, logoutUser } from '../modules/user';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules/rootReducer';
import { Link ,useNavigate} from 'react-router-dom';
import { sendSingIn, sendSingOut } from '../utile/sign';


const SingIn =() =>{
    const user = useSelector((state: RootState) => state.userReducer);
    const navigate = useNavigate();
    const url ='http://localhost:8080'
    const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다


    const [form, setForm] = useState({
        password:"",
        email:"",
      })

      

    const SingIn = async() =>{
        sendSingIn(form).then((Response)=>{if(Response.data.email){
            dispatch(loginUser({email:Response.data.email,name:Response.data.name}))
            navigate("/");
            console.log("로그인",user)
        }})
        .catch((Error)=>{console.log(Error)});
      }
      
    const SingOut = async() =>{
        sendSingOut(form).then((Response)=>{
            dispatch(logoutUser())
            console.log("로그아웃",user)
        })
        .catch((Error)=>{console.log(Error)});
      }
    

      return(
          <div>
              <div>로그인</div>
              <input type='text' placeholder='이메일' value={form.email} onChange={event=>setForm({...form,email:event.target.value})}></input>
              <input type='password' placeholder='비밀번호'  value={form.password} onChange={event=>setForm({...form,password:event.target.value})}></input>
              {!user.isLogin&&<button onClick={SingIn}>로그인</button>}
              {user.isLogin&&<button onClick={SingOut}>로그아웃</button>}
          </div>
      )
    
}

export default SingIn;