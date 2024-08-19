import { useState } from "react";
import MovieList from "./components/cinemovie/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { MovieContext } from "./context/moiveContext";

export default function App() {
  const [moviesData, setMoviesData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ moviesData, setMoviesData }}>
        <Header />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}
