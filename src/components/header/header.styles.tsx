import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgba(219,219,219, 1);
`;

export const HeaderWrapper = styled.div`
  width: 800px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  width: 120px;
`;

export const IconList = styled.div`
  color: black;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const IconItem = styled(Link)`
  cursor: pointer;
  padding: 10px 15px;
  font-size: 15px;
  font-weight: 300;
  color: black;
`;