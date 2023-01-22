import React from "react";
import Header from "../Components/Common/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios"; //you have to install axios by "npm i axios"
import Loader from "../Components/Common/Loader/Loader";
import TabsComponent from "../Components/DashBoard/Tabs";
import Search from "../Components/DashBoard/Search/Search";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(""); //for searching the coins on search bar

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

  //useState set function for search bar
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //whenever we search a coin , even if we type its 1st alphabet , the coins similar to that should be show
  //toLowerCase() - is used to make it case insensitive
  //trim is used to remove space in the beginning 
  // var filteredCoins = coins.filter((coin) => {
  //   if (
  //     coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
  //     coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  //   ) {
  //     return coin;
  //   }
  // });

  var filteredCoins = coins.filter((coin) =>
   (
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
   )
  );


  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Search search={search} handleChange={handleChange} />
          <TabsComponent coins={filteredCoins} />
        </>
      )}
    </div>
  );
}

export default Dashboard;
