import "./Home.css";
import NavBar from "../../components/Navbar/Navbar.js";
import Banner from "../../components/Banner/Banner.js";
import MovieList from "../../components/Contents/MovieList.js";
import MoviesDetail from "../../components/MovieDetail/MovieDetail.js";
import { useSelector } from "react-redux";

// component này chứa các component con cấu tạo nên trang homepage

function Homepage() {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <MovieList />
      <MoviesDetail
        movie={MovieDetail}
        showModal={MovieDetail ? true : false}
      />
    </div>
  );
}

export default Homepage;
