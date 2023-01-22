export const convertNumber = (number) =>{
    const numberWithCommas = number.toLocaleString();
    var arr = numberWithCommas.split(",");
    if(arr.length == 5){
        //Trillion
        return arr[0] + "." + arr[1].slice(0,3) + "T";
    }
     else if(arr.length == 4){
        //Billions
        return arr[0] + "." + arr[1].slice(0,2) + "B";
     }
     else if(arr.length == 3){
        //Millions
        return arr[0] + "." + arr[1].slice(0,2) + "M";
     } 
     else if(arr.length == 2){
        //Thousands
        return arr[0] + "." + arr[1].slice(0,2) + "K";
     }
    //  else if(arr.length == 1) {
    //     //Hundreds
    //     return arr[0] + "." + arr[1].slice(0,2) + "H";
    //  }
    else{
        //Hundreds
        return number.toLocaleString();
     }
   
}


//Use of toLocaleString
// const number = 412538234835;
//     const numberWithCommas = number.toLocaleString(); //output:412,538,234,835
//     console.log("Number with commas", numberWithCommas); 
//     const arr = numberWithCommas.split(','); //output:[412,538,234,835]
//     console.log(arr); 


//412,538,234,835
//-4,-3,-2,-1 :- negative indexing for slice