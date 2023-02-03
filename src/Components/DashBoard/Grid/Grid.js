import React from "react";
import "./Grid.css";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { saveItemToWatchlist } from "../../../Functions/saveItemToWatchlist";
import StarIcon from "@mui/icons-material/Star";
import { removeItemToWatchlist } from "../../../Functions/removeItemToWatchlist";
import { useState } from "react";

// ${coin.price_change_percentage_24h < 0 && "grid-red"} => meaning
// conditon && (do this) =>
// id conditon is true , then (do this)
function Grid({ coin, delay }) {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));
  
  return (
    <a href={`/coin/${coin.id}`}>
      {/* dynamic routing , we should get whole info of coin when we click on grid  */}
      <motion.div
        className={`grid ${coin.price_change_percentage_24h < 0 && "grid-red"}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <Tooltip title="coin info" placement="bottom-start">
          <div className="img-flex">
            <img src={coin.image} className="coin-image" />
            <div className="icon-flex">
            <div className="info-flex">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
            <div className={`watchlist-icon  ${coin.price_change_percentage_24h < 0 && "watchlist-icon-red"}`} 
            onClick={(e)=> {if (isCoinAdded) {
                  // remove coin
                  setIsCoinAdded(false)
                  removeItemToWatchlist(e, coin.id, setIsCoinAdded);
                } else {
                  setIsCoinAdded(true);
                  saveItemToWatchlist(e, coin.id);
                }}}>
            {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
            </div>
            </div>
          </div>
        </Tooltip>

        <Tooltip
          title="Coin Price Percentage In 24hrs"
          placement="bottom-start"
        >
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
        </Tooltip>

        <Tooltip title="Coin Price In USD" placement="bottom-start">
          {coin.price_change_percentage_24h >= 0 ? (
            <p className="current-price">
              ${coin.current_price.toLocaleString()}
            </p>
          ) : (
            <p className="current-price-red">
              ${coin.current_price.toLocaleString()}
            </p>
          )}
        </Tooltip>

        <Tooltip title="Coin Total Volume" placement="bottom-end">
          <p className="coin-name">
            Total Volume : {coin.total_volume.toLocaleString()}
          </p>
        </Tooltip>
        <Tooltip title="Coin Market Capital" placement="bottom-end">
          <p className="coin-name">
            Market Capital : ${coin.market_cap.toLocaleString()}
          </p>
        </Tooltip>
      </motion.div>
    </a>
  );
}

export default Grid;

//toLocaleString() = is used to give comma(,) between numbers
