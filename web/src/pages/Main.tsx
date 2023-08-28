import React from "react";
import { RootState } from "../modules/rootReducer";
import { useSelector } from "react-redux";
import "./Main.scss";
import axios from "axios";
import Header from "../components/Header";

const MovieComponent: React.FC<{
  name: string;
  rank: number;
  rate: string;
  star: string;
}> = ({ name, rank, rate, star }) => (
  <div className="movie">
    <img
      className="posterImg"
      src={process.env.PUBLIC_URL + `/img_poster_${name}.jpg`}
      alt=""
    />
    <div className="movieCont">
      <div className="movieRank">
        <h3>{rank}</h3>
      </div>
      <div className="moviePer">
        <h6>
          <span>예매율 : </span>
          {rate}
        </h6>
      </div>
      <div className="movieStar">
        <img
          className="posterImg"
          src={process.env.PUBLIC_URL + "/images/icon_star.svg"}
          alt=""
        />
        <p>{star}</p>
      </div>
    </div>
  </div>
);

const MovieList: React.FC = () => {
  const movies = [
    { name: "1", rank: 1, rate: "99.9%", star: "9.9" },
    { name: "1", rank: 2, rate: "98.5%", star: "8.7" },
    { name: "1", rank: 3, rate: "96.2%", star: "7.8" },
    { name: "1", rank: 4, rate: "99.9%", star: "9.9" },
    { name: "1", rank: 5, rate: "98.5%", star: "8.7" },
    { name: "1", rank: 6, rate: "96.2%", star: "7.8" },
    { name: "1", rank: 7, rate: "99.9%", star: "9.9" },
    { name: "1", rank: 8, rate: "98.5%", star: "8.7" },
    { name: "1", rank: 9, rate: "96.2%", star: "7.8" },
  ];

  return (
    <div className="movieList">
      {movies.map((movie) => (
        <MovieComponent
          name={movie.name}
          rank={movie.rank}
          rate={movie.rate}
          star={movie.star}
        />
      ))}
    </div>
  );
};

// scroll 744px이상 header 숨김
// const header = document.querySelector('.sticky-header');
// let lastScroll = 0;

// window.addEventListener('scroll', () => {
//   const currentScroll = window.scrollY;
//   const windowHeight = window.innerHeight;

//   if (windowHeight <= 744) {
//     if (currentScroll > lastScroll) {
//       header.classList.add('hidden');
//     } else {
//       header.classList.remove('hidden');
//     }
//   } else {
//     header.classList.remove('hidden');
//   }

//   lastScroll = currentScroll;
// });

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
      <Header className="dark"></Header>
      <main className="mainCont">
        <div className="mainSection">
          <div className="HeroBanner">
            <div className="layout">
              <div className="bannerBg">
                <img src={process.env.PUBLIC_URL + "/img_main_1.png"} alt="" />
              </div>
              <div className="bannerCont">
                <div className="title">
                  <img
                    className="titleLogo"
                    src={process.env.PUBLIC_URL + "/logo_main_1.png"}
                    alt=""
                  />
                  <h1 className="titleKor">더 퍼스트 슬램덩크</h1>
                  <h6 className="titleEng">The First Slam Dunk</h6>
                </div>
                <button className="ticketing primaryBtn default">
                  예매하기
                </button>
              </div>
            </div>
          </div>
          <div className="movieSection">
            <div className="layout">
              <h5 className="title">
                박스 오피스<span>08.15 18:30 기준</span>
              </h5>
              <div className="movieSlide">
                <MovieList></MovieList>
              </div>
            </div>
          </div>
        </div>

        <div className="eventSection">
          <div className="layout">
            <h5 className="title">혜택</h5>
            <div className="eventCont">
              <div className="eventInfo">
                <div className="eventTitle">
                  <h3>메가박스 오리지널 티켓</h3>
                  <h2> No.87 오펜하이머</h2>
                </div>
                <div className="eventsSub">
                  <h5>
                    메가박스가 제안하는 오펜하이머를
                    <br />
                    가장 잘 간직하는 방법
                  </h5>
                  <p className="eventDate">2002.01.01</p>
                </div>
              </div>
              <div className="eventList">
                <div className="eventScreen"></div>
                <div className="eventNav">
                  <div className="event"></div>
                  <div className="event"></div>
                  <div className="event"></div>
                  <div className="event"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="eventBg"></div>
        </div>

        <div className="curationSection">
          <div className="layout">
            <h5 className="title">큐레이션</h5>
            <div className="curationCont">
              <div className="curationInfo">
                <div className="curationTitle">
                  <h3>
                    관심있는
                    <br />
                    큐레이션을 확인하세요.
                  </h3>
                </div>
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
            <h5 className="title">특별관</h5>
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
