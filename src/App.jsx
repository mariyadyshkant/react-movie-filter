import { useState, useEffect } from 'react'
import './index.css'

const movies = [
  { title: 'Inception', genre: 'Fantascienza', img: 'https://pad.mymovies.it/filmclub/2009/03/027/locandina.jpg' },
  { title: 'Il Padrino', genre: 'Thriller', img: 'https://pad.mymovies.it/filmclub/2002/08/056/locandina.jpg' },
  { title: 'Titanic', genre: 'Romantico', img: 'https://pad.mymovies.it/filmclub/2004/06/506/locandinapg9.jpg' },
  { title: 'Batman', genre: 'Azione', img: 'https://pad.mymovies.it/filmclub/2002/08/241/locandina.jpg' },
  { title: 'Interstellar', genre: 'Fantascienza', img: 'https://pad.mymovies.it/filmclub/2014/01/001/locandina.jpg' },
  { title: 'Pulp Fiction', genre: 'Thriller', img: 'https://pad.mymovies.it/filmclub/2006/08/102/locandinapg2.jpg' },
]

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState('Tutti')
  const [filteredMovies, setFilteredMovies] = useState(movies)

  useEffect(() => {
    setFilteredMovies(selectedGenre === 'Tutti' ? movies : movies.filter(movie => movie.genre === selectedGenre))
  }, [selectedGenre])

  return (
    <>
      <div className="navbar bg-light text-dark p-3 mb-4">
        <div className="container-fluid">
          <div className="navbar-brand">
            <h1 className='text-center'>Movie List</h1>
          </div>
          <div className="navbar-nav flex-row">
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className='form-select mb-3 w-50'
            >
              <option value="Tutti">Tutti</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
            <form className="d-flex mb-3" role='search'>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {filteredMovies.map((movie, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <div className="card">
                <img src={movie.img} alt={movie.title} className="card-img-top" />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className="card-title text-center">{movie.title}</h5>
                  <span className="card-text bg-primary text-white text-center rounded-pill py-1 px-2">{movie.genre}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}