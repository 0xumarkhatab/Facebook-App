import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/SideBar/Sidebar";
import TheFeed from "./Components/Feed/Feed";
import Widgets from "./Components/Feed/Widgets";
import Login from "./Components/Login/Login";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { SET_USER } from "./Reducer/Actions";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <TheFeed />
            <Widgets />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
