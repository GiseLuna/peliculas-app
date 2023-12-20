import { createContext, useContext, useState, useEffect } from "react"



const FavoritosContext = createContext()

export const useFavoritos = () => {
    return useContext(FavoritosContext)
};

export const FavoritosProvider = ({children}) => {
    const [favoritos, setFavoritos] = useState([]);
    

    const agregarAFavoritos = (movie) => {
        setFavoritos([...favoritos, movie]);
    };

    const eliminarDeFavoritos = (movieId) => {
        const nuevaListaFavoritos = favoritos.filter((movie) => movie.id !== movieId);
        setFavoritos(nuevaListaFavoritos)
    };

    const value = {
        favoritos,
        agregarAFavoritos,
        eliminarDeFavoritos,
    };

    return (
        <FavoritosContext.Provider value={value}>
            {children}
        </FavoritosContext.Provider>
    );
};