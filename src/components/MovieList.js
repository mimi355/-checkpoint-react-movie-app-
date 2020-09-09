import React from 'react';
import MovieCard from './MovieCard';
function MovieList({moviesList,searchName,searchRate}){
return(
    <div className ='container'>
   {moviesList.filter(movie=>movie.name.toLowerCase().includes(searchName.toLowerCase().trim())&& movie.rating>=searchRate)
   .map(movie=>( <MovieCard   movie={movie} key={movie.id}/>)) }  
   </div>   
)

}


export default MovieList;
