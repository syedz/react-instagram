import React from 'react';

import { 
  faUser,
  faHome,
  faHeart,
  faCompass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { 
  HeaderContainer, 
  HeaderWrapper, 
  IconItem, 
  IconList,
  LogoContainer
} from './header.styles';

import './header.styles.scss';

interface Props {}

const Header: React.FC<Props> = () => (
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
      </IconList> 
    </HeaderWrapper>
  </HeaderContainer>
);

export default Header;