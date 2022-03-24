import PropTypes from 'prop-types';
import "../../stylesheet/Programs.scss";
import Nav from "../funcionalities/Nav/Nav";
import React from "react";

const Series = ({ data, handleClickDesc, click , handlerChangePage , page}) => {
  const handleClick = (eve) => {
    handleClickDesc(parseInt(eve.currentTarget.id));
  };

  const first = page * 10;
  const last = page * 10 + 10;

  const renderSeries = data.slice(first, last).map((serie) => {
    return (
      <li key={serie.id} id={serie.id} onClick={handleClick} className="list">
        <img src={serie.images} alt={serie.title} className="list__img" />
        <div className={`list__div ${click === serie.id?"translate":""}`}>
        <h2 className="list__div--title">{serie.title}</h2>
        {click === serie.id ? (
          <>
            <h4 className="list__div--h4">{serie.releaseYear}</h4>
            <p className="list__div--text">{serie.description}</p>
          </>
        ) : null}</div>
      </li>
    );
  });
  return (
    <section className="section">
      <h2 className="section__title">Popular Series</h2>
      <ul className="section__row">{renderSeries}</ul>
      <Nav handlerChangePage={handlerChangePage} page={page} data={data}/>
    </section>
  );
};

Series.propTypes = {
  data: PropTypes.array.isRequired,
  handleClickDesc:PropTypes.func.isRequired,
  click:PropTypes.string,
  handlerChangePage:PropTypes.func.isRequired,
  page:PropTypes.string.isRequired
}

export default Series;
