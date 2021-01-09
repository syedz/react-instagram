import styled, { css } from 'styled-components';

export const PhotoCircleDetailsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const PhotoContainer = styled.div`
  align-self: center;
`;

export const TextContainer = styled.div`
  align-self: center;
  
  font-size: 12px;
  .display-name {
    font-size: 13px;
    font-weight: bolder;
  }
  .email {
    color: grey;
  }
`;