import React, { useEffect, useState } from "react";
import { CarouselArea } from "./styled";
import Api from "../../Api";
export default function CarouselIntro() {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    try {
      let json = await Api.getPopularYear();
      setPopular(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <CarouselArea>
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
      <div style={{ margin: "auto" }}>
        <button>See More</button>
      </div>
    </CarouselArea>
  );
}
