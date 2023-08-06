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
      <Header className="white"></Header>
      <main className="mainCont">
        <div className="HeroBanner">
          <div className="layout">
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
              <button
                className="ticketing primaryBtn"
                data-back="빠른예매"
                data-front="예매하기"
              ></button>
            </div>
          </div>
        </div>

        <div className="movieSection">
          <div className="layout">
            <h2 className="title">
              박스 오피스<span>08.15 18:30 기준</span>
            </h2>
            <div className="movieSlide">
              <div className="movieList">
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
                <div className="movie"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="eventSection">
          <div className="layout">
            <h2 className="title">
              혜택<span>08.15 18:30 기준</span>
            </h2>
            <div className="eventCont">
              <div className="eventInfo">
                <div className="eventTitle"></div>
                <div className="eventDate"></div>
              </div>
              <div className="eventList">
                <div className="eventScreen"></div>
                <div className="eventNav"></div>
              </div>
            </div>
          </div>
          <div className="eventBg"></div>
        </div>

        <div className="curationSection">
          <div className="layout">
            <h2 className="title">
              큐레이션<span>08.15 18:30 기준</span>
            </h2>
            <div className="curationCont">
              <div className="curationInfo">
                <div className="curationTitle"></div>
                <div className="curationDate"></div>
              </div>
              <div className="curationtSlide">
                <div className="curationtList">
                  <div className="curationCard"></div>
                  <div className="curationCard"></div>
                  <div className="curationCard"></div>
                  <div className="curationCard"></div>
                  <div className="curationCard"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="guideSection">
          <div className="layout">
            <h2 className="title">안내</h2>
            <div className="guideList">
              <div className="guideCard"></div>
              <div className="guideCard"></div>
              <div className="guideCard"></div>
              <div className="guideCard"></div>
              <div className="guideCard"></div>
              <div className="guideCard"></div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default Main;
