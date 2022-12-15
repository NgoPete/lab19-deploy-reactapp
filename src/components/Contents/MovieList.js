import Contents from "./Contents";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ACTION from "../Store/actions";

// component này chứa các thể loại movies

export default function MovieList(props) {
  const dispatch = useDispatch();
  const {
    Originals,
    Trending,
    Highrate,
    Action,
    Comedy,
    Horror,
    Roman,
    Document,
  } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(ACTION.getOriginals());
    dispatch(ACTION.getTrending());
    dispatch(ACTION.getHighRate());
    dispatch(ACTION.getAction());
    dispatch(ACTION.getComedy());
    dispatch(ACTION.getHorror());
    dispatch(ACTION.getRomantic());
    dispatch(ACTION.getDocumentary());
  }, [dispatch]);
  return (
    <>
      <Contents movies={Originals} title="Originals" isOriginals={true} />
      <Contents movies={Trending} title="Xu hướng" />
      <Contents movies={Highrate} title="Xếp hạng cao" />
      <Contents movies={Action} title="Hành động" />
      <Contents movies={Comedy} title="Hài" />
      <Contents movies={Horror} title="Kinh dị" />
      <Contents movies={Roman} title="Lãng mạn" />
      <Contents movies={Document} title="Tài liệu" />
    </>
  );
}
