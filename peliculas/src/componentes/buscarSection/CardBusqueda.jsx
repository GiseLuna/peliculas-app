import { useState } from 'react'

const CardBusqueda = ({ movie, agregarFavorito, esFavorito }) => {

  const imgUrl = 'https://image.tmdb.org/t/p/original/'
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // favoritos
  const handleToggleFavorito = () => {
    agregarFavorito(movie);
  }



  return (
    <>
      <div className={`card ${expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
        <div className="imgContainer">
          <img src={`${imgUrl + movie.poster_path}`} alt={movie.title} className="img" />
        </div>
        <h3 className="title">{movie.title}</h3>
        {expanded && (
          <div className='desplegable'>
            <p className='overview'>{movie.overview}</p>
            <button onClick={handleToggleFavorito} className='btnCard'>
              {esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            </button>
          </div>
        )}

      </div>
    </>
  )
}

export { CardBusqueda }