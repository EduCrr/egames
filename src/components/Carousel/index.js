import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselArea } from "./styled";
export default function Carousel({ data }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
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
              <img src={item.background_image} />
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
    </CarouselArea>
  );
}
