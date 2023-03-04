import {toast} from "react-toastify";

export const saveItemToWatchlist = (e, id) => {
    e.preventDefault();
    let watchlist = JSON.parse(localStorage.getItem("watchlist"));
    // if watchlist array  exist then , see if we have id's already present in it and append
    // else just add id 
    //!watchlist.includes(id) :- ie check if the id is already present or not 

    if(watchlist){
        if(!watchlist.includes(id)){
        watchlist.push(id);
        toast.success(
            `${
                id.substring(0,1).toUpperCase() + id.substring(1)
            } - added to watchlist`)
        }else{
            //id is already present
            toast.error(
                `${
                    
                    id.substring(0,1).toUpperCase() + id.substring(1)
                }- Already added to watchlist!`)
        }
    }else{
        watchlist = [id];
        toast.success(`${id.substring(0,1).toUpperCase() + id.substring(1)} - added to watchlist`)
    }
    localStorage.setItem("watchlist",JSON.stringify(watchlist))
    
}

//Event.preventDefault() :- when used it does not let us got to another page,ie page does not load