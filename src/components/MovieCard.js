import React from 'react';
import Rate from './Rate';
function MovieCard({movie}){
    return(
        <div  className='card'>
        <div className='hearder-card'>
   <img src={movie.imgUrl} alt= "myMovie"/> 
        </div>

    <div className="body-card">
    <Rate  rating= {movie.rating}  /> 
<h1> {movie.name}</h1>

<ul>
  <li> {movie.date} </li> 
  <li>  ||  </li>
   <li>{movie.type}</li> 
   </ul>
    
     <p> {movie.description}</p>

<button className='btn'> Watch </button>
</div>
</div>

    )
}
export default MovieCard;