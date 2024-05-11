import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { AuthContext, FirebaseContext } from "../../store/FirebaseContext";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// import { getApp } from "firebase/app";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const {firebase} = useContext(FirebaseContext)
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const {user}= useContext(AuthContext)
  const firestore=getFirestore(firebase)
  const date = new Date().toDateString();
  const navigate=useNavigate()
   
  const handleSubmit=()=>{
    const storage = getStorage()
    const storageRef=   ref(storage, `/images/${image.name}`)
        uploadBytes(storageRef,image).then((snapshot)=>{
          getDownloadURL(snapshot.ref).then((imageURL)=>{
            const productsCollection= collection(firestore,"products")
              setDoc(doc(productsCollection),{
                name,
                category,
                price,
                imageURL,
                createdAt: date.toString(),
                userId: user.uid
              })
            navigate("/");
          }).catch((error)=>{
            alert(error)
            console.error("Error uploading image or saving product:", error);
          })
        })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price}
              onChange={(e)=>{
                setPrice(e.target.value)
              }} />
            <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
