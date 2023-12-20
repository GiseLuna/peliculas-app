import { useState, useEffect } from 'react'
import { Card } from '../card/Card'
import './main.css'
import { useFavoritos } from '../../context/FavoritosContext'


const Main = () => {
  const [movie, setMovie] = useState([])
  const initialUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=8927008b8b20d7ffec350c390a6bcf8d'

  function fetchMovies(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovie(data.results);
        console.log(data.results)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchMovies(initialUrl);
  }, []);

  // favoritos

  const { agregarAFavoritos, favoritos } = useFavoritos();

  const handleAgregarFavorito = (movie) => {
    agregarAFavoritos(movie);
  }


  return (
    <div>
      <img className="fondo" />
      <main className="main">
        {movie.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            movie={movie}
            agregarFavorito={handleAgregarFavorito}
            esFavorito={favoritos.some((fav) => fav.id === movie.id)}
          />
        ))}

      </main>
    </div>
  )
}

export default Main