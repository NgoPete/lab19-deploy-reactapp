import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useViewPort } from "../../../components/hooks/useViewPort";
import { useSelector } from "react-redux/es/exports";
import {
  getSearchMovies,
  setMovieDetail,
} from "../../../components/Store/actions/index";
import { useLocation } from "react-router";

// component này hiển thị các movie tương ứng với keywords do user input

const useQuery = () => new URLSearchParams(useLocation().search);

function ResultList(props) {
  const [windowWidth] = useViewPort();
  const dispatch = useDispatch();
  const { SearchMovies } = useSelector((state) => state.infoMovies);
  const keywords = useQuery().get("keywords");

  useEffect(() => {
    if (keywords) dispatch(getSearchMovies(keywords));
  }, [keywords, dispatch]);

  return (
    <Searchpane>
      <h2 className="text-search">Search Result</h2>
      {SearchMovies && SearchMovies.length > 0 ? (
        <div
          className="search-content"
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200 ? 9 : windowWidth > 992 ? 6 : 4
            },auto)`,
          }}
        >
          {SearchMovies.map((movie, index) => {
            if (movie.poster_path !== null && movie.media_type !== "person") {
              const imageURL = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
              return (
                <div
                  onClick={() => dispatch(setMovieDetail(movie))}
                  className="movieItem"
                  key={index}
                >
                  <img alt="" src={imageURL} className="back_drop"></img>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <Notfound>
          <h1>Your keyword did not match any movie.</h1>
        </Notfound>
      )}
    </Searchpane>
  );
}

export default ResultList;

const Searchpane = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-left: 20px;

  &:hover .movieItem {
    opacity: 0.1;
  }

  .text-search {
    color: white;
  }

  .search-content {
    display: grid;
    gap: 8px;
    width: 100%;
    height: 150%;
  }

  .movieItem {
    position: relative;
    max-width: 130px;
    width: 100%;
    height: 200px;
    margin: 20px 0;
    overflow: hidden;
    transform: scale(1);
    transition: all 0.3s linear;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      z-index: 10;
      opacity: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const Notfound = styled.div`
  color: white;
  text-align: center;
`;
