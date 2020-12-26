import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import FormInput from '../../components/form-input/form-input.component';

import './sign-up.styles.scss';

interface EmailPassword {
    email: string,
    password: string,
}

class SignUp extends React.Component<EmailPassword> {
    state: EmailPassword;

    constructor(props: any) {
        super(props);

        this.state = { email: '', password: '' };
    }

    handleChange = async (event: any) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-up">
                <div className="left"></div>
                <div className="right">
                    <Logo className="logo"></Logo>
                    
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
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp