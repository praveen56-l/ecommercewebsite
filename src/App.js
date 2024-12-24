import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Discription from './Discription';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Discription />
      <Footer/>
      {/* <Categories /> */}
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigation/>} />


          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
