import React, { useState } from "react";
import MovieModal from "../MovieModal";

export type Genre = {
  id?: number | undefined;
  name?: string;
};

export interface Movie {
  title?: string;
  category?: string;
  genres?: Genre[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  featured?: boolean;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
}

interface MovieListProps {
  movies: Movie[];
  searchTerm: string;
  selectedCategory: any;
  featuredOnly: boolean;
  onSelectMovie: (movie: Movie) => void;
  selectedMovieis: Movie | undefined;
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  searchTerm,
  selectedCategory,
  featuredOnly,
  onSelectMovie,
  selectedMovieis
}) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isOpen, seIsOpen] = useState<boolean>(false);

  const handleImageClick = (movie: Movie) => {
    setSelectedMovie(movie);
    seIsOpen(true)
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    seIsOpen(false)
  };
  const filteredMovies = movies.filter((movie) => {
    const matchesSearchTerm = movie?.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = movie?.genre_ids?.includes(selectedCategory);
    const matchesFeatured = !featuredOnly || movie.featured;

    return matchesSearchTerm && matchesCategory && matchesFeatured;
  });

  const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

  return (
    <div className="movie-list">
      {(selectedCategory === 0
        ? movies : filteredMovies).map((movie) => (
            <div
              key={movie.id}
              className="movie-item"
              onClick={() => onSelectMovie(movie)}
            >
              <img
                src={assetsUrl + movie.poster_path}
                alt={movie.title}
                className="movie-thumbnail"
                onClick={() => handleImageClick(movie)}
              />
              <h2>{movie.title}</h2>
              <p>{movie.category}</p>
              {movie.featured && (
                <span className="featured-badge">Em Destaque</span>
              )}
            </div>
          ))
        }
        {isOpen && selectedMovie && <MovieModal open={!!selectedMovie} onClose={handleCloseModal} movie={selectedMovieis} />}
    </div>
  );
};

export default MovieList;
