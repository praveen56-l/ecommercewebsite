import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApplicationContext } from "./Context";
import LandingPage from "./LandingPage";
import Categories from "./Categories";
const App = () => {
  const [categoryType, setCategoryType] = useState("all")
  return (
    <ApplicationContext.Provider value={{ categoryType, setCategoryType }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </ApplicationContext.Provider>
  );  
}

export default App;
