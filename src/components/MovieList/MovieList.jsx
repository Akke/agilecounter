import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MovieItem from "../MovieItem/MovieItem";
import { getAllMovies } from "../../services/movies.js";
import "./MovieList.css";

const MovieList = () => {
    const { user } = useContext(AuthContext);
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const allMovies = async () => {
            const result = await getAllMovies(user);
            const data = await result.json();
            
            setMovies(data);
        }

        if(user) allMovies();
    }, [user]);

    if(user) {
        return (
            <>
                <h1>Movies</h1>
                <div className="movie-list">
                    {movies.map((movie, i) => {
                        return (
                            <MovieItem 
                                key={i}
                                title={movie.title} 
                                director={movie.director}
                                description={movie.description}
                                year={movie.productionYear}
                            />
                        )
                    })}
                </div>
            </>
        );
    }
}

export default MovieList;