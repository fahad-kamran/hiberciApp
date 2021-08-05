import '../assets/css/SignIn.css';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Loader from './Loader';
import {connect} from 'react-redux';
import {set_user} from '../store/action';
const SignIn=(props)=> {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    password: '',
    visiblity:false,
    loading: false,
  });
 const Signin=()=>{
 props.set_user(state.email, state.password,history);
 setState({ ...state, loading: true, email: '', password : '' });
  }
  return (
    <>
       {state.loading ? <Loader /> : null}
<div className="SignIn">
<div className="Signin-form">
  <h1 className="FormHeading">Sign In</h1>
  <div className="userName">
<div className="userIcon">
<PersonIcon />
</div>
<div className="Input">
<input value={state.email} onChange={(text)=>setState({...state,email:text.target.value})} type="text" placeholder="Enter Email"/>
</div>
  </div>
  <div className="password">
  <div className="userIcon">
<LockIcon />
</div>
<div className="Input">
<input value={state.password} onChange={(text)=>setState({...state,password:text.target.value})} type={state.visiblity? "text" : "password"} placeholder="Enter Password"/>
</div>
  <div className="visibilityIcon">
    {state.visiblity ?<VisibilityOffIcon onClick={()=>setState({...state,visiblity:false})}/>:

  <VisibilityIcon onClick={()=>setState({...state,visiblity:true})}/>
}
  </div>
  </div>

  <button onClick={()=>Signin()} className="LoginButton">Login</button>
  <p>Dont' have an account? <span onClick={()=>history.push('/SignUp')} style={{color:'#fff',fontStyle:'italic',fontWeight:'bold'}}>Sign Up</span></p>
</div>
</div>
</>
  );
}
const mapDispatchToProps=(dispatch)=>({
  set_user : (email, password,history) => dispatch(set_user(email, password,history)),
})
export default connect(null,mapDispatchToProps) (SignIn);
