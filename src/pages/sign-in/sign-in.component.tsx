import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';

import { googleSignInStart, setCurrentUser } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

interface EmailPassword {
	email: string,
	password: string,
}

interface Props {
	googleSignInStart: () => void,
	setCurrentUser: (user: any) => void,
}

class SignIn extends React.Component<Props> {
	state: EmailPassword;

	constructor(props: any) {
		super(props);
		this.state = { email: '', password: '' };
	}

	handleChange = async (event: any) => {
		const { value, name } = event.target;
		this.setState({ [name]: value }, () => console.log(this.state));
	}

	render() {
		const { googleSignInStart } = this.props;

		return (
			<div className="sign-in">
				<div className="left"></div>
				<div className="right">
					<div className="container email-password">
						<Logo className="logo"></Logo>
						
						<div className="email-password-form">
							<form>
								<FormInput
									name="email" 
									type="email" 
									handleChange={this.handleChange}
									value={this.state.email} 
									placeholder="Email"
									required
								/>
								<FormInput
									name="password" 
									type="password" 
									handleChange={this.handleChange}
									value={this.state.password} 
									placeholder="Password"
									required
								/>
								<CustomButton type="submit">
									Sign in
								</CustomButton>
							</form>
						</div>
						<div className="or-container">or</div>
						<div className="social-sign-in">
							<CustomButton 
								type="button" 
								isGoogleSignIn
								onClick={googleSignInStart}
							>
									Sign in with Google
							</CustomButton>
						</div>
					</div>
					<div className="container no-account">
							Don't have an account? <Link to="/sign-up">Sign up</Link>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: any) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	setCurrentUser: (user: any) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignIn)