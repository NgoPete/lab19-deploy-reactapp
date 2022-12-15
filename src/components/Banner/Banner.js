import styled from "styled-components";
import styles from "./banner.module.css";

// component này chứa các thông tin render ra phần banner

export default function Banner(props) {
  return (
    <IntroContainer>
      <img
        alt="banner"
        src="https://images3.alphacoders.com/121/1217446.jpg"
        width="100%"
        height="100%"
        className="videoIntro"
      ></img>
      <div className="banner">
        <h1 className="heading">The Flashpoint Paradox</h1>
        <button className="btn">Play</button>
        <button className="btn">My list</button>
        <p className={styles.overview}>
          Justice League: The Flashpoint Paradox is a 2013 direct-to-video
          animated superhero film adaptation of the 2011 comic book crossover
          "Flashpoint" by Geoff Johns and Andy Kubert...
        </p>
      </div>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  background-color: var(--color-background);
  position: relative;
  color: var(--color-white);
  padding-top: 56%;

  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }

  .banner {
    position: absolute;
    top: 140px;
    left: 30px;

    @media screen and (max-width: 800px) {
      top: 120px;
      left: 25px;
    }
    @media screen and (max-width: 600px) {
      top: 100px;
      left: 15px;
    }

    .btn {
      cursor: pointer;
      padding: 6px 15px;
      margin-right: 20px;
      border-radius: 5px;
      font-size: large;
      opacity: 0.5;
      font-weight: bolder;
      margin-top: 30px;
    }
    .heading {
      font-size: 50px;
      transition: all 0.3s ease;

      @media screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media screen and (max-width: 600px) {
        font-size: 24px;
      }
    }
  }
`;
