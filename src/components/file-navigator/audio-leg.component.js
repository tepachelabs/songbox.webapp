import React from 'react';
import propTypes from 'prop-types';
import { Map } from 'immutable';
import { useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core';

import { FileListItemComponent } from 'components/file-list';
import { HeartIcon, MusicIcon } from 'components/icon';
import { playAudio } from 'store/actions/playerActions';
import { createFavorite, deleteFavorite } from 'store/actions/favoritesActions';
import { gray } from 'style/colors';

const getFavoriteIcon = (isFavorite) => {
  const fillHeartStatus = isFavorite ? gray : 'none';
  return <HeartIcon fill={fillHeartStatus} stroke={gray} />;
};

export const AudioLeg = ({ item }) => {
  const dispatch = useDispatch();
  const name = item.get('name');
  const path = item.get('path');
  const isFavorite = item.get('isFavorite');

  const onFavoriteClick = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(item.get('favoriteId')));
    } else {
      dispatch(createFavorite({ name, path }));
    }
  };

  return (
    <FileListItemComponent
      name={name}
      icon={<MusicIcon />}
      onClick={() => dispatch(playAudio(path))}
    >
      <IconButton
        key={`favorite-cta-${name}`}
        edge="end"
        onClick={onFavoriteClick}
      >
        {getFavoriteIcon(isFavorite)}
      </IconButton>
    </FileListItemComponent>
  );
};

AudioLeg.propTypes = {
  item: propTypes.instanceOf(Map).isRequired,
};
