import { useState } from 'react';
import './SignIn.scss';
import axios from 'axios';

const SingIn =() =>{
    const url ='http://localhost:8080'

    const [form, setForm] = useState({
        password:"",
        email:"",
      })
    const sendSingIn = async() =>{
        const response = await axios.post(`${url}/v1/login`,{...form}
        ).then((Response)=>{console.log(Response.data)})
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