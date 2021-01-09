import React from 'react';

import IPhotoCircleProps from '../../interfaces/props.interface';
import { PhotoContainer } from './photo-circle.styles';

const PhotoCircle: React.FC<IPhotoCircleProps> = ({ url, alt, ...props }) => (
  <PhotoContainer src={url} alt={alt} {...props} />
);

export default PhotoCircle;