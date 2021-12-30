import React from "react";
import { useNavigate } from "react-router-dom";
import { AppStylesCarousel } from "../../AppStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function CarouselListGames({ data }) {
  let navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

  function handleChangeUrl(id) {
    navigate(`/game/${id}`);
  }
  return (
    <AppStylesCarousel>
      <h1>{data.title}</h1>
      <Slider {...settings}>
        {data.items.results.length > 0 &&
          data.items.results.map((item, k) => (
            <div className="photo" key={k}>
              <img
                src={item.background_image}
                onClick={() => handleChangeUrl(item.id)}
              />

              <div className="text">
                <div className="title">
                  {item.name.length > 20
                    ? item.name.substring(0, 22) + "..."
                    : item.name}
                </div>
                <div className="details">
                  <div className="vote">{item.metacritic}/100</div>
                  <div className="year">
                    {item.released && item.released.substring(0, 4)}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </AppStylesCarousel>
  );
}

/*
{popular &&
        popular.map((item, k) => (
          <div className="photo" key={k}>
            <img src={item.background_image} />
            <div className="text">
              <div className="title">
                {item.name.length > 20
                  ? item.name.substring(0, 20) + "..."
                  : item.name}
              </div>
              <div className="details">
                <div className="vote">{item.metacritic}/100</div>
                <div className="year">
                  {item.released && item.released.substring(0, 4)}
                </div>
              </div>
            </div>
          </div>
        ))}

*/
