import React, { useContext, useEffect } from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Signup from "./Pages/Signup";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import  { AuthContext} from "./store/FirebaseContext";
import Login from "./Pages/Login";
// import { Firebase } from "./firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const {setUser}= useContext(AuthContext)
  const auth= getAuth()
  useEffect(()=>{
    onAuthStateChanged(auth,((user)=>{
      setUser(user)
      // console.log(user)
    }))
  })
  return (
        <div>
          <Home />
        </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "create",
    element: <Create />,
  },
  {
    path: "view",
    element: <View />,
  },
]);

export default router;
