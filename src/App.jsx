import MovieList from "./components/cinemovie/MovieList";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <>
      <Header />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
        <MovieList />
      </div>
    </>
  );
}
