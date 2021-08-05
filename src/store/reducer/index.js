import firebase from '../../config/firebase'

const INITIAL_STATE = {
   user : [],
   current_user : {
    username : '',
    email : '',
    password: '',
    uid : '',
    date : '',
    firstName : '',
    lastName : '',
    phone : '',
    country : '',
    city : '',
    profileimage : ''
   }
}

export default (state = INITIAL_STATE, action)=>{
 firebase.database().ref('Users/'+action.payload+'/profile').on('value', (snap)=>{
//  state.current_user.username = snap.val().username;
//  state.current_user.email = snap.val().email;
//  state.current_user.password = snap.val().password;
//  state.current_user.uid = snap.val().uid;
//  state.current_user.date = snap.val().date;
//  state.current_user.firstName = snap.val().firstName;
//  state.current_user.lastName = snap.val().lastName;
//  state.current_user.phone = snap.val().phone;
//  state.current_user.phone = snap.val().phone;
//  state.current_user.country = snap.val().country;
//  state.current_user.city = snap.val().city; 
 })
    return state;
}
