import React from "react";
import "../../stylesheet/Header.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logo.png";
import movies from "../../assets/icon-movies.png";
import series from "../../assets/icon-series.png";
import filters from "../../assets/icon-filter.png";
import login from "../../assets/icon-login.png";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";

const Header = ({
  isLocation,
  filterName,
  filterhandle,
  filterYear,
  programsLocation,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const clickLocationMovies = () => {
    programsLocation("#/movies");
  };
  const clickLocationSeries = () => {
    programsLocation("#/series");
  };

  const validation = isLocation === "#/movies" || isLocation === "#/series";

  const openFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const renderSelectionsPrograms = () => {
    return (
      <section className="section-add">
        <Link to="/movies" onClick={clickLocationMovies}>
          <div
            className={`section-add__div ${
              isLocation === "#/movies" ? "markRed" : ""
            } `}
          >
            <img src={movies} alt="movies" className="section-add__div--img" />
            <h4 className="section-add__div--title">Movies</h4>
          </div>
        </Link>

        <Link to="/series" onClick={clickLocationSeries}>
          <div
            className={`section-add__div ${
              isLocation === "#/series" ? "markRed" : ""
            } `}
          >
            <img src={series} alt="series" className="section-add__div--img" />
            <h4 className="section-add__div--title">Series</h4>
          </div>
        </Link>

        <div onClick={openFilters} className="section-add__div filter">
          <img src={filters} alt="filters" className="section-add__div--img" />
          <h4 className="section-add__div--title">Filters</h4>
        </div>
      </section>
    );
  };

  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__img" />
      {validation ? renderSelectionsPrograms() : null}
      <nav>
        <ul className="nav">
          <li className="nav__list">
            <h3 className="nav__list--login">Login</h3>

            <Link to="/login" className="nav__list--link">
              <img src={login} alt="icon-login" className="nav__list--link" />
            </Link>
          </li>
          <li className="nav__list">
            <button className="nav__list--btn">Star your free trial</button>
          </li>
        </ul>
      </nav>
      {validation ? (
        <section className="section-form">
          {isFilterOpen ? (
            <Filters
              filterName={filterName}
              filterhandle={filterhandle}
              filterYear={filterYear}
            />
          ) : (
            ""
          )}
        </section>
      ) : (
        ""
      )}
    </header>
  );
};

Header.propTypes = {
  isLocation: PropTypes.string,
  filterName: PropTypes.string,
  filterhandle: PropTypes.func,
  filterYear: PropTypes.string,
  programsLocation: PropTypes.func,
};

export default Header;
