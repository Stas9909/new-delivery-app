import React from "react";
import { Outlet } from "react-router-dom";
// import MainPage from "../../pages/MainPage/MainPage";
import Header from "../Header/Header";
import './Wrapper.css';

const Wrapper = () => {
  return <div className="mainDiv">
    <Header/>
    <main>
      <Outlet/>     
    </main>
  </div>
}

export default Wrapper;