import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./App.js";
import Context, { FirebaseContext } from "./store/FirebaseContext.js";
import { Firebase } from "./firebase/config";
import Post from "./store/PostContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={ Firebase }>
      <Post>
        <Context>
          <RouterProvider router={router} />
        </Context>
      </Post>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
