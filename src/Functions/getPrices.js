import axios from "axios";


export const getPrices = (id,days,priceType,setError) => {
    const prices = axios
  //this api is from market_chart - coin gecko
  //so that we can form chart
  .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
  .then((response)=>{
    if(response.data){
      console.log("Prices>>>",response.data.prices);
      if(priceType == "market_caps"){
        return response.data.market_caps;
      }
      else if(priceType == "total_volumes"){
        return response.data.total_volumes;
      }else{
                //console.log(prices); {/*prices[0]  is date and prices[1] is the price*/}
      return response.data.prices;
      }
     }
  }).catch((e)=>{
  console.log(e.message);
  if(setError){
    setError(true);
  }
  
  }
  )
  return prices;
}
