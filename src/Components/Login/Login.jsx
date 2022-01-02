import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Login.css";
import { Auth, provider } from "../../Firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER } from "../../Reducer/Actions";
import App from "../../App";

function Login({ reloader }) {
  const dispatch = useDispatch();
  const signIn = (e) => {
    console.log("Authentication");
    e.preventDefault();
    signInWithPopup(Auth, provider)
      .then((result) => {
        console.log(result);
        dispatch({
          payload: result.user,
          type: "SET_USER",
        });
        //        setPageReload(true);
        //reloader(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
