import React from "react";
import { RootState } from "../modules/rootReducer";
import { useSelector } from "react-redux";
import "./Main.scss";
import axios from "axios";
import Header from "../components/Header";

function Main() {
  // const url ='http://localhost:8080'
  // const sendTestAdmin = async() =>{
  //     const response = await axios.get(`${url}/v1/admin`,{ withCredentials: true }
  //     ).then((Response)=>{
  //         console.log("Response",Response)
  //     })
  //     .catch((Error)=>{console.log(Error)});
  //   }

  // function Main(){
  //     const user = useSelector((state: RootState) => state.userReducer);
  //     const url ='http://localhost:8080'
  //     const sendTestAdmin = async() =>{
  //         const response = await axios.get(`${url}/v1/admin`,{ withCredentials: true }
  //         ).then((Response)=>{
  //             console.log("Response",Response)
  //         })
  //         .catch((Error)=>{console.log(Error)});
  //       }

  //       return(<>
  //       <Header></Header>
  //       <button onClick={()=>{
  //         console.log("user",user)
  //       }}>유저 정보</button>
  //       <button onClick={sendTestAdmin}>testAdmin</button>
  //       </>)
  return (
    <>
      <Header></Header>
    </>
  );
}

export default Main;
