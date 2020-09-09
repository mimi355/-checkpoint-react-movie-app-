import React,{useState} from 'react';
import MovieList from './components/MovieList'
import movieData from './components/movieData';
import SearchMovie from './components/SearchMovie';
import AddMovie from './components/AddMovie';

import './App.css';

function App() {
const[moviesList,setMoviesList]=useState(movieData);    // state: tableau d'object pour lister les films.
const[searchName,setSearchName]=useState('')
const[searchRate,setSearchRate]=useState(1)
//fonction pour ajouter des films dans notre liste en utilisant modal. 
const handleAdd=(e,newMovie)=>{
  e.preventDefault()
setMoviesList([...moviesList,newMovie])
}


  return (
    <div className="App">
      <SearchMovie    searchName={searchName} setSearchName={setSearchName} searchRate={searchRate}  setSearchRate={setSearchRate}/>
      <AddMovie   handleAdd={handleAdd} />
      <MovieList  moviesList={moviesList} searchName={searchName} searchRate={searchRate} />
    </div>
  );
}

export default App;
