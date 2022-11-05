import React from 'react'

function MovieCard({movie}) {
  return (
  //   <div className="movieCard rounded-sm">
  //   <img className='' src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/300x400' : movie.Poster} alt={movie.Title} />
  //   <h2 >{movie.Title}</h2>

    
  // </div>
//   <div className="card w-96 bg-base-100 shadow-xl">
//   <figure><img className='max-h-[20rem]' src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/300x400' : movie.Poster} alt={movie.Title} /></figure>
//   <div className="card-body">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>

<div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='' src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/300x400' : movie.Poster} alt={movie.Title} /></figure>
  <div className="card-body">
    <h2 className="text-white text-2xl font-bold">{movie.Title}</h2>
    <p className='text-white text-lg pt-10'>Made in: {movie.Year}</p>
    <p className='text-white text-lg pt'>Type: {movie.Type === 'series' ? 'TV Series' : 'Movie'}</p>
    <p className='text-white text-lg pt'>IMDB ID: {movie.imdbID}</p>
    
    <div className="card-actions justify-center">
      
    </div>
  </div>
</div>
  )
}

export default MovieCard