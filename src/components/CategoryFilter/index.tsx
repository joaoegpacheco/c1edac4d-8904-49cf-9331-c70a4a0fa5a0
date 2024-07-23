import React from "react";
import genres from "../../data/genres.json";

interface CategoryFilterProps {
  onGenreChange: (genreId: number, genreName: string) => void;
  selectedCategory?: string;
  selectedGenreId: number;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onGenreChange }) => {
  return (
    <div className="category-filter">
      {genres.map((genre: any) => (
        <button
          key={genre?.id}
          className={`filter-button ${genre?.id ? "active" : ""}`}
          onClick={() => onGenreChange(genre?.id, genre?.name)}
        >
          {genre?.name}
        </button>
      ))}
      <button
        key={0}
        className={`filter-button ${0 ? "active" : ""}`}
        onClick={() => onGenreChange(0, "all")}
      >
        All
      </button>
    </div>
  );
};

export default CategoryFilter;
