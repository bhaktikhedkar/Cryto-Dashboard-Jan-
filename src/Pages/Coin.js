import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../Components/Common/Button/Button";
import Header from "../Components/Common/Header/Header";
import Loader from "../Components/Common/Loader/Loader";
import List from "../Components/DashBoard/List/List";
import CoinInfo from "../Components/CoinPage/CoinInformation/CoinInfo";
import LineChart from "../Components/CoinPage/LineChart/LineChart";
import { getCoinData } from "../Functions/getCoinData";
import { settingCoinObject } from "../Functions/settingCoinObject";
import { getPrices } from "../Functions/getPrices";
import { settingChartData } from "../Functions/settingChartData";
import SelectDays from "../Components/CoinPage/SelectDays/SelectDays";
import ToggleComponents from "../Components/CoinPage/ToggleComponent/ToggleComponents";

function Coin() {
  const { id } = useParams(); //object destructing
  console.log("Params>>", id);
  
  const [coin, setCoin] = useState({}); //to get coin info when we click on grid / list

  const [error, setError] = useState(false); //when we click on the grid/list, we get coin info ....
  //but , if we type something wrong in the url, then iy should show some error.

  const [loading, setLoading] = useState(false);

  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] }); //this is the chart we get when we select acoin on grid .

  const [days, setDays] = useState(30);

  const [priceType, setPriceType] = useState("prices");
  /////////////////////////////////

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  //abc is the id for coins
  const getData = async () => {
    setLoading(true);
    //here the axios call is on ID , is coin-id
    let coinData = await getCoinData(id, setError);
    console.log("Coin-data >>>>", coinData);
    settingCoinObject(coinData, setCoin);
    if (coinData) {
      const prices = await getPrices(id, days, priceType, setError);
      // if prices is there we setup chart data
      if (prices) {
        settingChartData(setChartData, prices);
        setLoading(false);
      }
    }
  };

  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getPrices(id, event.target.value, priceType, setError);
    // if prices is there we setup chart data
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };

  const handlePriceTypeChange = async (event) => {
    setLoading(true);
    setPriceType(event.target.value);
    const prices = await getPrices(id, days, event.target.value, setError);
    // if prices is there we setup chart data
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };
  return (
    <>
      <Header />
      {/* if there is no error , if there is no loading and there is coin:- */}
      {
        !error && !loading && coin.id ? (
          <>
            <div className="grey-wrapper">
              {/* <h1>{coin?.abc}</h1>
       <h1>{coin?.name}</h1>
       <h1>{coin?.symbol}</h1>{" "} */}
              {/* we have replaced the above code by list component because the <List /> has all information that we have mentioned above */}
              {/* <h1>{coin.id}</h1> */}
              <List coin={coin} delay={0.5} />
            </div>
            <div className="grey-wrapper">
              <SelectDays handleDaysChange={handleDaysChange} days={days} />
              <ToggleComponents
                priceType={priceType}
                handlePriceTypeChange={handlePriceTypeChange}
              />
              <LineChart chartData={chartData} />
            </div>
            <CoinInfo title={coin.name} desc={coin.desc} />
          </>
        ) : error ? ( // if there is error :-
          <div>
            <h1 style={{ textAlign: "center" }}>
              Sorry, couldn't find the coin you were looking for...
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
          <Loader />
        ) //if the above 2 conditions dont execute , then the data is loading
      }
    </>
  );
}

export default Coin;


//const params = useParams();
  //to unserstand inspect - you will see the id and all other objects in params.
  // const params = useParams();
  // console.log(params);
  //     return (
  //     <div><h1>{params.id}</h1></div>
  //   )

  //For Dynamic routing we use useParams() hooks

  ///////////////////////////////