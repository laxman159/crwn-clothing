import React from 'react';

import FormInput from '../form-imput/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = { 
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handelSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password,confirmPassword} = this.state;
        if(password != confirmPassword){
            alert("password dont match");
            return;
        }
        try{
                const { user }= await auth.createUserWithEmailAndPassword(email,password);

               await createUserProfileDocument(user, {displayName});
               this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
               });
        } catch (error) {
            
                console.log(error);
        }
    };
    handelChange = event =>{
        const{name,value} = event.target;
        this.setState({[name]: value });
    };

    render(){
        const {displayName, email, password,confirmPassword} = this.state;
        return(
            <div className ='sign-up'>

                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit= {this.handelSubmit}>
                    <FormInput
                    type = 'text'
                    name = 'displayName'
                    value = {displayName}
                    onChange = {this.handelChange}
                    label='Display Name'
                    required
                    />
                     <FormInput
                    type = 'email'
                    name = 'email'
                    value = {email}
                    onChange = {this.handelChange}
                    label='Email'
                    required
                    />
                    <FormInput
                    type = 'password'
                    name = 'password'
                    value = {password}
                    onChange = {this.handelChange}
                    label='Password'
                    required
                    />
                    <FormInput
                    type = 'password'
                    name = 'confirmPassword'
                    value = {confirmPassword}
                    onChange = {this.handelChange}
                    label='Confirm Password'
                    required
                    />

                    <CustomButton type = 'submit'>SIGN UP</CustomButton>


                </form>

            </div>
        );
    }
}

export default SignUp; 

