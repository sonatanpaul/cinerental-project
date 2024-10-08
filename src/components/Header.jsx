import { useContext, useState } from "react";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import ShoopingCart from "../assets/shopping-cart.svg";
import { MovieContext } from "../context/moiveContext";
import { ThemeContext } from "../context/themeContext";
import CardDetail from "./cinemovie/CardDetail";
export default function Header() {
  const [showCart, setShowCart] = useState(false);

  const { moviesData } = useContext(MovieContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      {showCart && <CardDetail onClose={() => setShowCart(false)} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={Ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                onClick={() => setTheme(!theme)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={theme ? Sun : Moon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                onClick={() => setShowCart(!showCart)}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ShoopingCart} width="24" height="24" alt="" />
                {moviesData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                    {moviesData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
