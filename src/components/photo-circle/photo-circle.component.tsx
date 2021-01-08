import React from 'react';

import IPhotoCircleProps from '../../interfaces/props.interface';
import { PhotoContainer } from './photo-circle.component.styles';

import './photo-circle.component.styles';

const PhotoCircle: React.FC<IPhotoCircleProps> = ({ url, alt, ...props }) => {
  return (
    <PhotoContainer src={url} alt={alt} {...props} />
  );
}

export default PhotoCircle;