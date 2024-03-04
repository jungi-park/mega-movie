import React from "react";
import Navigation from "../components/Navigation";

//movies
import { movies } from "../assets/moviesData";
//style
import "../assets/scss/section/movieinfo.scss";

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

const MovieInfoComponent: React.FC = () => {
  // movies 배열의 길이가 1 이상인 경우에만 첫 번째 영화를 선택
  const selectedMovie = movies.length > 0 ? movies[0] : null;

  return (
    <div className="greeting">
      {selectedMovie && <MovieInfoContent movie={selectedMovie} />}
    </div>
  );
};

const MovieInfoContent: React.FC<{ movie: MovieProps }> = ({ movie }) => (
  <div className="layout">
    <div className="area-img">
      <img src={`/images/img_poster_${movie.poster}.jpg`} alt="" />
    </div>
    <div className="area-text">
      <div className="name">
        <h3>윙카</h3>
      </div>
      <div className="description">
        <span className="font-big">세상에서 가장 달콤한 여정</span>
        <p>
          좋은 일은 모두 꿈에서부터 시작된다!
          <br /> 마법사이자 초콜릿 메이커 ‘윌리 웡카’의 꿈은디저트의 성지, ‘달콤
          백화점’에 자신만의 초콜릿 가게를 여는 것.
        </p>
      </div>
      <div className="info">
        <div className="score">
          <p className="tit">실관람 평점</p>
          <div className="number gt" id="mainMegaScore">
            <p title="실관람 평점" className="before">
              <em>9</em>
              <span className="ir">점</span>
            </p>
          </div>
        </div>

        <div className="rate">
          <p className="tit">예매율</p>

          <p className="cont">
            <em>1</em>위 (36.9%)
          </p>
        </div>

        <div className="audience ">
          <div className="tit ">
            <span className="m-tooltip-wrap ">누적관객수</span>
          </div>
          <p className="cont">
            <em>6,033,190</em> 명
          </p>
        </div>
      </div>
    </div>
  </div>
);

const MovieInfo = () => {
  return (
    <div className="wrapper movieinfo">
      <Navigation></Navigation>
      <div className="greeting">
        <MovieInfoComponent></MovieInfoComponent>
      </div>
      <div className="container">
        <div className="layout">
          <div className="list-filter">
            <ul className="list">
              <li className="selected">
                <span className="font-big">상세정보</span>
              </li>
              <li>
                <span className="font-big">영화평(100)</span>
              </li>
            </ul>
          </div>
          <div className="content">
            <p>
              영화정보 장르액션 / 미국 감독드니 빌뇌브 출연 티모시 샬라메,
              젠데이아, 레베카 퍼거슨, 조슈 브롤린, 오스틴 버틀러, 플로렌스 퓨,
              데이브 바티스타
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
