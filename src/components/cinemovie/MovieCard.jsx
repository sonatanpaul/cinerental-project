/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MovieContext } from "../../context/moiveContext";
import { getImgUrl } from "../../utils/cine-utility";
import MovieRating from "../MovieRating";
import MovieDetailsModal from "./MovieDetailsModal";
export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { moviesData, setMoviesData } = useContext(MovieContext);

  function handleAddToCart(event, movie) {
    event.stopPropagation();
    const found = moviesData.find((m) => m.id === movie.id);

    if (!found) {
      setMoviesData([...moviesData, movie]);
      alert(`Added ${movie.title} to cart.`);
    } else {
      console.log(`${movie.title} is already in the cart.`);
    }
  }
  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  function handleMovieSelection() {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          handleAddCart={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/24 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <MovieRating value={movie.rating} />
            </div>
            <a
              onClick={(e) => handleAddToCart(e, movie)}
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
