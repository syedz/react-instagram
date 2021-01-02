import React from 'react';

import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import SignIn from './pages/sign-in/sign-in.component';
import SignUp from './pages/sign-up/sign-up.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser, CurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import { RootState } from './redux/root-reducer';
import './App.css';

interface Props {
  currentUser?: CurrentUser,
  checkUserSession?: () => void,
}

class App extends React.Component<Props> {
  componentDidMount() {
    const { checkUserSession } = this.props;
    if (checkUserSession) checkUserSession();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route 
            exact 
            path='/' 
            render={() => 
              this.props.currentUser ?
                (<HomePage />) :
                (<Redirect to='/sign-in' />)
            }
          />
          <Route 
            exact 
            path='/sign-in' 
            render={() => 
              this.props.currentUser ?
                (<Redirect to='/' />) :
                (<SignIn />)
            }
          />
          <Route 
            exact 
            path='/sign-up' 
            render={() => 
            this.props.currentUser ?
              (<Redirect to='/' />) :
              (<SignUp />)
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, CurrentUser>({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: any) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
