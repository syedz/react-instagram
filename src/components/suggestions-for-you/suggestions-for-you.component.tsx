import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { RootState } from '../../redux/root-reducer';
import { CurrentUser, selectCurrentUser } from '../../redux/user/user.selectors';
import PhotoCircle from '../photo-circle/photo-circle.component';

import './suggestions-for-you.styles.scss';

interface Props {
  currentUser: CurrentUser,
}

const SuggestionsForYou: React.FC<Props> = ({ currentUser }) => (
  <div className="suggestions-for-you">
    <div className="photo-tile">
      <div className="photo">
        <PhotoCircle 
          url={currentUser?.photoURL} 
          alt={currentUser?.email} 
          width={60}
        />
      </div>
      <div className="text">
        <div className="display-name">{currentUser?.displayName}</div>
        <div className="email">{currentUser?.email}</div>
      </div>
      <div className="link">
        <Link to="">Switch</Link>
      </div>
    </div>

    <div className="suggestions">
      <h1>Suggestions for you</h1>
      {[...Array(5)].map((value, index) => (
        <div key={index} className="photo-tile">
          <div className="photo">
            <PhotoCircle 
              url={currentUser?.photoURL} 
              alt={currentUser?.email} 
              width={40}
            />
          </div>
          <div className="text">
            <div className="display-name">{currentUser?.displayName}</div>
            <div className="email">{currentUser?.email}</div>
          </div>
          <div className="link">
            <Link to="">Follow</Link>
          </div>
        </div>
      ))}
    </div>

  </div>
);

const mapStateToProps = createStructuredSelector<RootState, {
  currentUser: CurrentUser
}>({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(SuggestionsForYou);