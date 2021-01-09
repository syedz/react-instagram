import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState } from '../../redux/root-reducer';

import { CurrentUser, selectCurrentUser } from '../../redux/user/user.selectors';

import PhotoCircleDetails from '../photo-circle-details/photo-circle-details.component';

import { HeaderContainer, ImagePostContainer, Image } from './image-feed-post.styles';

interface Props {
  currentUser: CurrentUser,
  post: any,
}

const ImageFeedPost: React.FC<Props> = ({ currentUser, post }) => {
  return (
    <ImagePostContainer>
      <HeaderContainer>
        <PhotoCircleDetails />  
      </HeaderContainer>
      <Image 
        src={post.url}
      />
    </ImagePostContainer>
)};

const mapStateToProps = createStructuredSelector<RootState, {
  currentUser: CurrentUser
}>({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(ImageFeedPost);