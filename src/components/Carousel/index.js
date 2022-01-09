import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { CarouselArea } from "./styled";
export default function Carousel({ data, loading }) {
  let navigate = useNavigate();
  function SamplePrevArrow({ className, style, onClick }) {
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

  function SampleNextArrow({ className, style, onClick }) {
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
    infinite: data.length >= 3 ? true : false,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function handleLink(id) {
    navigate("/");
    setTimeout(() => navigate(`/game/${id}`), 0);
  }

  return (
    <CarouselArea>
      {loading ? (
        <div className="loadingSpan">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        <>
          <Slider {...settings}>
            {data.map((item, k) => (
              <div className="area" key={k}>
                <div className="photo">
                  <img
                    src={item.background_image}
                    alt={item.name}
                    onClick={() => handleLink(item.id)}
                  />
                </div>
                <div className="desc">
                  <h1
                    style={{ cursor: "pointer" }}
                    onClick={() => handleLink(item.id)}
                  >
                    {" "}
                    {item.name.length >= 30
                      ? item.name.substring(0, 30) + "..."
                      : item.name}
                  </h1>
                  <div className="info">
                    <div className="year">
                      {item.released && item.released.substring(0, 4)}
                    </div>
                    {item.metacritic ? (
                      <div className="score">{item.metacritic}/100</div>
                    ) : (
                      <div className="score">Not updated</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <br />
        </>
      )}
    </CarouselArea>
  );
}
