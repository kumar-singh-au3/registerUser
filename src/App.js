import React, { useState } from "react";
import Login from "./components/Login";
import ThankYou from './components/ThankYou'
// import emailSend from './components/email'
import firebase from 'firebase';


function App() {
  

  const [thanks, changeThanks] = useState(false);
  const [name, changeName] = useState("");
  const [number, changeNumber] = useState("");
  const [email, changeEmail] = useState("");
  function validateEmail(str) {
    var re = /\S+@\S+\.\S+/;
    return re.test(str);
  }
  function validateName(str) 
{  
   return /^[A-z ]+$/.test(str);
}

  const register=()=>{
    if (!validateName(name)){
      alert("Not valid name");
      return
    }
    if(!validateEmail(email))
    {
      alert('Not valid email')
      return
    }
    if(number.length!==10)
    {
      alert('number must be 10 digit')
      return
    }
    // emailSend()
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection('users').add({
      name,
      email,
      number,
      time: new Date()
    });

    changeThanks(true)
    

  }

  if(thanks)
  {
    return <ThankYou />
  }

  return (
    <Login
      name={name}
      number={number}
      email={email}
      changeName={changeName}
      changeNumber={changeNumber}
      changeEmail={changeEmail}
      register={()=>register()}
    />
  );
}

export default App;
