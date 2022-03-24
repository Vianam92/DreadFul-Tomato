import React from 'react'
import PropTypes from 'prop-types';
import "../../stylesheet/Filters.scss";
import lupa from "../../assets/search-interface-symbol.png";

const Filters = ({ filterName, filterhandle, filterYear } , props) => {
  const handleFilter = (ev) => {
    filterhandle({
      key: "name",
      value: ev.target.value,
    });
  };

  const filterYearHandler = (ev) => {
    filterhandle({
      key: "year",
      value: ev.target.value,
    });
  };

  return (
    <form onSubmit={(ev) => ev.preventDefault()} className="form col-12">
      <img src={lupa} alt={lupa} className="form__search"/>
      <input
      className="form__input-name"
        type="text"
        name={props.inputName}
        id={props.inputName}
        autoComplete="off"
        placeholder="Name"
        onChange={handleFilter}
        value={filterName}
      />
      <input
      className="form__input-year"
        type="number"
        min="1900"
        max="2099"
        step="1"
        placeholder="1900 - 2099"
        name="year"
        onChange={filterYearHandler}
        value={filterYear}
      />
    </form>
  );
};

Filters.defaultProps = {
  inputName:"name"
};

Filters.propTypes = {
id:PropTypes.string,
value:PropTypes.string,
onChange:PropTypes.func.isRequired,
type:PropTypes.string.isRequired,
};

export default Filters;
