import React from "react";
import "./Grid.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

// ${coin.price_change_percentage_24h < 0 && "grid-red"} => meaning
// conditon && (do this) =>
// id conditon is true , then (do this)
function Grid({ coin }) {
  return (
    <div className={`grid ${coin.price_change_percentage_24h < 0 && "grid-red"}`}>
      <div className="img-flex">
        <img src={coin.image} className="coin-image" />
        <div className="info-flex">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h >= 0 ? (
        <div className="chip-flex">
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="chip-icon">
            <TrendingUpRoundedIcon />
          </div>
        </div>
      ) : (
        <div className="chip-flex">
          <div className="price-chip  red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="chip-icon red ">
            <TrendingDownRoundedIcon />
          </div>
        </div>
      )}
      {coin.price_change_percentage_24h >= 0 ? (
        <p className="current-price">${coin.current_price.toLocaleString()}</p>
      ) : (
        <p className="current-price-red">
          ${coin.current_price.toLocaleString()}
        </p>
      )}
      <p className="coin-name">Total Volume : {coin.total_volume.toLocaleString()}</p>
      <p className="coin-name">Market Capital : 
      ${coin.market_cap.toLocaleString()}</p>
    </div>
  );
}

export default Grid;

//toLocaleString() = is used to give comma(,) between numbers