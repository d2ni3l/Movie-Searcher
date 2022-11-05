import { useEffect, useState, useRef } from 'react'
import searchIcon from './assets/search.svg'
import MovieCard from './MovieCard'
// aa55c01a

const API_URL = 'https://www.omdbapi.com?apikey=aa55c01a'

function App() {
  const [movieData, setMovieData] = useState()
  const [input, setInput] = useState('')
  const inputRef = useRef();

  const getMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovieData(data.Search);
    console.log(movieData)
  }

   function handleKeyPress(e) {
    if(e.key == 'Enter'){
      getMovies(input)
    }
}

  return (
   <>
   <div className="app">
    <header className=" flex flex-col justify-center items-center ">
      <h1 className="text-4xl  text-white mt-52 lg:text-5xl mt-32">Movie Finder 🔎</h1>
    <div className="search pt-20 flex gap-3 ">
      <input type="text"  className='text-input text-black font-bold' placeholder='Search Movies' ref={inputRef} value={input} onChange={(e) => {setInput(e.target.value)}} onKeyPress={handleKeyPress} />
      <button onClick={() => {getMovies(input)}} className="btn btn-primary"><img src={searchIcon} alt="search" /></button>
    </div>
    </header>
    <div className="spacer">
    </div>
    
    {movieData?.length > 0 ? <div className="text-center text-white pt-10 pb-5 text-3xl font-bold">Movies Found</div> : null }

    <div className="grid justify-center lg:grid-cols-2 mx-5 gap-5 pb-5">
       {
        movieData?.length > 0 ? movieData?.map((movie, i) => {
          return(
           <MovieCard key={i} movie={movie}/>
          )
        }) : 
        null
       } 
    </div>
   </div>
   </>
  )
}

export default App