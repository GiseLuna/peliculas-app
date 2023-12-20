import React from 'react';
import { useFavoritos } from '../../context/FavoritosContext';
import { useState } from 'react';
import './favoritos.css'

function Favoritos() {
    const { favoritos, eliminarDeFavoritos } = useFavoritos();
    const imgUrl = 'https://image.tmdb.org/t/p/original/'

    const [expandedId, setExpandedId] = useState(null);
    const toggleExpanded = (id) => {
        setExpandedId(id === expandedId ? null : id);
    };

    const handleEliminarDeFavoritos = (movieId) => {
        eliminarDeFavoritos(movieId);
    };

    return (
        <>
        <section className="favoritos">
                <h2 className="tituloFavoritos">Mis películas favoritas</h2>
                <div className="containerFavoritos">
                    {favoritos.length > 0 ? (
                        favoritos.map(() => (
                            <div
                                className={`card ${expandedId === movie.id ? 'expanded' : ''}`}
                                onClick={() => toggleExpanded(movie.id)}
                                key={movie.id}
                            >
                                <div className="imgContainer">
                                    <img src={`${imgUrl + movie.poster_path}`} alt={movie.title} className="img" />
                                </div>
                                <h3 className="title">{movie.title}</h3>
                                {expandedId === movie.id && (
                                    <div className='desplegable'>
                                        <p className='overview'>{movie.overview}</p>
                                        <button className='btnEliminar' onClick={()=>handleEliminarDeFavoritos(pelicula.id)}>
                                            Quitar de favoritos
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="titleVacio">No tienes películas en tus favoritos</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default Favoritos;


