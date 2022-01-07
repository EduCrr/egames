import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Api";
import {
  AppStylesCarousel,
  AppStylesCarouselResponsive,
} from "../../AppStyles";
import { CarouselArea } from "./styled";
export default function CarouselIntro() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPopular = async () => {
    try {
      setLoading(true);
      let json = await Api.getPopularYear();
      setPopular(json.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <AppStylesCarousel>
      <AppStylesCarouselResponsive>
        {loading ? (
          <div className="loadingSpan">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <CarouselArea>
            {popular &&
              popular.map((item, k) => (
                <div className="photo" key={k}>
                  <Link to={`game/${item.id}`}>
                    <img src={item.background_image} />
                  </Link>
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
            <div style={{ margin: "auto" }}>
              <Link className="equal" to="/games">
                See More
              </Link>
            </div>
          </CarouselArea>
        )}
      </AppStylesCarouselResponsive>
    </AppStylesCarousel>
  );
}
