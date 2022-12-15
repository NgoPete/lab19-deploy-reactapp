import { ImSearch } from "react-icons/im";
import styled from "styled-components";
import { UseScrollY } from "../hooks/useScrollY";
import { Link } from "react-router-dom";

// component này chứa các thành phần của thanh navigation như banner và search icon
// khi nhấn vào search icon người dùng sẽ được điều hướng đến trang search
// khi nhân vào chữ Movie App người dùng sẽ được điều hướng về homepage

export default function NavBar(props) {
  const [scrollY] = UseScrollY();

  return (
    <Navigation
      style={
        scrollY < 100
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }
    >
      <div className="navContainer">
        <Link to="/">
          <h1 className="logo">Movie App</h1>
        </Link>
        <div className="navSearch">
          <Link to="/Search">
            <ImSearch
              className="iconSearch"
              onClick={() => this.onClickHandler()}
            />
          </Link>
        </div>
      </div>
    </Navigation>
  );
}

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  z-index: 10;
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 1s;

  @media only screen and (max-width: 600px) {
    height: 100px;
  }

  .navContainer {
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }

    .logo {
      color: green;
      cursor: pointer;
      margin-left: 20px;
      font-weight: bolder;
    }
    .navSearch {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;

      &:hover .iconSearch {
        color: var(--color-white);
      }

      .iconSearch {
        position: absolute;
        right: 50px;
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translateX(24px) translateY(-10px);
       
        color: #bbb;
      }
      }
    }
  }
`;
