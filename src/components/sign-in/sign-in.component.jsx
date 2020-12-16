import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-imput/form-input.component';

import CustumButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
       
    }
    handelSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handelChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }
    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>


                <form onSubmit = {this.handelSubmit}>

                <FormInput
                 name='email'
                  type='email' 
                  handelChange = {this.handelChange} 
                  value={this.state.email}
                  label= "email"
                   required/>

                <FormInput 
                name='password'
                type='password'
                value={this.state.email} 
                label="password"
                handelChange = {this.handelChange}
                required
                />
                <div className='buttons'>

                
                <CustumButton type='submit' >Sign In</CustumButton>
                <CustumButton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign in with Google
                    </CustumButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn; 