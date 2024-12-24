// import react from "react"
import amazon from "./amazon.PNG"
import "./footer.css"
// import india from "./india.PNG"
const Footer = () => {
     return (
          <>
               <div className="maindiv">
                    <div className="back">
                         <h2 className="backto">Back to top</h2>
                         <div className="header">
                              <ul>
                                   <li>Get to Know Us</li>
                                   <li>Connect with Us</li>
                                   <li>Make Money with Us</li>
                                   <li>Let Us Help You</li>
                              </ul>
                         </div>

                         <div>
                              <ul className="head1">
                                   <li className="a1">About Amazon <br></br></li><br></br>
                                   <li>Careers <br></br></li><br></br>
                                   <li>Press Releases <br></br></li><br></br>
                                   <li>Amazon Science</li>
                              </ul>
                         </div>

                         <div>
                              <ul className="boxtwo">
                                   <li className="a2">Facebook <br></br></li><br></br>
                                   <li>Twitter <br></br> </li><br></br>
                                   <li>Instagram <br></br></li><br></br>
                              </ul>
                         </div>

                         <div>
                              <ul className="boxthree">
                                   <li className="a3">Sell on Amazon <br></br></li><br></br>
                                   <li>Sell under Amazon Accelerator <br></br> </li><br></br>
                                   <li>Protect and Build Your Brand <br></br></li><br></br>
                                   <li>Amazon Global Selling <br></br> </li><br></br>
                                   <li>Supply to Amazon <br></br> </li><br></br>
                                   <li>Become an Affiliate <br></br> </li><br></br>
                                   <li>Fulfilment by Amazon <br></br> </li><br></br>
                                   <li>Advertise Your Products <br></br> </li><br></br>
                                   <li>Amazon Pay on Merchants <br></br> </li><br></br>
                              </ul>
                         </div>

                         <div>
                              <ul className="boxfour">
                                   <li className="a4">Your Account <br></br></li><br></br>
                                   <li>Returns Centre <br></br> </li><br></br>
                                   <li>Recalls and Product Safety Alerts <br></br></li><br></br>
                                   <li>100% Purchase Protection <br></br></li><br></br>
                                   <li>Amazon App Download <br></br></li><br></br>
                                   <li>Help <br></br></li><br></br>
                              </ul>
                         </div>

                       <div className="btn">  
                       <hr className="hrline"></hr>
                       <div className="amazonimg">
                              <img src={amazon} alt="amazon"/>
                         </div>
                         <select name="dept">
                              <option value="en">English</option>
                              <option value="hi">Hindi</option>
                              <option value="ta">Tamil</option>
                              <option value="kn">Kannada</option>
                              <option value="bn">Bengali</option>
                              <option value="mr">Marathi</option>
                         </select>
                         <div className="india">
                         {/* <img src={india} alt="india"/> */}
                         <input class="btn2" type="India" value="India"></input>
                         </div>
                         </div>
                        
                    </div>
               </div>

               <div className="lastfooter">
                    <div>
                         <ul className="line1">
                              <li className="b1">AbeBooks<br></br></li>
                              <li >Books, art <br></br></li>
                              <li>& collectibles <br></br><br></br></li>
                              <li>Shopbop <br></br></li>
                              <li>Designer <br></br></li>
                              <li>Fashion Brands</li>
                         </ul>
                    </div>

                    <div>
                         <ul className="line2">
                              <li className="b2">Amazon Web Services <br></br></li>
                              <li >Scalable Cloud <br></br></li>
                              <li>Computing Services<br></br><br></br></li>
                              <li>Amazon Business <br></br></li>
                              <li>Everything For <br></br></li>
                              <li>Your Business</li>
                         </ul>
                    </div>
                    <div>
                         <ul className="line3">
                              <li className="b3">Audible</li><br></br>
                              <li className="b33">Download<br></br></li>
                              <li>Audio Books<br></br><br></br></li>
                              <li>Prime Now<br></br></li>
                              <li>2-Hour Delivery<br></br></li>
                              <li>on Evertday Items<br></br></li>

                         </ul>
                    </div>
                    <div>
                         <ul className="line4">
                              <li className="b4">IMDb <br></br></li>
                              <li >Movies, TV<br></br></li>
                              <li>& Celebrities<br></br><br></br></li>
                              <li>Amazon Prime Music<br></br></li>
                              <li>100 million songs, ad-free<br></br></li>
                              <li>Over 15 million podcast episodes<br></br></li>
                         </ul>
                    </div>

                    <div className="last">
                         <h5 className="l1">Conditions of Use & Sale</h5>
                         <h5 className="l2">Privacy Notice</h5>
                         <h5 className="l3">Interest-Based Ads</h5>
                    </div>
                    <div>
                    <p className="p">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
                    </div>

               </div>

          </>
     )
}
export default Footer;
