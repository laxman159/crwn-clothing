
import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup.component";
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import  {selectCurrentUser} from './redux/user/user.selectors';
import {createStructuredSelector} from 'reselect'

import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component{


unsubscribeFrumAuth = null

componentDidMount(){
  const {setCurrentUser} = this.props;

  this.unsubscribeFrumAuth= auth.onAuthStateChanged( async userAuth => {
   
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
        
      } else {
        setCurrentUser(userAuth);
      }
      
  });
}
componentWillUnmount(){
  this.unsubscribeFrumAuth();
}


 render(){
  return (

    <div >
      <Header />
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route  path='/shop' component={ShopPage} />
       <Route exact path='/checkout' component={CheckoutPage} />
       <Route 
        exact 
        path='/signin' 
        render={() =>
          this.props.currentUser ? (
            <Redirect to='/'/>
        ):(
          <SignInAndSignUpPage />
        )
        }
         />
     </Switch>
    </div>
  );
}
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(
  mapStateToProps,
   mapDispatchToProps
   )
   (App);
