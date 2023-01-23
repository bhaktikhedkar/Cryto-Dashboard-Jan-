import "./Pagination.css"
import React from 'react';
import Pagination from '@mui/material/Pagination';
import { useState } from "react";

export default function PaginationControlled({ page , handlePageChange}) {
  

  return (
    <div className="pagination-div">
      <p>Page: {page}</p>

      {/* sx is the styling in mui and we get "MuiPaginationItem-text" when we inspect the element and you have to give "& ." when you are using the sx styling */}
      <Pagination  sx={{
          "& .MuiPaginationItem-text": {
            color: "#fff !important",
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-text:hover": {
            backgroundColor: "transparent !important",
          },
          "& .Mui-selected  ": {
            backgroundColor: "var(--blue)",
            borderColor: "var(--blue)",
          }, 
        //   ellipsis :- 1 2 3 "..." :- these dots in pagination
          "& .MuiPaginationItem-ellipsis": {
            border: "none",
          },
        }} count={10} page={page} onChange={handlePageChange} />
    </div>
  );
}


//we have 100 coins : arr size - [0-99]
//we want to have 10 coins in each page , how can we do :=
// page 1 : Arr.slice(0-10)
// page 2 : Arr.slice(10-20)
// page 3 : Arr.slice(20-30)
// page 4 : Arr.slice(30-40)
// page 5 : Arr.slice(40-50)
// ....
// page 10 : Arr.slice(90-100)

//FORMULA WILL BE:

//page_number = x
// initial_count = (x-1)*10 , 
// then ,
// Arr.slice(initial_count, initial_count + 10)