import React from "react";
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp.jsx';
import Home from '../components/Home';
import Profile from '../components/Profile';
import MyAccount from '../components/MyAccount';
import firebase from '../config/firebase'
import {useState ,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const MyRouter=()=> {
  const [user, setUser] = useState(null);
  useEffect(()=>{
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  });
},[])
  return (
    <Router>
       <Route exact path="/">
          {user?<Home />: <SignUp/>}
        </Route>
        <Route path="/Profile">
        {user?<Profile />: <SignUp/>}
        </Route>
        <Route path="/MyAccount">
        {user?<MyAccount />: <SignUp/>}
        </Route>
        <Route path="/SignIn">
          {user ? <Home /> : <SignIn />}
        </Route>
        <Route path="/SignUp">
        {user ? <Home /> : <SignUp />}
        </Route>
  </Router>
  );
}

export default MyRouter;
