import { useContext } from "react";
import MovieList from "./components/cinemovie/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { ThemeContext } from "./context/themeContext";

export default function Page() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`h-full w-full ${theme ? "dark" : ""}`}>
        <Header />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <MovieList />
        </div>
        <Footer />
      </div>
    </>
  );
}
