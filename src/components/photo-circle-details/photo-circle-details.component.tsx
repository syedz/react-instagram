import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState } from '../../redux/root-reducer';

import { CurrentUser, selectCurrentUser } from '../../redux/user/user.selectors';
import PhotoCircle from '../photo-circle/photo-circle.component';
import { PhotoContainer, PhotoCircleDetailsContainer, TextContainer } from './photo-circle-details.styles';

interface Props {
  currentUser: CurrentUser,
}

const PhotoCircleDetails
: React.FC<Props> = ({ currentUser }) => {
  return (
    <PhotoCircleDetailsContainer>
      <PhotoContainer>
        <PhotoCircle 
          url={currentUser?.photoURL}
          alt={currentUser?.email}
          width={40}
        />
      </PhotoContainer>
      <TextContainer>
        <div className="display-name">{currentUser?.displayName}</div>
        <div className="email">{currentUser?.email}</div>
      </TextContainer>
    </PhotoCircleDetailsContainer>
)};

const mapStateToProps = createStructuredSelector<RootState, {
  currentUser: CurrentUser
}>({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(PhotoCircleDetails);