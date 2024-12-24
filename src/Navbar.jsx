import { useState, useEffect, useMemo } from "react";
import React from "react"
import logo from "./Icons/logo.png"
import location from "./Icons/location.png"
import searchIcon from "./Icons/search.png";
import indianflag from "./Icons/indianflag.png"
import addchart from "./Icons/addchart.png"
import "./Navbarchange.css"


const Navbar = () => {
    const [value, setValue] = useState([]);
    const [filterData, setFilterData] = useState("all");

    const categoryData = useMemo(() => {
        let arr = []
        value.filter((item) => {
            if (!arr.includes(item.category)) {
                arr.push(item.category)
            }
        });
        return arr

    }, [value]);
   
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((a) => a.json())
            .then((data) => {
                setValue(data.products);
            });
    }, []);

    return (
        <>
            <div className="insertcolour">
                <div className="navBarflex">
                    <img src={logo} alt="logo" className="applogo" />
                    <img src={location} alt="location" className="locationlogo" />
                    <div className="changefrontsize">Deliver to Tiruppur 641604</div>
                    <div>
                        <select value={filterData}onChange={(e) => setFilterData(e.target.value)} >
                            <option>All</option>
                            {categoryData.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input type="text" placeholder="Search of E-commerce Things" className="changeheight"></input>
                        <button className="search-button">
                            <img src={searchIcon} alt="Search" className="search-icon" />
                        </button>
                    </div>

                    <div style={{ display: "flex" }}>
                        <img src={indianflag} alt="indianflag" className="sizechange" />
                        <select className="changesize">
                            <option><input type="radio" id="english" name="language" value="EN" checked /> <label for="english">En - English</label></option>
                            <option><input type="radio" id="hindi" name="language" value="HI" /> <label for="hindi">Hi - हिन्दी</label></option>
                            <option><input type="radio" id="tamil" name="language" value="TA" /> <label for="tamil">Ta - தமிழ்</label></option>
                            <option><input type="radio" id="telugu" name="language" value="TE" /> <label for="telugu">Te - తెలుగు</label></option>
                            <option><input type="radio" id="kannada" name="language" value="KN" /> <label for="kannada">Ka - ಕನ್ನಡ</label></option>
                            <option><input type="radio" id="malayalam" name="language" value="ML" /> <label for="malayalam"> Ml- മലയാളം</label></option>
                            <option><input type="radio" id="bengali" name="language" value="BN" /> <label for="bengali">Bn - বাংলা</label></option>
                            <option><input type="radio" id="marathi" name="language" value="MR" /> <label for="marathi">Mr - मराठी</label></option>
                        </select>
                        <div className="d2">
                            <span>Hello,praveen</span>
                            <span>Account & Lists</span>
                        </div>
                        <div className="d3">
                            <span>Returns</span>
                            <span>& Orders</span>
                        </div>
                        <img src={addchart} alt="addchart" className="d4" />
                    </div>
                </div>
            </div>
            

        </>
    )
}
export default Navbar;