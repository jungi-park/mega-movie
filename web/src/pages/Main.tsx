import './Main.css';
import axios from 'axios'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
;

const url ='http://localhost:8080'
// let userInfo ={}



const singUp =async() =>{
  const userData = {
    name:"준기test",
  password:"1234",
  email:"qmqqqqm@gmail.com",
  birthDate:"940818",
  phoneNumber:"01014686004"
  }
  const response = await axios.post(`${url}/v1/user`,{...userData}
  //   , {
    //     params: {
      //         ID: 12345
      //     }
      // }
      ).then((Response)=>{console.log(Response.data)})
      .catch((Error)=>{console.log(Error)});
    }
    
    const Main = () => {

    let email= ""
    const onEmailHandler = (event:any) =>{
      email = event.currentTarget.value
    }

    let name= ""
    const onNameHandler = (event:any) =>{
      name = event.currentTarget.value
    }

  let birth =""
  const onBirthHandler = (event:any) =>{
    birth = event.currentTarget.value
  }

  let password =""
  const onPasswordHandler = (event:any) =>{
    password = event.currentTarget.value
  }

  let phone =""
  const onPhoneHandler = (event:any) =>{
    phone = event.currentTarget.value
  }

  let sex =""
  const onSexHandler = (event:any) =>{
    sex = event.currentTarget.value
  }

  // userInfo ={
  // name:name,
  // password:password,
  // email:email,
  // birthDate:birth,
  // phoneNumber:phone,
  // sex:sex
  // }

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
