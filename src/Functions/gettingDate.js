export const gettingData=(number)=>{
   const date = new Date(number);
   return date.getDate() + "/" + (date.getMonth()+1);
}

// +1 :- because in js month starts with zero(0)