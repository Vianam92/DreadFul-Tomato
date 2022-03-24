import React from 'react'
import PropTypes from 'prop-types';
import "../../../stylesheet/Nav.scss";

const Nav = ({ handlerChangePage, data, page }) => {
  const handleChange = (ev) => {
    handlerChangePage(ev.target.id);
  };

  const renderList = () => {
    const list = [];
    const paintNumber = data.length / 10;
    const rendondear = paintNumber === 5.9 ? Math.round(5):Math.ceil(3);
    for (let i = 0; i <= rendondear; i++) {
      list.push(
        <li id={i} key={i} className={`bar__ul--list ${parseInt(page) === parseInt(i)?"visible":""}`} onClick={handleChange}>
          {[i + 1]}
        </li>
      );
    }
    return list;
  };

  return (
    <div className="bar">
      <small>
        <i className="fas fa-arrow-left"></i>
      </small>
      <ul className="bar__ul ">{renderList()}</ul>

      <small>
        <i className="fas fa-arrow-right"></i>
      </small>
    </div>
  );
};

Nav.propTypes ={
handlerChangePage:PropTypes.func.isRequired,
data:PropTypes.array.isRequired,
page:PropTypes.string.isRequired
}

export default Nav;
