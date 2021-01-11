import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import User from '../../interfaces/user.interface';

import { RootState } from '../../redux/root-reducer';

import { LikedByContainer, LikedByUsersList } from './image-likes.styles';

interface Props {
  likes: User[],
}

const ImageLikes: React.FC<Props> = ({ likes }) => {
  if (likes.length > 1) {
    return (
      <LikedByContainer>
        Liked by&nbsp;
        <LikedByUsersList>
          <span key={likes[0].uid}>{likes[0].displayName}</span>
        </LikedByUsersList>
        &nbsp;and&nbsp;
        <LikedByUsersList>others</LikedByUsersList>
      </LikedByContainer>
    );
  }
  if (likes.length === 1) {
    return (
      <LikedByContainer>
        Liked by&nbsp;
        <LikedByUsersList>
          <span key={likes[0].uid}>{likes[0].displayName}&nbsp;</span>
        </LikedByUsersList>
      </LikedByContainer>
    );
  }

  return <div />
}

const mapStateToProps = createStructuredSelector<RootState, {}>({
  
});

export default connect(mapStateToProps)(ImageLikes);