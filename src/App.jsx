import { useState } from "react";
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
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
