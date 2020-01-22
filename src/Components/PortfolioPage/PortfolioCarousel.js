import React from 'react';
import { Carousel, Card, Button } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioCarousel = () => {
  return (
    <Carousel indicators={false} interval={5000}>
      <Carousel.Item>
        <a href="https://running-timer-41598.firebaseapp.com/">
          5분 타이머
        </a>
        &nbsp;&nbsp;
        <a href="https://github.com/MinsikJeong/timer/">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://palace-5e90c.firebaseapp.com/">
        궁궐 소개
        </a>
        &nbsp;&nbsp;
        <a href="https://github.com/MinsikJeong/seoulpalace/">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://weathernow-682d4.firebaseapp.com/">
        날씨 카드
        </a>
        &nbsp;&nbsp;
        <a href="https://github.com/MinsikJeong/weathercard/">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://movieapp-749d4.firebaseapp.com/">
        영화 불러오기
        </a>
        &nbsp;&nbsp;
        <a href="https://github.com/MinsikJeong/movieappreact">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Carousel.Item>
    </Carousel>
  )
}

export default PortfolioCarousel;
