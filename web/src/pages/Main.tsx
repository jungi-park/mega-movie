import React from "react";
import { RootState } from "../modules/rootReducer";
import { useSelector } from "react-redux";
import "./Main.scss";
import axios from "axios";

const MovieComponent: React.FC<{
  name: string;
  genre: string;
  img: string;
  rank: number;
  rate: string;
  star: string;
}> = ({ name, genre, img, rank, rate, star }) => (
  <div className="movie">
    <img
      className="posterImg"
      src={process.env.PUBLIC_URL + `/images/img_poster_${img}.jpg`}
      alt=""
    />
    <div className="movieCont">
      <div className="movieRank">
        <h4>{rank}</h4>
      </div>
      <div className="movieName">
        <h5>{name}</h5>
      </div>
      <div className="movueDescription">
        <p className="moviePer">
          <span className="movieGenre">{genre}</span>예매율 :{" "}
          <span>{rate}</span>
        </p>
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
    <div className="movieInfo">
      <h6 className="veiwDetail">상세보기</h6>
      <h6 className="reserveTicket">예약하기</h6>
    </div>
  </div>
);

const MovieList: React.FC = () => {
  const movies = [
    {
      name: "잠",
      genre: "미스터리",
      img: "sleep",
      rank: 1,
      rate: "27.7%",
      star: "9.9",
    },
    {
      name: "1947 보스톤",
      genre: "드라마",
      img: "boston",
      rank: 2,
      rate: "16.8%",
      star: "8.7",
    },
    {
      name: "천박사 퇴마 연구소: 설경의 비밀",
      genre: "기타",
      img: "exorcism",
      rank: 3,
      rate: "5.9%",
      star: "8.9",
    },
    {
      name: "거미집",
      genre: "코미디, 드라마",
      img: "spider",
      rank: 4,
      rate: "4.9%",
      star: "8.9",
    },
    {
      name: "잠",
      genre: "미스터리",
      img: "sleep",
      rank: 5,
      rate: "27.7%",
      star: "9.9",
    },
    {
      name: "1947 보스톤",
      genre: "드라마",
      img: "boston",
      rank: 6,
      rate: "16.8%",
      star: "8.7",
    },
    {
      name: "천박사 퇴마 연구소: 설경의 비밀",
      genre: "기타",
      img: "exorcism",
      rank: 7,
      rate: "5.9%",
      star: "8.9",
    },
    {
      name: "거미집",
      genre: "코미디, 드라마",
      img: "spider",
      rank: 8,
      rate: "4.9%",
      star: "8.9",
    },
  ];

  return (
    <div className="movieList">
      {movies.map((movie) => (
        <MovieComponent
          name={movie.name}
          genre={movie.genre}
          img={movie.img}
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
      <main className="mainCont">
        <div className="mainSection">
          <div className="heroBanner">
            <div className="bannerBg">
              <img
                src={process.env.PUBLIC_URL + "/images/img_main_1.jpg"}
                alt=""
              />
            </div>
            <div className="banner-prev"></div>
            <div className="banner-next"></div>
            <div className="bannerCont">
              <div className="layout">
                <div className="bannerList">
                  <div className="banner">
                    <div className="title">
                      <h5 className="titleName">잠</h5>
                      <h6 className="titleDescription">“누가 들어왔어”</h6>
                    </div>
                  </div>
                  <div className="banner">
                    <div className="title">
                      <h5 className="titleName">오펜하이머</h5>
                      <h6 className="titleDescription">
                        “나는 이제 죽음이요, 세상의 파괴자가 되었다.”
                      </h6>
                    </div>
                  </div>
                  <div className="banner">
                    <div className="title">
                      <h5 className="titleName">달짝지근해: 7510</h5>
                      <h6 className="titleDescription">
                        OMG 세상에 이런 맛이! 올여름, 달짝지근해진 그가 온다!
                      </h6>
                    </div>
                  </div>
                  <div className="banner">
                    <div className="title">
                      <h5 className="titleName">
                        천박사 퇴마 연구소: 설경의 비밀
                      </h5>
                      <h6 className="titleDescription">
                        귀신을 믿지 않는 가짜 퇴마사! 그의 세계를 흔드는 진짜
                        사건이 나타났다!
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="quickMenu">
              <li className="quickButton">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon_ticket.svg"}
                  alt=""
                />
                <p>빠른예매</p>
              </li>
              <li className="quickButton">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon_ticket.svg"}
                  alt=""
                />
                <p>멤버십</p>
              </li>
              <li className="quickButton">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon_ticket.svg"}
                  alt=""
                />
                <p>VIP</p>
              </li>
              <li className="quickButton">
                <img
                  src={process.env.PUBLIC_URL + "/images/icon_ticket.svg"}
                  alt=""
                />
                <p>고객센터</p>
              </li>
            </ul>
          </div>

          <div className="movieSection">
            <div className="layout">
              <MovieList></MovieList>
              <h6 className="viewAll">+ 영화 전체보기</h6>
            </div>
          </div>
        </div>

        <div className="eventSection">
          <div className="layout">
            <div className="title">
              <h4 className="titleName">MEGA 이벤트</h4>
            </div>
            <div className="eventCont">
              <div className="eventList">
                <div className="eventScreen">
                  <div className="event">
                    <img
                      src={process.env.PUBLIC_URL + "/images/img_event_1.png"}
                      alt=""
                    />
                  </div>
                  <div className="event">
                    <img
                      src={process.env.PUBLIC_URL + "/images/img_event_2.jpg"}
                      alt=""
                    />
                  </div>
                </div>
                <div className="eventNav">
                  <div className="event">
                    <img
                      src={process.env.PUBLIC_URL + "/images/img_event_3.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="event">
                    <img
                      src={process.env.PUBLIC_URL + "/images/img_event_3.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="event">
                    <img
                      src={process.env.PUBLIC_URL + "/images/img_event_3.jpg"}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <h6 className="viewAll">+ 이벤트 전체보기</h6>
            </div>
          </div>
          <div className="eventBg"></div>
        </div>

        {/* <div className="curationSection">
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
        </div> */}

        <div className="guideSection">
          <h4 className="title">MEGA 특별관</h4>
          <div className="guideCont">
            <div className="guideList">
              <div className="guideCard"></div>
              <div className="guideCard"></div>
              <div className="guideCard"></div>
              <div className="guideCard"></div>
              <div className="guideCard"></div>
              <div className="guideCard"></div>{" "}
              <div className="guideCard"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
