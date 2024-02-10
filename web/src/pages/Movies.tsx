import React from "react";
import Navigation from "../components/Navigation";
import "./Movies.scss";

const Movies = () => {
  return (
    <main>
      <Navigation></Navigation>
      <div className="greeting">
        <div className="main-title">
          <div className="main">
            <span>추</span>
            <span>천</span>
            <span>영</span>
            <span>화</span>
          </div>
          <div className="sub">
            <span>실시간 박스오피스</span>
          </div>
        </div>
      </div>
      <div className="movies-con">
        <div className="layout">
          <div className="list-filter">
            <ul className="list">
              <li className="selected">
                <span>All</span>
              </li>
              <li>
                <span>박스오피스</span>
              </li>
              <li>
                <span>상영예정작</span>
              </li>
              <li>
                <span>필름소사이어티</span>
              </li>
              <li>
                <span>클래식소사이어티</span>
              </li>
            </ul>
            <div className="search"></div>
          </div>
          <div className="search-filter">
            <ul className="list">
              <li>
                <span>All</span>
              </li>
              <li>
                <span>12세 이용가</span>
              </li>
              <li>
                <span>15세 이용가</span>
              </li>
              <li>
                <span>청소년 관람불가</span>
              </li>
            </ul>{" "}
            <span>131개의 영화가 검색되었습니다.</span>
          </div>
          <div className="movies-list">
            <div className="movie-card">
              <div className="poster">
                <img
                  src={process.env.PUBLIC_URL + `/images/img_poster_boston.jpg`}
                  alt=""
                />
              </div>

              <div className="con">
                <div className="rank">
                  <h3>1</h3>
                </div>
                <div className="name">
                  <span>이름</span>
                </div>
                <div className="des">
                  <div className="genre">
                    <span>장르</span>
                  </div>
                  <div className="star">
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_star.svg"}
                      alt=""
                    />
                    <span>1.0</span>
                  </div>
                </div>
              </div>
              {/* <div className="movieInfo">
      <h6 className="veiwDetail">상세보기</h6>
      <h6 className="reserveTicket">예약하기</h6>
    </div> */}
            </div>
            <div className="movie-card">
              <div className="poster">
                <img
                  src={process.env.PUBLIC_URL + `/images/img_poster_boston.jpg`}
                  alt=""
                />
              </div>

              <div className="con">
                <div className="rank">
                  <h3>1</h3>
                </div>
                <div className="name">
                  <span>이름</span>
                </div>
                <div className="des">
                  <div className="genre">
                    <span>장르</span>
                  </div>
                  <div className="star">
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_star.svg"}
                      alt=""
                    />
                    <span>1.0</span>
                  </div>
                </div>
              </div>
              {/* <div className="movieInfo">
      <h6 className="veiwDetail">상세보기</h6>
      <h6 className="reserveTicket">예약하기</h6>
    </div> */}
            </div>
            <div className="movie-card">
              <div className="poster">
                <img
                  src={process.env.PUBLIC_URL + `/images/img_poster_boston.jpg`}
                  alt=""
                />
              </div>

              <div className="con">
                <div className="rank">
                  <h3>1</h3>
                </div>
                <div className="name">
                  <span>이름</span>
                </div>
                <div className="des">
                  <div className="genre">
                    <span>장르</span>
                  </div>
                  <div className="star">
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_star.svg"}
                      alt=""
                    />
                    <span>1.0</span>
                  </div>
                </div>
              </div>
              {/* <div className="movieInfo">
      <h6 className="veiwDetail">상세보기</h6>
      <h6 className="reserveTicket">예약하기</h6>
    </div> */}
            </div>
            <div className="movie-card">
              <div className="poster">
                <img
                  src={process.env.PUBLIC_URL + `/images/img_poster_sleep.jpg`}
                  alt=""
                />
              </div>

              <div className="con">
                <div className="rank">
                  <h3>1</h3>
                </div>
                <div className="name">
                  <span>이름</span>
                </div>
                <div className="des">
                  <div className="genre">
                    <span>장르</span>
                  </div>
                  <div className="star">
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_star.svg"}
                      alt=""
                    />
                    <span>1.0</span>
                  </div>
                </div>
              </div>
              {/* <div className="movieInfo">
      <h6 className="veiwDetail">상세보기</h6>
      <h6 className="reserveTicket">예약하기</h6>
    </div> */}
            </div>
            <div className="movie-card">
              <div className="poster">
                <img
                  src={process.env.PUBLIC_URL + `/images/img_poster_sleep.jpg`}
                  alt=""
                />
              </div>

              <div className="con">
                <div className="rank">
                  <h3>1</h3>
                </div>
                <div className="name">
                  <span>이름</span>
                </div>
                <div className="des">
                  <div className="genre">
                    <span>장르</span>
                  </div>
                  <div className="star">
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_star.svg"}
                      alt=""
                    />
                    <span>1.0</span>
                  </div>
                </div>
              </div>
              {/* <div className="movieInfo">
      <h6 className="veiwDetail">상세보기</h6>
      <h6 className="reserveTicket">예약하기</h6>
    </div> */}
            </div>
            <div className="movie-card">
              <div className="poster">
                <img
                  src={process.env.PUBLIC_URL + `/images/img_poster_sleep.jpg`}
                  alt=""
                />
              </div>

              <div className="con">
                <div className="rank">
                  <h3>1</h3>
                </div>
                <div className="name">
                  <span>이름</span>
                </div>
                <div className="des">
                  <div className="genre">
                    <span>장르</span>
                  </div>
                  <div className="star">
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_star.svg"}
                      alt=""
                    />
                    <span>1.0</span>
                  </div>
                </div>
              </div>
              {/* <div className="movieInfo">
      <h6 className="veiwDetail">상세보기</h6>
      <h6 className="reserveTicket">예약하기</h6>
    </div> */}
            </div>
            <div className="movie-card">
              <div className="poster">
                <img
                  src={process.env.PUBLIC_URL + `/images/img_poster_sleep.jpg`}
                  alt=""
                />
              </div>

              <div className="con">
                <div className="rank">
                  <h3>1</h3>
                </div>
                <div className="name">
                  <span>이름</span>
                </div>
                <div className="des">
                  <div className="genre">
                    <span>장르</span>
                  </div>
                  <div className="star">
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_star.svg"}
                      alt=""
                    />
                    <span>1.0</span>
                  </div>
                </div>
              </div>
              {/* <div className="movieInfo">
      <h6 className="veiwDetail">상세보기</h6>
      <h6 className="reserveTicket">예약하기</h6>
    </div> */}
            </div>
            <div className="movie-card">
              <div className="poster">
                <img
                  src={process.env.PUBLIC_URL + `/images/img_poster_sleep.jpg`}
                  alt=""
                />
              </div>

              <div className="con">
                <div className="rank">
                  <h3>1</h3>
                </div>
                <div className="name">
                  <span>이름</span>
                </div>
                <div className="des">
                  <div className="genre">
                    <span>장르</span>
                  </div>
                  <div className="star">
                    <img
                      src={process.env.PUBLIC_URL + "/images/icon_star.svg"}
                      alt=""
                    />
                    <span>1.0</span>
                  </div>
                </div>
              </div>
              {/* <div className="movieInfo">
      <h6 className="veiwDetail">상세보기</h6>
      <h6 className="reserveTicket">예약하기</h6>
    </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Movies;
