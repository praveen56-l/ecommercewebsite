import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Categories from "./Categories";
import Discription from './Discription';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Discription />
      <Footer/>
      <Categories />
    </>
  );
}

export default App;
