import { useState } from 'react';
import './SignIn.scss';
import axios from 'axios';
import { loginUser } from '../modules/user';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules/rootReducer';

const SingIn =() =>{
    const user = useSelector((state: RootState) => state.userReducer);
    const url ='http://localhost:8080'
    const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다


    const [form, setForm] = useState({
        password:"",
        email:"",
      })
    const sendSingIn = async() =>{
        const response = await axios.post(`${url}/v1/login`,{...form},{ withCredentials: true }
        ).then((Response)=>{if(Response.data.email){
            dispatch(loginUser({email:Response.data.email,name:Response.data.name}))
            console.log("user",user)
        }})
        .catch((Error)=>{console.log(Error)});
      }

      return(
          <div>
              <div>로그인</div>
              <input type='text' placeholder='이메일' value={form.email} onChange={event=>setForm({...form,email:event.target.value})}></input>
              <input type='password' placeholder='비밀번호'  value={form.password} onChange={event=>setForm({...form,password:event.target.value})}></input>
              <button onClick={sendSingIn}>로그인</button>
          </div>
      )
    
}

export default SingIn;