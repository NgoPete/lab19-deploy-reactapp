// app này để xử lý các hành động hiển thị thông tin khi click vào các movie items
import React from "react";
import styled from "styled-components";
import { setMovieDetail } from "../Store/actions";
import { useDispatch } from "react-redux";
import moment from "moment";

// component này tạo modal chứa thông tin phim
// và xử lý hiển thị modal mỗi khi user click vào một phim

function MoviesDetail(props) {
  const { movie, showModal } = props;
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setMovieDetail(null));
  };
  //hàm xử lý sự kiện đóng modal phim
  return (
    <MovieModal onClick={handleCloseModal}>
      <div
        className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
        onClick={handleCloseModal}
        // thêm sự kiện đóng modal thông tin phim
      >
        <div
          className={`modal ${showModal ? "showModal" : "hideModal"}`}
          style={
            movie
              ? {
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                    movie.backdrop_path || movie.poster_path
                  }`,
                  backgroundSize: "cover",
                }
              : {}
          }
        ></div>
        <div className="container">
          <div className="movieInfo">
            <h1 className="movieTitle">
              {movie && (movie.title || movie.name)}
            </h1>
            <p className="release">
              Release Day:{" "}
              {movie && moment(movie.release_date).format("DD/MM/YYYY")}
            </p>
            <p className="vote">Vote: {movie && movie.vote_average}/10</p>
            <p className="overview">{movie && movie.overview}</p>
          </div>
        </div>
      </div>
    </MovieModal>
  );
}

export default MoviesDetail;

const MovieModal = styled.div`
  .backdrop {
    position: fixed;
    top: 40%;
    left: 0;
    width: 100%;
    height: 60%;
    z-index: 150;
    background-color: black;
  }

  .showBackdrop {
    display: block;
  }

  .hideBackdrop {
    display: none;
  }

  .modal {
    width: 650px;
    height: 350px;
    position: absolute;
    top: 15px;
    right: 10px;
    z-index: 300;
    margin: 0 auto;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    @media screen and (max-width: 1184px) {
      height: 70%;
    }
    @media screen and (max-width: 600px) {
      height: 80%;
    }
  }
  .container {
    position: relative;
    width: 70%;
    height: 100%;
    z-index: 1000;

    @media screen and (max-width: 980px) {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 50%, transparent);
      width: 100%;
    }
    @media screen and (max-width: 600px) {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.88) 60%, transparent);
    }

    .movieInfo {
      width: 65%;
      height: 100%;
      padding-left: 24px;
      color: white;
      font-size: 20px;
      padding-top: 30px;
      z-index: 300;

      @media screen and (max-width: 600px;) {
        font-size: 16px;
        width: 80%;
      }

      .movieTitle {
        margin-top: 20px;
        border-bottom: 2px solid white;
        padding-bottom: 20px;
        width: 110%;
      }
      .release {
        margin-top: 20px;
        color: white;
      }
      .Vote {
        color: white;
      }
      .overview {
        margin-top: 20px;
        font-size: 16px;
      }
    }
  }
`;
