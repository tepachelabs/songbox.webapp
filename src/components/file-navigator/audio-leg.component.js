import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Map } from 'immutable';
import { useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import {
  BrokenImageOutlined,
  Favorite,
  FavoriteBorder,
  MusicNoteOutlined,
} from '@material-ui/icons';

import { playAudio } from 'store/actions/playerActions';
import { createFavorite, deleteFavorite } from 'store/actions/favoritesActions';
import { FileListItemComponent } from 'components/file-list';
import { CircularProgressIcon } from 'components/circular-progress-icon';

const getFavoriteIcon = (isFavorite, isLoadingFavorite) => {
  if (isLoadingFavorite) return <CircularProgressIcon size={24} />;
  if (isFavorite) return <Favorite color="primary" />;
  return <FavoriteBorder color="primary" />;
};

const getLinkStatusIcon = (isBroken) =>
  isBroken ? (
    <BrokenImageOutlined color="primary" />
  ) : (
    <MusicNoteOutlined color="primary" />
  );

export const AudioLeg = ({ item, currentSongPath }) => {
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const path = item.get('path');
  const isFavorite = item.get('isFavorite');
  const isBroken = item.get('isBroken');
  const name = isBroken
    ? `${t('common.brokenLink')} ${item.get('name')}`
    : item.get('name');

  const [isLoadingFavorite, setIsLoadingFavorite] = useState(false);

  const onFavoriteClick = () => {
    const callback = () => setIsLoadingFavorite(false);
    setIsLoadingFavorite(true);
    if (isFavorite) {
      dispatch(deleteFavorite(item.get('favoriteId'), callback));
    } else {
      dispatch(createFavorite({ name, path }, callback));
    }
  };

  return (
    <FileListItemComponent
      name={name}
      icon={getLinkStatusIcon(isBroken)}
      selected={currentSongPath === path}
      isStrikethrough={isBroken}
      onClick={() => !isBroken && dispatch(playAudio(path))}
    >
      <IconButton
        key={`favorite-cta-${name}`}
        edge="end"
        onClick={onFavoriteClick}
      >
        {getFavoriteIcon(isFavorite, isLoadingFavorite)}
      </IconButton>
    </FileListItemComponent>
  );
};

AudioLeg.propTypes = {
  currentSongPath: propTypes.string,
  item: propTypes.instanceOf(Map).isRequired,
};
