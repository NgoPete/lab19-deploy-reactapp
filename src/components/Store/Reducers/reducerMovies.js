import * as Types from "../types";
// component này chứa các thể loại phim
const reducerMoviesInitialState = {
  Originals: null,
  Trending: null,
  Highrate: null,
  Action: null,
  Comedy: null,
  Horror: null,
  Roman: null,
  Document: null,
  MovieDetail: null,
  SearchMovies: null,
};
const reducerMovies = (state = reducerMoviesInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_ORIGINALS:
      return { ...state, Originals: payload };
    case Types.GET_TRENDING:
      return { ...state, Trending: payload };
    case Types.GET_HIGHRATE:
      return { ...state, Highrate: payload };
    case Types.GET_ACTION:
      return { ...state, Action: payload };
    case Types.GET_COMEDY:
      return { ...state, Comedy: payload };
    case Types.GET_HORROR:
      return { ...state, Horror: payload };
    case Types.GET_ROMAN:
      return { ...state, Roman: payload };
    case Types.GET_DOCUMENT:
      return { ...state, Document: payload };

    case Types.SET_MOVIE_DETAIL:
      return { ...state, MovieDetail: payload };

    case Types.GET_SEARCH_MOVIES:
      return { ...state, SearchMovies: payload };

    default:
      return state;
  }
};

export default reducerMovies;
