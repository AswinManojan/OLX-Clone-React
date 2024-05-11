import React, { useContext, useState } from "react";
import {collection, getFirestore,doc, setDoc } from "firebase/firestore"; 
import Logo from "../../olx-logo.png";
import "./Signup.css";
import {FirebaseContext} from "../../store/FirebaseContext";
import {getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";


export default function Signup() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useContext(FirebaseContext);
  const auth = getAuth(firebase);
  // console.log(auth,"This is the auth")
  const db=getFirestore();
  // console.log(db,"This is the firestore")
  const userCollection= collection(db,"users");
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // console.log(userCredential);
        updateProfile(userCredential.user,{displayName:user}).then(()=>{
          // console.log(userCredential)
          setDoc(doc(userCollection, userCredential.user.uid),{
            id: userCredential.user.uid,
            username: user,
            phone: phone
          }).then(()=>{
            // console.log("successsasasdsa");
            navigate("/login");
          })
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={user}
            defaultValue="John"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            name="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="../login">Login</Link>
      </div>
    </div>
  );
}
