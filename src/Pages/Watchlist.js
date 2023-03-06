import React, { useEffect, useState } from "react";
import Button from "../Components/Common/Button/Button";
import Header from "../Components/Common/Header/Header";
import TabsComponent from "../Components/DashBoard/Tabs";
import { get100Coins } from "../Functions/get100Coins";


function Watchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  // const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);

  // we are not using api calls because process of getting large number of coins from api everytime will become slow
  useEffect(() => {
    if (watchlist) {
      getData();
    }
  }, []);

  const getData = async () => {
    const allCoins = await get100Coins();
    // if (allCoins) {
    //   setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
    // }
    if(watchlist){
      setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)))
    }
    // setLoading(false);
  };

  
  return (
    <div>
      <Header />
      {/* {watchlist?.length > 0 || coins ? (
        <TabsComponent coins={coins}/>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <a href="/dashboard">
              <Button text="Dashboard" />
            </a>
          </div>
        </div>
      )} */}
      {
        watchlist?.length == 0 ?(                 
          <div>
          <h1 style={{ textAlign: "center" }}>
            No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <a href="/dashboard">
              <Button text="Dashboard" />
            </a>
          </div>
        </div>
        ) : (
          <TabsComponent coins={coins} isWatchlistPage={true}/>
        )
          }
    </div>
  );
}

export default Watchlist;