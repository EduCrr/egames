import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppStylesCarousel,
  AppStylesCarouselResponsive,
} from "../../AppStyles";
import { ListGamesArea } from "./styled";
export default function SingleGames({ data }) {
  let navigate = useNavigate();
  function handleChangeUrl(id) {
    navigate(`/game/${id}`);
  }
  return (
    <AppStylesCarousel>
      <AppStylesCarouselResponsive>
        <ListGamesArea>
          {data.results &&
            data.results.map((item, k) => (
              <div className="photo" key={k}>
                <img
                  src={item.background_image}
                  onClick={() => handleChangeUrl(item.id)}
                  alt={item.name}
                />

                <div className="text">
                  <div className="title">
                    {item.name.length > 20
                      ? item.name.substring(0, 17) + "..."
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
        </ListGamesArea>
      </AppStylesCarouselResponsive>
    </AppStylesCarousel>
  );
}
