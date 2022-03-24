import React from "react";
import PropTypes from 'prop-types';
import "../../stylesheet/Home.scss"
import movie from "../../assets/movies.png"
import serie from "../../assets/series.png"
import { Link } from 'react-router-dom';

const Home = ({programsLocation}) =>{
  const clickLocationMovies = () =>{
    programsLocation("#/movies")
  };
  const clickLocationSeries = () =>{
    programsLocation("#/series")
  };
return(
    <section className="main">
    <Link to="/movies" className="main__link" onClick={clickLocationMovies}>
      <img src={movie} alt="Imagen de Movies" className="main__link--img"/>
      <h4 className="main__link--title">Movies</h4>
      </Link>
      <Link to="/series" className="main__link" onClick={clickLocationSeries}>
      <img src={serie} alt="Imagen de Series" className="main__link--img"/>
      <h4 className="main__link--title">Series</h4>
      </Link>
    </section>
)
};

Home.propTypes = {
  programsLocation: PropTypes.func.isRequired,
}

export default Home;