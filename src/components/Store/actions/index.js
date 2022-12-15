import axios from "axios";
import * as Types from "../types";

// component này chứa api key và api của các thể loại phim

const API_KEY = "b2bfd4babb1d3590f491d6de719f5b15";
const BASE_URL = "https://api.themoviedb.org/3";

export const getOriginals = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({ type: Types.GET_ORIGINALS, payload: result.data.results });
  } catch (error) {
    console.log("originals wrong:", error);
  }
};

export const getTrending = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: Types.GET_TRENDING, payload: result.data.results });
  } catch (error) {
    console.log("trending wrong:", error);
  }
};

export const getHighRate = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
    );
    dispatch({ type: Types.GET_HIGHRATE, payload: result.data.results });
  } catch (error) {
    console.log("highrated wrong:", error);
  }
};

export const getAction = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    dispatch({ type: Types.GET_ACTION, payload: result.data.results });
  } catch (error) {
    console.log("action wrong:", error);
  }
};

export const getComedy = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    dispatch({ type: Types.GET_COMEDY, payload: result.data.results });
  } catch (error) {
    console.log("comedy wrong:", error);
  }
};

export const getHorror = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
    dispatch({ type: Types.GET_HORROR, payload: result.data.results });
  } catch (error) {
    console.log("horror wrong:", error);
  }
};

export const getRomantic = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    dispatch({ type: Types.GET_ROMAN, payload: result.data.results });
  } catch (error) {
    console.log("romantic wrong:", error);
  }
};

export const getDocumentary = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
    );
    dispatch({ type: Types.GET_DOCUMENT, payload: result.data.results });
  } catch (error) {
    console.log("document wrong:", error);
  }
};

export const setMovieDetail = (movie) => (dispatch) => {
  dispatch({ type: Types.SET_MOVIE_DETAIL, payload: movie });
};

export const getSearchMovies = (keywords) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
    );
    dispatch({ type: Types.GET_SEARCH_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("search movie wrong:", error);
  }
};
