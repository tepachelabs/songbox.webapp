import React from 'react';
import propTypes from 'prop-types';
import { Map } from 'immutable';
import { useDispatch } from 'react-redux';
import { IconButton } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import { FileListItemComponent } from 'components/file-list';
import { HeartIcon, HelpCircleIcon, MusicIcon } from 'components/icon';
import { playAudio } from 'store/actions/playerActions';
import { createFavorite, deleteFavorite } from 'store/actions/favoritesActions';
import { gray } from 'style/colors';

const getFavoriteIcon = (isFavorite) => {
  const fillHeartStatus = isFavorite ? gray : 'none';
  return <HeartIcon fill={fillHeartStatus} stroke={gray} />;
};

const getLinkStatusIcon = (isBroken) =>
  isBroken ? <HelpCircleIcon /> : <MusicIcon />;

export const AudioLeg = ({ item, currentSongPath }) => {
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const path = item.get('path');
  const isFavorite = item.get('isFavorite');
  const isBroken = item.get('isBroken');
  const name = isBroken
    ? `${t('common.brokenLink')} ${item.get('name')}`
    : item.get('name');

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
        {getFavoriteIcon(isFavorite)}
      </IconButton>
    </FileListItemComponent>
  );
};

AudioLeg.propTypes = {
  currentSongPath: propTypes.string,
  item: propTypes.instanceOf(Map).isRequired,
};
