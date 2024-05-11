import React from "react";

import Signup from "../Components/Signup/Signup";

// import { FirebaseContext } from "../store/FirebaseContext";
// import { Firebase } from "../firebase/config";

function SignupPage() {
  return (
    // <FirebaseContext.Provider value={Firebase}>
      <div>
        <Signup />
      </div>
    // </FirebaseContext.Provider>
  );
}

export default SignupPage;
