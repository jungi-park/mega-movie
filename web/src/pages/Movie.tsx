import React from "react";
import Navigation from "../components/Navigation";

//movies
import { movies } from "../assets/moviesData";
//style
import "../assets/scss/section/movie.scss";

const MovieList: React.FC = () => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieComponent
          name={movie.name}
          genre={movie.genre}
          poster={movie.poster}
          rank={movie.rank}
          ratio={movie.ratio}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

const MovieComponent: React.FC<{
  name: string;
  genre: string;
  poster: string;
  rank: number;
  ratio: string;
  rating: string;
}> = ({ name, genre, poster, rank, ratio, rating }) => (
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

const Movie = () => {
  return (
    <div className="wrapper movie">
      <Navigation></Navigation>
      <div className="greeting">
        <div className="title-main">
          <div className="main">
            <span>전</span>
            <span>체</span>
            <span>영</span>
            <span>화</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="layout">
          <div className="list-filter">
            <ul className="list">
              <li className="selected">
                <span className="font-big">All</span>
              </li>
              <li>
                <span className="font-big">박스오피스</span>
              </li>
              <li>
                <span className="font-big">상영예정작</span>
              </li>
              <li>
                <span className="font-big">필름소사이어티</span>
              </li>
              <li>
                <span className="font-big">클래식소사이어티</span>
              </li>
            </ul>
          </div>
          <div className="list-search">
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
            </ul>
            <span>131개의 영화가 검색되었습니다.</span>
          </div>
          <MovieList></MovieList>
        </div>
      </div>
    </div>
  );
};

export default Movie;
