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
      <main className="mainContainer">
        <section className="HeroBanner">
          <div className="bannerBg">
            <img src={process.env.PUBLIC_URL + "/img_main_1.png"} alt="" />
            <div className="bannerGrad"></div>
          </div>
          <div className="bannerCont">
            <div className="title">
              <img
                className="titleLogo"
                src={process.env.PUBLIC_URL + "/logo_main_1.png"}
                alt=""
              />
              <h1 className="titleKor">더 퍼스트 슬램덩크</h1>
              <h2 className="titleEng">The First Slam Dunk</h2>
            </div>
            <button className="ticketing">예매하기</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
