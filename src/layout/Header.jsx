import { useRecoilValue } from "recoil";
import { dataState } from "../state";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const data = useRecoilValue(dataState);

  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const navUL = document.getElementById("nav_menu");
    const icon = document.getElementById("icon");

    hamburger.addEventListener("click", () => {
      navUL.classList.toggle("show");
      icon.classList.toggle("fa-times-circle");
      icon.classList.toggle("fa-bars");
    });
  });

  return (
    <header>
      <nav role="navigation">
        <div className="nav_top">
          <div className="nav_inner_wrapper">
            <h2>The Planets</h2>
            <button
              aria-label="mobile-menu"
              className="hamburger"
              id="hamburger"
            >
              <i id="icon" className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        <ul id="nav_menu" className="nav_menu">
          {data.map((planet, index) => {
            return (
              <li
                className="list_item"
                data-name={planet.name.toLowerCase()}
                key={index}
              >
                <Link to={`/${planet.name.toLowerCase()}`}>
                  <div className="menu_item">
                    <div className="planet_menu_group">
                      <div
                        className={`circle ${planet.name.toLowerCase()}-color`}
                      ></div>
                      <p>{planet.name.toUpperCase()}</p>
                    </div>
                    <i className="fas fa-angle-right"></i>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
