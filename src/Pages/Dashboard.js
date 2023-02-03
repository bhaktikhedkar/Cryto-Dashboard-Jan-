import React from "react";
import Header from "../Components/Common/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios"; //you have to install axios by "npm i axios"
import Loader from "../Components/Common/Loader/Loader";
import TabsComponent from "../Components/DashBoard/Tabs";
import Search from "../Components/DashBoard/Search/Search";
import Pagination from "../Components/DashBoard/Pagination/Pagination";
import TopButton from "../Components/Common/TopButton/TopButton";
import Footer from "../Components/Common/Footer/Footer";

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(""); //for searching the coins on search bar
  const [page, setPage] = useState(1);
  const [paginatedCoins , setPaginatedCoins] = useState([]) //thise used to put 10 coins in one page and we can navigate



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
        setPaginatedCoins(response.data.slice(0,10));
        setCoins(response.data);
        setLoading(false); //when we get data we set loading as false;
      })
      .catch((error) => console.log("ERROR >>>>", error.message));
  };

  //useState set function for search bar
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
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

  var filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  

  
  const handlePageChange = (event, value) => {
    setPage(value);

    //whenever we change the page we want to edit the coins and get only 10 coins in a page
    //here value : is the page
    var initial_count = (value-1)*10;
    setPaginatedCoins(coins.slice(initial_count,initial_count+10));
  };



  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          
          <Search search={search} handleChange={handleChange} />
          {/* if we are searching a coin we search in entire doc , ie filteredCoins otherwise display only 10 coins ie paginatedCoins */}
          {/* otherwise if we search in paginatedCoins coins .....it will not search in entire array and it will search in 10 pages only */}
          <TabsComponent coins={search ? filteredCoins :paginatedCoins} setSearch={setSearch} /> 

          {/* if we dont search for coin , then only show the 10 coins in one page */}
          {!search && (<Pagination page={page} handlePageChange ={handlePageChange} />)}
        </>
      )}
      <TopButton />
      <Footer />
    </div>
  );
}

export default Dashboard;
