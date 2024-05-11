import React, { useContext, useState } from "react";

import Logo from "../../olx-logo.png";
import "./Login.css";
// import FirebaseContext from "../../store/FirebaseContext";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../store/FirebaseContext";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useContext(FirebaseContext);
  const auth = getAuth(firebase);
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // alert("logged in")
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            name="email"
            defaultValue="John"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to="../signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
