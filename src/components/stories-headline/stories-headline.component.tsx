import React from 'react';
import { connect } from 'react-redux';
import Truncate from 'react-truncate';
import { createStructuredSelector } from 'reselect';

import { RootState } from '../../redux/root-reducer';
import { CurrentUser, selectCurrentUser } from '../../redux/user/user.selectors';
import PhotoCircle from '../photo-circle/photo-circle.component';

import './stories-headline.styles.scss';

interface Props {
  currentUser: CurrentUser,
}

const StoriesHeadline: React.FC<Props> = ({ currentUser }) => (
  <div className="stories-container">
    {[...Array(10)].map((value, index) => (
      <div key={index} className="story-container">
        <PhotoCircle 
          url={currentUser?.photoURL}
          alt={currentUser?.email}
          width={65}
          borderWidth={2}
        />
        <div className="name">
            <Truncate width={80} ellipsis={<span>...</span>}>
              {currentUser?.email}
            </Truncate>
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector<RootState, {
  currentUser: CurrentUser
}>({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(StoriesHeadline);