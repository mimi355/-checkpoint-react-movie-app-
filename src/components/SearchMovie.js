import React from 'react';
import Rate from './Rate';
function SearchMovie({searchName,setSearchName,searchRate,setSearchRate}){




return(

    <div className="wrapper">
    <div className="search_box">
    <input type='text'  placeholder ="what are you looking for?"  value={searchName}   onChange={(e)=>setSearchName(e.target.value)}/>
    <i class="fas fa-search"></i>
    
    <Rate  rating={ searchRate } setSearchRate={setSearchRate}/>
  </div>
  </div>

)




}
export default SearchMovie;