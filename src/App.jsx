import { React, useState } from "react";
import "./App.css"
import Navbar from "./components/navbar/navbar";
import Home from "./components/main/Home";

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  );
}

export default App;
