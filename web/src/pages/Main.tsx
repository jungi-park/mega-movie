import './Main.css';
import axios from 'axios'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
;

const url ='http://localhost:8080'




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

  
  return (
    <div id="form">
      <input placeholder="이름" type="text"></input>
      <input placeholder="생일" type="text"></input>
      <input placeholder="이메일" type="text" value={email} onChange={onEmailHandler}></input>
      <input placeholder="비밀번호" type="text"></input>
      <input placeholder="핸드폰번호" type="text"></input>
      <input placeholder="성별" type="text"></input>
      <button onClick={singUp}>회원가입</button>
    </div>
  );
};

export default Main;
