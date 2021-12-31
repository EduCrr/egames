import React, { useState } from "react";
import { FeaturedArea } from "./styled";
export default function Featured({ data, loading }) {
  let g = [];
  for (let i in data.genres) {
    g.push(data.genres[i].name);
  }
  return (
    <>
      {loading ? (
        <div className="loading">
          <img src="/assets/loading.gif" />
        </div>
      ) : (
        <FeaturedArea
          style={{
            backgroundImage: `linear-gradient(to top, #1c1c1c 1%, transparent 50%), url(${data.photo})`,
          }}
        >
          <div className="info">
            <div className="name">{data.name} </div>
            <div className="developers"></div>
            <div className="metacritic">
              <span>{data.metacritic}</span>/100
            </div>
            <div className="genres">
              {g.map((item, k) => (
                <p key={k}>{item}</p>
              ))}
            </div>
            <div className="desc">
              {data.description && data.description.substring(0, 110) + "..."}
            </div>

            <div className="year">
              {data.released && data.released.substring(0, 4)}
            </div>
            <button>More</button>
          </div>
        </FeaturedArea>
      )}
    </>
  );
}
