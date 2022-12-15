import { ImSearch } from "react-icons/im";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

// component này tạo ra fỏm input để tìm kiếm movie

export default function SearchForm(props) {
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();

  let handleChangeInput = (e) => {
    let keywords = e.target.value;
    setKeywords(keywords);
    // if (keywords.length > 0) {
    //   navigate(`/search?keywords=${keywords.trim()}`);
    // } else navigate("/search");
    keywords.length > 0
      ? navigate(`/search?keywords=${keywords.trim()}`)
      : navigate("/search");
  };

  return (
    <div className={styles.searchModal}>
      <div className={styles.container}>
        <input
          className={styles.input}
          placeholder="Enter movie title..."
          onChange={handleChangeInput}
          value={keywords}
        ></input>
        <ImSearch className={styles.icon} />
      </div>
      <div className={styles.btn_group}>
        <button className={styles.btn1}>RESET</button>
        <button className={styles.btn}>SEARCH</button>
      </div>
    </div>
  );
}
