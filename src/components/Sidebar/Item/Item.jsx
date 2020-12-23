import React from 'react';
import propTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

const Item = ({ icon, path, title }) => {
  const location = useLocation();
  const isSelected = location.pathname.startsWith(path);

  return (
    <Link className="nav-item" to={path}>
      <li className={`nav-li ${isSelected ? 'selected-item' : ''}`}>
        <div className="nav-item-container">
          { icon }
          <span className="item-title">{ title }</span>
        </div>
      </li>
    </Link>
  );
};

Item.propTypes = {
  icon: propTypes.instanceOf(Object).isRequired,
  path: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default Item;
