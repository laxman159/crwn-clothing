
import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup.component";
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {Switch, Route} from 'react-router-dom';








class App extends React.Component{

constructor(){
  super();
  this.state = {currentUser: null};
}

unsubscribeFrumAuth = null

componentDidMount(){
  this.unsubscribeFrumAuth= auth.onAuthStateChanged( async userAuth => {
   
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({currentUser: userAuth});
      }

  });
}
componentWillUnmount(){
  this.unsubscribeFrumAuth();
}


 render(){
  return (

    <div >
      <Header currentUser={this.state.currentUser}/>
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/shop' component={ShopPage} />
       <Route exact path='/signin' component={SignInAndSignUpPage} />
     </Switch>
    </div>
  );
}
}

export default App;
