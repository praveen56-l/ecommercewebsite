import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Discription from './Discription';
import Footer from './Footer';
import { ApplicationContext } from "./Context";
import { useState } from "react";
import Categories from "./Categories";
const App=()=> {
  const[categoryType,setCategoryType]=useState("all")
  return (
   <ApplicationContext.Provider value={{categoryType,setCategoryType}}>
    <>
      <Navbar />
      <Discription />
      <Footer/>
      <Categories />
    </>
    </ApplicationContext.Provider>
  );
}

export default App;
