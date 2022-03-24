import PropTypes from 'prop-types';
import "../../stylesheet/Programs.scss";
import Nav from "../funcionalities/Nav/Nav";
import React from "react";

const Movies = ({ data, handleClickDesc, click, handlerChangePage, page , isLoading}) => {
  const handleClick = (eve) => {
    handleClickDesc(parseInt(eve.currentTarget.id));
  };

  const first = page * 10;
  const last = page * 10 + 10;

  const renderMovies = data.slice(first, last).map((movies) => {
    return (
      <li key={movies.id} id={movies.id} onClick={handleClick} className="list">
        <img src={movies.images} alt={movies.title} className="list__img" />
        <div className={`list__div ${click === movies.id ? "translate" : ""}`}>
          <h2 className="list__div--title">{movies.title}</h2>
          {click === movies.id ? (
            <>
              <h4 className="list__div--h4">{movies.releaseYear}</h4>
              <p className="list__div--text">{movies.description}</p>
            </>
          ) : null}
        </div>
      </li>
    );
  });
  return (
    <section className="section">
      <h2 className="section__title">Popular Movies</h2>
      <ul className="section__row">{isLoading?<p>...search</p>:renderMovies}</ul>
      <Nav handlerChangePage={handlerChangePage} page={page} data={data}/>
    </section>
  );
};

Movies.propTypes = {
  data: PropTypes.array.isRequired,
  handleClickDesc:PropTypes.func.isRequired,
  click:PropTypes.string,
  handlerChangePage:PropTypes.func.isRequired,
  page:PropTypes.string.isRequired
}

export default Movies;
