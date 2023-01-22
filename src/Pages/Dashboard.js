import React from "react";
import Header from "../Components/Common/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios"; //you have to install axios by "npm i axios"
import Loader from "../Components/Common/Loader/Loader";
import TabsComponent from "../Components/DashBoard/Tabs";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("RESPONSE >>>>", response.data);
        setCoins(response.data);
        setLoading(false); //when we get data we set loading as false;
      })
      .catch((error) => console.log("ERROR >>>>", error));
  };
  return (
    <div>
      {loading ? <Loader/> : <>
        <Header />
        <TabsComponent />
         {/* {coins.map((coin, i) => (
          // <p>{i+1}.{coin.name}</p>
          <p>
            {i + 1}.<img src={coin.image} />
          </p> 
        ))} */}
      </>}
    </div>
  );
}

export default Dashboard;
