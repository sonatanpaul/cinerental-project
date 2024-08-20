import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MovieContext } from "./context/moiveContext";
import { ThemeContext } from "./context/themeContext";
import Page from "./Page";

export default function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [theme, setTheme] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <MovieContext.Provider value={{ moviesData, setMoviesData }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
