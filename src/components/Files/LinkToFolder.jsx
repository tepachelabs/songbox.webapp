import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import folderIcon from './icons/folder.svg';

const LinkToFolder = ({ name, path }) => (
  <Link className="file-container" to={`/app${path}`}>
    <img
      className="icon"
      src={folderIcon}
      alt="folder-icon"
    />
    <div className="file-name-container folder">
      <p className="file-name">
        {'Unnamed file' && name}
      </p>
    </div>
  </Link>
);

LinkToFolder.propTypes = {
  name: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
};

export default LinkToFolder;
