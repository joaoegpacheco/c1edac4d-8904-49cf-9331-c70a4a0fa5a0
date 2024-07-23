import { useState } from "react";
import "./styles.css";
import movies from "./data/popular.json";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import FeaturedToggle from "./components/FeaturedToggle";
import MovieList, { Movie } from "./components/MoviesList";


export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>();
  const [selectedGenreId, setSelectedGenreId] = useState<number>(0); 

  const handleGenreChange = (genreId: number, genreName: string) => {
    setSelectedGenreId(genreId); 
    setSelectedCategory(genreName);
  };

  return (
    <div className="app">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CategoryFilter
        selectedGenreId={selectedGenreId}
        onGenreChange={handleGenreChange}
        selectedCategory={selectedCategory}
      />
      <FeaturedToggle featuredOnly={featuredOnly} onToggleChange={setFeaturedOnly} />
      <MovieList
        movies={movies}
        searchTerm={searchTerm}
        selectedCategory={selectedGenreId}
        featuredOnly={featuredOnly}
        onSelectMovie={setSelectedMovie}
        selectedMovieis={selectedMovie}
      />
    </div>
  );
}
