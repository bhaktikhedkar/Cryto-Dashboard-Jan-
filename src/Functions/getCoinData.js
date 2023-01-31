import axios from "axios";

export const getCoinData = (id,setError) =>{
   const coin = axios
  .get(`https://api.coingecko.com/api/v3/coins/${id}`)
  .then((response)=>{
    if(response.data){
      console.log("DATA",response.data);
      // setCoin(response.data);
      console.log("response",response.data);
      return response.data;
    //   console.log("response",response.data);
    }
  }).catch((e)=>{
  console.log(e.message);
  setError(true);
  }
  )
 
  return coin;
  
};