import React from "react";
import SearchForm from "./components/SearchForm";
import styled from "styled-components";
import NavBar from "../../components/Navbar/Navbar";
import ResultList from "./components/ResultList";
import MoviesDetail from "../../components/MovieDetail/MovieDetail.js";
import { useSelector } from "react-redux/es/exports";

// component này chứa các phần tử tạo nên giao diện của trang search

const Search = (props) => {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  return (
    <HomePage>
      <NavBar />
      <div className="modal">
        <SearchForm />

        <ResultList />
        <MoviesDetail
          showModal={MovieDetail ? true : false}
          movie={MovieDetail}
        />
      </div>
    </HomePage>
  );
};

export default Search;

const HomePage = styled.div`
  width: 100%;
  height: 200vh;
  background: black;

  .modal {
    position: absolute;
    top: 100px;
  }
`;
