import "./MovieItem.css";

const MovieItem = ({ title, director, description, year }) => {
    return (
        <div className="movie-item">
            <div className="movie-title">{title}</div>
            <div className="movie-director-year">
                <div className="director">Directed by {director}</div>
                <div className="year">Produced year {year}</div>
            </div>
            <div className="movie-description">{description}</div>
        </div>
    );
}

export default MovieItem;