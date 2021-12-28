import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { CarouselArea } from "./styled";
export default function Carousel({ data }) {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          background: "transparent",
          right: "0px",
          left: "20px",
          top: "105%",
        }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          background: "transparent",
          right: "0px",
          left: "90px",
          top: "105%",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CarouselArea>
      <Slider {...settings}>
        {data.map((item, k) => (
          <div className="area" key={k}>
            <div className="photo">
              <Link to={`game/${item.id}`}>
                <img src={item.background_image} />
              </Link>
            </div>
            <div className="desc">
              <h1>
                {" "}
                {item.name.length >= 30
                  ? item.name.substring(0, 30) + "..."
                  : item.name}
              </h1>
              <div className="info">
                <div className="year">
                  {item.released && item.released.substring(0, 4)}
                </div>
                <div className="score">{item.metacritic}/100</div>
              </div>
              <div style={{ marginTop: "10px" }}>
                <button>More</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <br />
    </CarouselArea>
  );
}
