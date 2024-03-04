import React from "react";
import { RootState } from "../modules/rootReducer";
import { useSelector } from "react-redux";
import axios from "axios";

//movies
import { movies } from "../assets/moviesData";
//style
import "../assets/scss/section/main.scss";

interface MovieProps {
  name: string;
  genre: string;
  poster: string;
  rank: number;
  ratio: string;
  rating: string;
  catchphrase: string;
  content: string;
}

const BoxOfficeComponent: React.FC<MovieProps> = ({
  name,
  genre,
  poster,
  rank,
  ratio,
  rating,
}) => (
  <div className="movie-card">
    <div className="area-img">
      <img src={`/images/img_poster_${poster}.jpg`} alt="" />
    </div>
    <div className="area-text">
      <div className="rank">
        <h3>{rank}</h3>
      </div>
      <div className="name">
        <span>{name}</span>
      </div>
      <div className="description">
        <div className="genre">
          <span>{genre}</span>
        </div>
        <div className="star">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.99991 14.3915L15.1498 17.4999L13.7832 11.6416L18.3331 7.69995L12.3416 7.19162L9.99991 1.66666L7.65826 7.19162L1.66663 7.69995L6.2166 11.6416L4.84994 17.4999L9.99991 14.3915Z" />
          </svg>
          <span>{rating}</span>
        </div>
      </div>
    </div>
    <div className="hover">
      <div className="veiw-detail">
        <span className="font-big">상세보기</span>
      </div>
      <div className="reserve">
        <span className="font-big">예약하기</span>
      </div>
    </div>
  </div>
);

const BoxOffice: React.FC = () => {
  const limitedMovies = movies.slice(0, 8);

  return (
    <div className="movie-list">
      {limitedMovies.map((movie, index) => (
        <BoxOfficeComponent key={index} {...movie} />
      ))}
    </div>
  );
};

const RecommendMovie: React.FC = () => {
  const recommendedMovie = movies.length > 0 ? movies[0] : null;

  return (
    <div className="content">
      {recommendedMovie && <RecommendComponent movie={recommendedMovie} />}
    </div>
  );
};

const RecommendComponent: React.FC<{ movie: MovieProps }> = ({ movie }) => (
  <>
    <div className="area-img">
      <img src={`/images/img_poster_${movie.poster}.jpg`} alt="" />
    </div>
    <div className="area-text">
      <div className="name">
        <h3>{movie.name}</h3>
      </div>
      <div className="description">
        <span className="font-big">{movie.catchphrase}</span>
        <p>{movie.content}</p>
      </div>
      <div className="review">
        <div className="user">
          <span className="ico_person"></span>
          <p>aaaa****</p>
        </div>
        <div className="wrap">
          <div className="text">
            <p>관람평</p>
          </div>
          <div className="point">
            <span className="font-accent">10</span>
          </div>
          <div className="point detail">
            <p>
              연출 외<br />
              +3
            </p>
          </div>
          <div className="comment">
            <p>너무 재밌어요!!!!</p>
          </div>
        </div>
      </div>
      <div className="review">
        <div className="user">
          <span className="ico_person"></span>
          <p>aaaa****</p>
        </div>
        <div className="wrap">
          <div className="text">
            <p>관람평</p>
          </div>
          <div className="point">
            <span className="font-accent">10</span>
          </div>
          <div className="point detail">
            <p>
              연출 외<br />
              +3
            </p>
          </div>
          <div className="comment">
            <p>너무 재밌어요!!!!</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

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
      <main>
        <div className="wrapper main">
          <div className="hero-banner">
            <div className="bg">
              <img
                src={process.env.PUBLIC_URL + "/images/img_main_1.jpg"}
                alt=""
              />
            </div>
            <div className="prev-btn">
              <span className="arr-left"></span>
            </div>
            <div className="next-btn">
              <span className="arr-right"></span>
            </div>
            <div className="list-banner">
              <div className="layout">
                <ul className="content">
                  <li>
                    <div className="area-text">
                      <div className="name">
                        <span className="font-accent">오펜하이머</span>
                      </div>
                      <div className="description">
                        <span className="font-body">
                          “나는 이제 죽음이요, 세상의 파괴자가 되었다.”
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="area-text">
                      <div className="name">
                        <span className="font-big">오펜하이머</span>
                      </div>
                      <div className="description">
                        <span className="font-body">
                          “나는 이제 죽음이요, 세상의 파괴자가 되었다.”
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="area-text">
                      <div className="name">
                        <span className="font-big">오펜하이머</span>
                      </div>
                      <div className="description">
                        <span className="font-body">
                          “나는 이제 죽음이요, 세상의 파괴자가 되었다.”
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="area-text">
                      <div className="name">
                        <span className="font-big">오펜하이머</span>
                      </div>
                      <div className="description">
                        <span className="font-body">
                          “나는 이제 죽음이요, 세상의 파괴자가 되었다.”
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="nav-skip">
              <li>
                <div className="img-area">
                  <span className="ico-ticket"></span>
                </div>
                <div className="text-area">
                  <span className="font-link">빠른예매</span>
                </div>
              </li>
              <li>
                <div className="img-area">
                  <span className="ico-ticket"></span>
                </div>
                <div className="text-area">
                  <span className="font-link">빠른예매</span>
                </div>
              </li>
              <li>
                <div className="img-area">
                  <span className="ico-ticket"></span>
                </div>
                <div className="text-area">
                  <span className="font-link">빠른예매</span>
                </div>
              </li>
              <li>
                <div className="img-area">
                  <span className="ico-ticket"></span>
                </div>
                <div className="text-area">
                  <span className="font-link">빠른예매</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="container boxoffice-cont">
            <div className="layout">
              <div className="title-main">
                <div className="main">
                  <span>T</span>
                  <span>O</span>
                  <span>P</span>
                  <span>8</span>
                </div>
                <div className="sub">
                  <span>실시간 박스오피스</span>
                </div>
              </div>
              <BoxOffice></BoxOffice>
            </div>
          </div>
          <div className="container recommend-movie-cont">
            <div className="layout">
              <div className="title-main">
                <div className="main">
                  <span>추</span>
                  <span>천</span>
                  <span>영</span>
                  <span>화</span>
                </div>
                <div className="sub">
                  <span>내 취향저격 영화</span>
                </div>
              </div>
              <RecommendMovie></RecommendMovie>
            </div>
          </div>
          <div className="container event-cont">
            <div className="title-main">
              <div className="main">
                <span>이</span>
                <span>벤</span>
                <span>트</span>
              </div>
              <div className="sub">
                <span>참여하자</span>
              </div>
            </div>

            <div className="content">
              <ul className="list-event">
                <li></li> <li></li> <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
