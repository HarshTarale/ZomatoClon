import RestaurantForm from '../../component/RestaurantForm/RestaurantForm';
import  './style.css'
import woldicon from './woldIcon.png';
import shopicon from './shopIcon.png';
import pageimg from './pageimg.png';
import scooterimg from './scooterimg.png';
import parcalimg from './parcalimg.png';
import listingimg from './listinging.avif';
import onlineorderimg from './onlineorderimg.avif';
import advertiseimg from './advertiseimg.svg';
import eventimg from './eventimg.svg';
import Hyperpureimg from './Hyperpureimg.svg';
import PawanKumarimg from './PawanKumarimg.png';
import Tusharimg from './Tusharimg.png';
import Jasmeetimg from './Jasmeetimg.png';
import mobailimg from './mobailimh.avif';
import laptopimg from './laptopimg.avif';
import laptop2img from './laptop2img.avif';
import Footer from '../../component/footer/Footer';
import { useNavigate } from 'react-router-dom';

  const AddtoReastaurant=()=>{

      const naviget= useNavigate();

    function loginNaviget(){
        naviget("/login");

    };


    return (
        <>
              <div className="hero">
                  <div className="nav">
                      <div className="logo">
                          <h2>zpmato</h2>
                          <p>for business</p>
                      </div>
                      <div className="nav-btn">
                          <a href="/business/advertise">Advertise</a>
                          <a href='/login' target='_self'><button>Login</button></a>
                      </div>
                  </div>
                  <div className="hero-content">
                      <p className="hero-content-p1">Partner with Zoamto <br />at 0% commission for the 1st month! </p>
                      <p className="hero-content-p2">And get ads worth INR 1500. Valid for new restaurant partners in select cities.</p>
                      <div className="hero-content-div1">
                          <button className="hero-content-div1-btn1" onClick={loginNaviget}> Register yout Restaurant</button>
                          <button className="hero-content-div1-btn2" onClick={loginNaviget} >Login to view to existing restaurant</button>


                      </div>
                      <p className="hero-content-p3">
                          Need help? <a href="tel:+91 97-38-38-38-38"> Contact +91 97-38-38-38-38</a>

                      </p>
                      <div className="hero-content-div2">
                          <h2>Get started with online ordering</h2>
                          <p>pleace keep the Documents ready for a smooth signup</p>
                          <div>
                              <ul>
                                  <li><i className="fas fa-check"> </i> FSSAI license copy <a href="/Fssai-Test"> (apply now)</a></li>
                                  <li> <i className="fas fa-check"> </i> Regular GSTIN <a  href='/viewform'> (apply now)</a> </li>
                                  <li><i className="fas fa-check"> </i> Your restaurant menu</li>
                              </ul>
                              <ul>
                                  <li><i className="fas fa-check"> </i> PAN card copy</li>
                                  <li><i className="fas fa-check"> </i> Bank account details</li>
                                  <li><i className="fas fa-check"> </i> Dish images for top 5 items</li>
                              </ul>

                          </div>
                      </div>

                  </div>

              </div>
              <div className="hero-2">
                  <h2>Why should you partner with Zomato?</h2>
                  <p>Zomato enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</p>
                  <div className="hero-2-content">
                      <div className="hero-2-content-info">
                          <img src={woldicon} alt="img"  />

                          <div>
                              <p style={{ color: "rgba(0, 0, 255, 0.74)", fontSize: "25px" }}>1000+ cities</p>
                              <p>in India</p>
                          </div>
                      </div>
                      <div className="hero-2-content-info">
                          <img src={shopicon} alt="img"  />


                          <div>
                              <p style={{ color: "rgba(0, 0, 255, 0.74)", fontSize: "25px" }}>3 lakh+</p>
                              <p>restaurant listings</p>
                          </div>
                      </div>

                      <div className="hero-2-content-info">
                          <i className="fa-solid fa-calendar-days" style={{color:"#74C0FC", fontSize:"25px" }}></i>

                          <div>
                              <p style={{color:"rgba(0, 0, 255, 0.74)", fontSize:"25px" }}>5.0 crore+</p>
                              <p>monthly orders</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="hero-3">
                  <h2>How it Works?</h2>
                  <div className="hero-3-content">
                      <div className="hero-3-content-info">
                          <img src={pageimg} alt="img"  />
                          <p className="hero-3-content-info-p1"> Step 1 </p>
                          <p className="hero-3-content-info-p2"> Create your page on Zomato    </p>
                          <p className="hero-3-content-info-p3"> Help users discover your place by creating a listing on Zomato   </p>

                      </div>
                      <div className="hero-3-content-info">
                          <img src={scooterimg} alt="img"  />
                          <p className="hero-3-content-info-p1"> Step 2 </p>
                          <p className="hero-3-content-info-p2"> Register for online ordering    </p>
                          <p className="hero-3-content-info-p3"> And deliver orders to millions of customers with ease   </p>


                      </div>
                      <div className="hero-3-content-info">
                          <img src={parcalimg} alt="img"  />
                          <p className="hero-3-content-info-p1"> Step 3 </p>
                          <p className="hero-3-content-info-p2"> Start receiving order online    </p>
                          <p className="hero-3-content-info-p3"> Manage orders on our partner app, web dashboard or API partners   </p>


                      </div>

                  </div>

              </div>
              <div className="hero-4">
                  <h2>Alredy have your restaurant listed?</h2>
                  <p>Search here and claim the ownership of your restaurant</p>
                  <div className="hero-4-search">
                      <i className="fa-solid fa-location-dot"></i>
                      <input type="text" placeholder="Delhi NCR" className="input-1" />
                      <i className="fa-solid fa-xmark"></i>
                      <input type="text" placeholder="Search for your reataurent, eg. Greenland Cafe" className="input-2" />

                  </div>
              </div>
              <div className="hero-5">
                  <h2>Our products</h2>
                  <div className="hero-5-content">
                      <div className="hero-5-content-scroll">
                          <div className="hero-5-content-info">
                              <img src={listingimg} alt="img"  />
                              <div className="hero-5-content-info-text">

                                  <h5>Listings</h5>
                                  <p>A free app that allows you to manage your Zomato listing directly from your smartphone</p>
                                  <a href='@' >Learn more <i className="fa-solid fa-angle-right"></i></a>


                              </div>

                          </div>
                          <div className="hero-5-content-info">
                              <img src={onlineorderimg} alt="img"  />
                              <div className="hero-5-content-info-text">

                                  <h5>Online Ordering</h5>
                                  <p>Start taking orders online from millions of users near you and deliver with Zomato...</p>
                                  <a href="@">Learn more <i className="fa-solid fa-angle-right"></i></a>


                              </div>

                          </div>
                          <div className="hero-5-content-info">
                              <img src={advertiseimg} alt="img"  />
                              <div className="hero-5-content-info-text">

                                  <h5>Advertise</h5>
                                  <p>For every marketing dollar spent, Zomato returns over 8x the investment...</p>
                                  <a href="@">Learn more <i className="fa-solid fa-angle-right"></i></a>


                              </div>

                          </div>
                          <div className="hero-5-content-info">
                              <img src={eventimg} alt="img"  />
                              <div className="hero-5-content-info-text">

                                  <h5>Events</h5>
                                  <p>Partner with us for India’s grandest food & entertainment carnival - “Zomaland”...</p>
                                  <a href="@">Learn more <i className="fa-solid fa-angle-right"></i></a>


                              </div>

                          </div>
                          <div className="hero-5-content-info">
                              <img src={Hyperpureimg} alt="img"  />
                              <div className="hero-5-content-info-text">

                                  <h5>Hyperpure</h5>
                                  <p>Supplies fresh and high quality ingredients to restaurant for serving delicious meals...</p>
                                  <a href="@">Learn more <i className="fa-solid fa-angle-right"></i></a>


                              </div>

                          </div>
                      </div>



                  </div>


              </div>
              <div className="hero-6">
                  <h2>Our Happy partners</h2>
                  <div className="hero-6-content">
                      <div className="hero-6-content-info">
                          <img src={PawanKumarimg} alt="img"  />
                          <div>
                              <p>We are immensely satisfied with the marketing push Zomato has provided us. We are now exclusive with Zomato and look forward to more growth in our delivery business through online orders.</p>
                              <h6 className="h6-1">Pawan Kumar</h6>
                              <h6 className="h6-2">Owner - Chicago BR, Dehradun</h6>
                          </div>

                      </div>

                      <div className="hero-6-content-info">
                          <img src={Tusharimg} alt="img"  />
                          <div>
                              <p>Zomato delivery fleet saves considerable effort on our part resulting in more fulfilled orders for us. Also, it has now become much easier for customers to discover our brand on Zomato.</p>
                              <h6 className="h6-1">Tushar</h6>
                              <h6 className="h6-2">Owner - Concept Shawarma , Delhi NCR</h6>
                          </div>

                      </div>

                      <div className="hero-6-content-info">
                          <img src={Jasmeetimg} alt="img"  />
                          <div>
                              <p>Earlier, we delivered food orders to our known and repeat customers but now we have been able to create a completely new segment of repeat users - all because of the Zomato app.</p>
                              <h6 className="h6-1">Jasmeet Singh</h6>
                              <h6 className="h6-2">Owner - Pick and Move, Udaipur</h6>
                          </div>

                      </div>

                  </div>

              </div>
              <div className="hero-7">
                  <h2>What do you get on sign-up</h2>
                  <p>Zomato Patner Platform helps you take your business to new heights instantly with no <br />hassle and 100% transparency</p>
                  <div className="hero-7-content">
                      <div className="hero-7-content-info1">


                          <ol>
                              <li className='ol-li1'>
                                  <h6 className="h6-o1"    >Restaurant Partner app</h6>
                                  <p>Manage all your orders on your smartphone with our Android app</p>
                                  <div className="li-div1">
                                  <img src={mobailimg} alt='img' className="ip1" />

                                  </div>
                              </li>

                              <li className='ol-li2'>
                                  <h6 className="h6-o2" >Restaurant Partner web dashboard</h6>
                                  <p>Manage all your orders on your desktop or laptop</p>
                                  <div className="li-div2">
                                  <img src={laptopimg} alt='img' className="ip2" />

                                  </div>

                              </li>
                              <li className='ol-li3'>
                                  <h6 className="h6-o3" >API integration</h6>
                                  <p>Manage all your orders on your existing Point of Sale (POS) or third party software</p>

                                  <div className="li-div3">
                                   <img src={laptop2img} alt='img' className="ip3" />

                                  </div>
                              </li>
                          </ol>



                      </div>
                     
                  </div>
              </div>
              <div className='hero-8'>
                <div className='hero-8-box1'>
                    <h2>Start your journey with Zomato</h2>
                    <p>Create your reatauirent page and register for online ordering</p>
                    <button onClick={loginNaviget()}>Start now <i className="fa-solid fa-angle-right icon-8"></i></button>

                </div>
                
                <div className='hero-8-box2'>
                    <center><h2> Frequently asked questions</h2></center>
                    <div className='hero-8-box2-bob'>
                       <div className='hero-8-box2-bob-div1'>

                            <p className='hero-8-box2-bob-p'>What will Zomato charge me for creating a page on its platform? </p>
                             <i className="fa-solid fa-angle-down icon-8"></i>
                        </div>
                        <div className='hero-8-box2-bob-div2'>
                          <hr/>
                          <p>Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.</p>
                        </div>

                    </div>
                    <div className='hero-8-box2-bob'>
                      <div className='hero-8-box2-bob-div1'>
 
                        <p className='hero-8-box2-bob-p'>  What all documents are required for registering on online ordering?    </p>
                        <i className="fa-solid fa-angle-down icon-8"></i>
                      </div>
                        <div className='hero-8-box2-bob-div2'>
                          <hr/>
                          <ol>
                            <label  style={{fontSize:"1.4vw"}}>Registration for online ordering requires:</label>
                            <li >a: FSSAI certificate (application no. if FSSAI is not present)</li>
                            <li >b: PAN Card</li>
                            <li>c: GST certificate (if applicable)</li>

                          </ol>
                        </div>

                    </div>
                    <div className='hero-8-box2-bob'>
                        <div className='hero-8-box2-bob-div1'>

                           <p className='hero-8-box2-bob-p'>   I have a large fleet of delivery boys, why should I use Zomato’s delivery service?      </p>
                           <i className="fa-solid fa-angle-down icon-8"></i>
                         </div>
                        <div className='hero-8-box2-bob-div2'>
                          <hr/>
                          <p>You can use your and Zomato's delivery fleet simultaneously to increase the network of your delivery radius. Also, our delivery fleet delivers orders in minimum possible time, a key factor leading to increased customer satisfaction.</p>
                        </div>

                        
                    </div>
                    <div className='hero-8-box2-bob'>
                       <div className='hero-8-box2-bob-div1'>

                            <p className='hero-8-box2-bob-p'>    What happens if the average order value of Zomato orders is very low    </p>
                             <i className="fa-solid fa-angle-down icon-8"></i>
                        </div>
                        <div className='hero-8-box2-bob-div2'>
                          <hr/>
                          <p>Average order value from our platform is generally more than Rs 250. However, in some cases, users want to try out your place by ordering for lesser amount. But we have observed that they eventually come back with higher value orders if they like your food.</p>
                        </div>

                        
                    </div>
                    
                </div>

              </div>
              <div className='hero-9'>
                <div className='hero-9-box1'>
                    <h2>Cannot find your favourite restaurant on Zomato?</h2>
                    <p className='hero-9-box1-p'>Submit the details and our team will get the restaurant onboard</p>

                </div>
                <div className='hero-9-box2'>
                    <RestaurantForm />

                </div>


              </div>
              <Footer/>
        </>

    );
}
export default AddtoReastaurant;