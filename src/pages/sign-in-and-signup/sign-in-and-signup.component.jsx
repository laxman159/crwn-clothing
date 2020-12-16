
import React from 'react';

import SignIn  from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-signup.styles.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-signup'>
       <SignIn/>
       <SignUp/>
    </div>
);

export default SignInAndSignUpPage;