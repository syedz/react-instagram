import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { 
  faUser,
  faHeart,
  faCompass,
} from '@fortawesome/free-regular-svg-icons';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import { RootState } from '../../redux/root-reducer';

import { CurrentUser, selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions';
import { 
  HeaderContainer,
  HeaderWrapper,
  IconItem,
  IconList,
  LogoContainer
} from './header.styles';

import PhotoCircle from '../photo-circle/photo-circle.component';

interface Props {
  currentUser?: CurrentUser,
  signOutStart?: () => void,
}

const Header: React.FC<Props> = ({ currentUser, signOutStart }) => (
  <HeaderContainer>
    <HeaderWrapper>
      <LogoContainer to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>
      <IconList>
        <IconItem to="">
          <FontAwesomeIcon icon={faHome} />
        </IconItem>
        <IconItem to="">
          <FontAwesomeIcon icon={faUser} />
        </IconItem>
        <IconItem to="">
          <FontAwesomeIcon icon={faHeart} />
        </IconItem>
        <IconItem to="">
          <FontAwesomeIcon icon={faCompass} />
        </IconItem>
        {
          currentUser ? 
            <IconItem as='div' onClick={signOutStart}>
              <PhotoCircle 
                url={currentUser.photoURL} 
                alt={currentUser.email} 
                width={20}
              />
            </IconItem> :
            <div />
        }
      </IconList> 
    </HeaderWrapper>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector<RootState, { 
  currentUser: CurrentUser;
}>({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: any) => ({
  signOutStart: () => dispatch(signOutStart()),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Header);