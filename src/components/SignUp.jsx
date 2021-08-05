
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import MailIcon from '@material-ui/icons/Mail';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../config/firebase';
import Loader from './Loader';
const SignUp=()=> {
  const history = useHistory();
  const [state, setState] = useState({
    userName: '',
    email:'',
    password: '',
    visiblity:false,
    Date: `${new Date().getDate()}-${new Date().getMonth()+1}-${new Date().getFullYear()}`
  });

const Signup=()=>{
if(state.userName != ''){
  firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
  .then((userCredential) => {
    // console.log(userCredential.user.uid)
   firebase.database().ref('Users/'+userCredential.user.uid+'/profile').set({
     username : state.userName,
     email : state.email,
     password: state.password,
     uid : userCredential.user.uid,
     date : state.Date,
     firstName : '',
     lastName : '',
     phone : '',
     country : '',
     city : '',
     profileimage : ''
   })
   history.push('/')
  })
  .catch((error) => {
   alert(`Sorry ${error.message}`);
  });
} 
else{
  alert("Please Enter User Name")
}
}

  return (
    <>
       {state.loading ? <Loader /> : null}
<div className="SignIn">
<div className="Signin-form">
  <h1 className="FormHeading">Sign Up</h1>
  <div className="userName">
<div className="userIcon">
<PersonIcon />
</div>
<div className="Input">
<input onChange={(text)=>setState({...state,userName:text.target.value})} type="text" placeholder="User Name"/>
</div>
  </div>
  <div className="Email">
<div className="userIcon">
<MailIcon />
</div>
<div className="Input">
<input onChange={(text)=>setState({...state,email:text.target.value})} type="text" placeholder="Email"/>
</div>
  </div>
  <div className="password">
  <div className="userIcon">
<LockIcon />
</div>
<div className="Input">
<input onChange={(text)=>setState({...state,password:text.target.value})} type={state.visiblity? "text" : "password"} placeholder="Password"/>
</div>
  <div className="visibilityIcon">
    {state.visiblity ?<VisibilityOffIcon onClick={()=>setState({...state,visiblity:false})}/>:

  <VisibilityIcon onClick={()=>setState({...state,visiblity:true})}/>
}
  </div>
  </div>

  <button onClick={()=>Signup()} className="LoginButton">Sign Up</button>
  <p>Already have an account? <span onClick={()=>history.push('/SignIn')} style={{color:'#fff',fontStyle:'italic',fontWeight:'bold'}}>Sign In</span></p>
</div>
</div>
</>
  );
}

export default SignUp;
