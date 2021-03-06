import styled, { css } from 'styled-components';

import IPhotoCircleProps from '../../interfaces/props.interface';

const getPhotoWidthStyles = (props: IPhotoCircleProps) => {  
  if (props.width) {
    return css`
      width: ${props.width}px;
    `;
  } else {
    return css`width: 30px;`;
  }
};

const getPhotoBorderStyles = (props: IPhotoCircleProps) => {
  if (props.borderWidth) {
    return css`
      padding: 2px;
      border: ${props.borderWidth}px solid lightblue;
    `;
  }
}

export const PhotoContainer = styled.img`
  border-radius: 50%;

  ${getPhotoWidthStyles}
  ${getPhotoBorderStyles}
`;