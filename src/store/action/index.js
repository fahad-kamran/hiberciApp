import firebase from '../../config/firebase';

const set_user =(email, password,history)=>{
     return (dispatch)=>{
        //  console.log(email , password)
        // console.log("signIn Function")

        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    var user = userCredential.user;
    console.log(user.uid)   
    dispatch({type : 'SETUSER' , payload : user.uid})
    history.push('/')
  })
  .catch((error) => {
   alert(`hiberci ===> developed by Fahad Karan  ===>  ${error.message}`)
  });
    }
}

export{ 
    set_user
}