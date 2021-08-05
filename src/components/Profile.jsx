import TopHeader from './TopHeader';
import '../assets/css/Profile.css';
import AvatarIcon from '../assets/images/Avatar.png'
import {useState , useEffect} from 'react';
import firebase from '../config/firebase';
import {connect} from 'react-redux';
import Loader from './Loader';

const Profile=(props)=>{
 console.log(props.currentUser)
// var currentUser = props.currentUser;
// console.log(currentUser)
console.log("myProps==>", props)
   return(
    <>
    {props.loading ? <Loader /> : null}
    <TopHeader />
 {/* <section className="ProfileSection">
 <div className="ProfileImage">
<img src={state.profileImage == '' ? AvatarIcon : props.currentUser.profileImage} className="Avatar" alt="" />
   </div>
   <h1 className="text-center">{props}</h1>
   <button className="EditButton" onClick={()=>EditProfile(true)}>Edit Profile</button>
{image ?
<>
  <input type="file" onChange={(e)=>myuploadImage(e.target.files[0])} accept="image/*"  />
  <button className="EditButton" onClick={()=>UploadImages()}>Upload Image</button>
  </>
  :
  <button className="EditButton" onClick={()=>editimage(true)}>Edit Image</button> 
}


 </section> */}

    </>
   )
}
const mapStateToProps=(state)=>({
   currentUser : state.current_user
})
export default connect(mapStateToProps,null) (Profile);

