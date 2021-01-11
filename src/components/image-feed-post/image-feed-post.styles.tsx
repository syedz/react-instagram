import styled, { css } from 'styled-components';

export const ImagePostContainer = styled.div`
  background-color: white;
  border-radius: 3px;
  border: 1px solid rgba(219,219,219, 1);
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  padding: 10px;
`;

export const InteractionsContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
`;

export const LikeCommentShareList = styled.div`
  color: black;
  display: flex;
  .icon {
    cursor: pointer;
    font-size: 23px;
    margin-right: 15px;
  }
`;