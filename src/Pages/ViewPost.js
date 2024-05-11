import React from "react";

import Header from "../Components/Header/Header";
import View from "../Components/View/View";
import Post from "../store/PostContext";

function ViewPost(props) {
  return (
    <div>
      <Header />
        <View />
    </div>
  );
}

export default ViewPost;
