import './Main.css';
import axios from 'axios'
import React, { useState } from 'react';


const url ='http://localhost:8080'

    
    const Main = () => {
    const [error, setError] = useState("")
    const [form, setForm] = useState({
      name:"",
      password:"",
      email:"",
      birthDate:"",
      phoneNumber:"",
      sex:""
    })
  

  const singUp =async() =>{
    if(!validate()) return

    const response = await axios.post(`${url}/v1/user`,{...form}
        ).then((Response)=>{console.log(Response.data)})
        .catch((Error)=>{console.log(Error)});
      }

  const validate = ()=>{
    if(form.name.length<=0){
      setError("이름을 입력해주세요")
      return false
    }
    if(form.birthDate.length<=0 || form.birthDate.length>6){
      setError("생일은 6자리로 입력해주세요")
      return false
    }
    if(form.email.length<=0){
      setError("이메일을 입력해주세요")
      return false
    }
    if(form.password.length<8){
      setError("비밀번호을 입력해주세요")
      return false
    }
    if(form.phoneNumber.length<=0){
       setError("핸드폰번호를 입력해주세요")
       return false
    }
    if(form.sex.length<=0){
      setError("성별을 선택해주세요")
      return false
    }
    setError("")  
    return true
  }
  

  return (
    <div id="form">
      <input placeholder="이름" type="text" value={form.name} onChange={event=>setForm({...form,name:event.currentTarget.value})}></input>
      <input placeholder="생일" type="text"  value={form.birthDate} onChange={event=>setForm({...form,birthDate:event.currentTarget.value})}></input>
      <input placeholder="이메일" type="text" value={form.email} onChange={event=>setForm({...form,email:event.currentTarget.value})}></input>
      <input placeholder="비밀번호" type="text"  value={form.password} onChange={event=>setForm({...form,password:event.currentTarget.value})}></input>
      <input placeholder="핸드폰번호" type="text" value={form.phoneNumber} onChange={event=>setForm({...form,phoneNumber:event.currentTarget.value})}></input>
      <select value={form.sex} onChange={event=>setForm({...form,sex:event.currentTarget.value})}>
        <option value="">성별선택</option>
        <option value="1">남자</option>
        <option value="2">여자</option>
      </select>
      <button onClick={singUp}>회원가입</button>
      {error.length > 0 &&
        <h2>
          {error}
        </h2>
      }
    </div>
  );
};

export default Main;
