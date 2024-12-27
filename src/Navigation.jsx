import { Link, Navigate, NavLink,useNavigate } from "react-router-dom";


const Navigation=()=>{
    const Navigate=useNavigate() 
   return(
    <>
    <Link to="/beauty"></Link>
    <Link to="/fragrances"></Link>
    <Link to="/furniture"></Link>
    <Link to="/grocerices"></Link>
    </>
   )
}
