import React from 'react';
import { Movie } from '../MoviesList';

interface MovieModalProps {
  movie: Movie | undefined;
  onClose: () => void;
  open: boolean;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  if (!movie) {
    return null; 
  }

  const assetsUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

  return (
    <div className="modal movie-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>×</span>
        <img src={assetsUrl + movie.poster_path} alt={movie.title} className="modal-thumbnail" />
        <h2>{movie.title}</h2>
        <p><strong>Classifição adulta:</strong> {movie.adult ? "Sim" : "Não"}</p>
        <p><strong>Descrição:</strong> {movie.overview}</p>
        {movie.featured && <span className="featured-badge">Em Destaque</span>}
      </div>
    </div>
  );
};

export default MovieModal;
