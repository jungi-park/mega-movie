import './Main.css';
import axios from 'axios'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
;

const url ='http://localhost:8080'

    
    const Main = () => {

    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [birth, setBirth] = React.useState("");
    const [sex, setSex] = React.useState("");  
  
    const onEmailHandler = (event:any) =>{
      setEmail(event.currentTarget.value)
    }

  
    const onNameHandler = (event:any) =>{
      setName(event.currentTarget.value)
    }

 
  const onBirthHandler = (event:any) =>{
    setBirth(event.currentTarget.value)
  }

  
  const onPasswordHandler = (event:any) =>{
    setPassword(event.currentTarget.value)
  }

  
  const onPhoneHandler = (event:any) =>{
    setPhone(event.currentTarget.value)
  }

  
  const onSexHandler = (event:any) =>{
    setSex(event.currentTarget.value)
  }

  const singUp =async() =>{
    const userData = {
      name:name,
      password:password,
      email:email,
      birthDate:birth,
      phoneNumber:phone,
      sex:sex
    }
    const response = await axios.post(`${url}/v1/user`,{...userData}
        ).then((Response)=>{console.log(Response.data)})
        .catch((Error)=>{console.log(Error)});
      }
  

  return (
    <div id="form">
      <input placeholder="이름" type="text" value={name} onChange={onNameHandler}></input>
      <input placeholder="생일" type="text"  value={birth} onChange={onBirthHandler}></input>
      <input placeholder="이메일" type="text" value={email} onChange={onEmailHandler}></input>
      <input placeholder="비밀번호" type="text"  value={password} onChange={onPasswordHandler}></input>
      <input placeholder="핸드폰번호" type="text" value={phone} onChange={onPhoneHandler}></input>
      <select value={sex} onChange={onSexHandler}>
        <option value="">성별선택</option>
        <option value="1">남자</option>
        <option value="2">여자</option>
      </select>
      <button onClick={singUp}>회원가입</button>
    </div>
  );
};

export default Main;
