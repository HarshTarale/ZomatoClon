import './Advertise.css'
import c94429we2  from  './94429ed7f722b1ec8a973d7783bcc0f81565251711.svg'
import cecc849e3   from  './3cecc849399a60d581293c3e1ebce19e1565251731.svg'
import  guara   from './guara.avif'
import target    from './target.png'
import  track    from './track.webp'
import   pay  from './pay.png'
import Driveimg from './Drive.avif'
import OwnImg from './Own.avif'
import Wokimg from './Wok.avif'
import GaregImg from './GaregImg.avif'
import Footer from '../../component/footer/Footer'


export default function Advertise(){
   
    return(
        < >
        <div className="advertis-0">
            <div  className='advertise-header'>
                <div  className='advertise-header-bax1'>
                    <h1>zomato</h1>
                    <p>for business</p>
                </div>
                <div  className='advertise-header-box2'>
                    <a href="@" >Zomato For Work</a>
                    <a href='/partner-with-us' >Add a Restaurent</a>
                    <a href='/Contact' >Contact Us</a>

                </div>

            </div>
            
            <div  className='advertise-content'>
                <h3>Advertise on Zomato</h3>
                <p>For every marketing dollar apent,<br/> Zomato returns over 8x the investment</p>
                <a href='#advertise-6'>
                <button >Ready to start <i className="fa-solid fa-angle-right aroov"></i></button>
                </a>
                
                
            </div>
        </div>
        <div className="advertise-1">
            <center><h3>12,000 restaurants already advertise on Zomato</h3></center>
            
                <div className="advertise-1-contener">
                    <img src={c94429we2} className="imgopa" alt="img"/>
                    <img src={cecc849e3} className="imgopa imgopa2" alt="img"/>
                    <div className="advertise-1-contener-box1 advertiseb-box">
                        <h4>3,200+ <br/>cities</h4>
                        <p>ALL OVER THE WOLD</p>
                    </div>
                    
                    <div className="advertise-1-contener-box2 advertiseb-box">
                        <h4>90<br/>billion</h4>
                        <p>MONTHLY VISITS</p>
                    </div>
                    <center>
                    <div className="advertise-1-contener-box3  advertiseb-box">
                        <h4>1.4 <br/>million</h4>
                        <p>RESTAURENT LISTINGS</p>
                    </div>
                    </center>


               </div>
            
            
        </div>
        <div className="advertise-2">
            <center><h3>Why advertise on Zomato?</h3></center>
            <div  className="advertise-2-contener">
                <div className="advertise-2-contener-div" >
                    <div className="advertise-2-contener-div-box" > 
                       <img src={guara} alt='img' className="advertise-2-contener-div-box-img" />
                       <div  className="advertise-2-contener-div-box-text">
                         <h6 >Guaranteed Customer Growth </h6>
                         <p>Increase visits to your page which will drive more footfall and revenue for your restaurant. </p>
                       </div>
                    </div>

                    <div className="advertise-2-contener-div-box" > 
                       <img src={target} alt='img' className="advertise-2-contener-div-box-img"/>
                       <div  className="advertise-2-contener-div-box-text">
                         <h6> Target the right Audience</h6>
                         <p>Get showcased to customers searching for what you have to offer, at the most relevant time and location.</p>
                       </div>
                    </div>

                    <div className="advertise-2-contener-div-box" > 
                       <img src={track} alt="img" className="advertise-2-contener-div-box-img"/>
                       <div  className="advertise-2-contener-div-box-text">
                         <h6> Track Performance</h6>
                         <p>Get access to state-of-the-art analytics and follow your campaign performance. </p>
                       </div>
                    </div>

                    <div className="advertise-2-contener-div-box" > 
                       <img src={pay} alt='img' className="advertise-2-contener-div-box-img"/>
                       <div  className="advertise-2-contener-div-box-text">
                         <h6> Pay for Results</h6>
                         <p>Take the guessing out of advertising and only pay for the customers brought to your page.</p>
                       </div>
                    </div>

                </div>
                <div className="advertise-2-contener-div2" >
                </div>
            </div>
            
        </div>
        <div className="advertise-3">
            <h3>How to advertise on Zomato?</h3>
            <div className="advertise-3-contener">
                <div className="advertise-3-contener-box1">
                    <center>
                    <img src={Driveimg} alt="img"/>
                    </center>
                </div>
                <div className="advertise-3-contener-box2">
                    <h6>Drive Users to You</h6>
                    <p>Generate guaranteed visits to your page via dynamic search ads on our web and mobile platform.</p>


                </div>

            </div>


        </div>
        <div className="advertise-4">
            
            <div className="advertise-4-contener">
                <div className="advertise-4-contener-box1">
                    
                    <h6>Own Your Category</h6>
                    <p>Boost your placement within relevant collections for your brand.</p>

                </div>
                <div className="advertise-4-contener-box2">
                    
                    <center>
                    <img src={OwnImg} alt="img"/>
                    </center>

                </div>

            </div>



        </div>
        <div className="advertise-5">
            <h3>Our satisfied customers say</h3>
             <div className="advertise-5-contener">
                <div className="advertise-5-contener-box">
                    <img src={Wokimg} alt="img"/>
                    <div className="advertise-5-contener-box-div">
                        <p className="advertise-5-contener-box-div-p1"> WOK BOYZ has leveraged on tour business! Advertisement options have allowed us to strategically target specific campaigns/demographics critical to the growth of our presence and order volumes in Dubai. Keep up the good work Zomato.</p>
                        <h6 className="advertise-5-contener-box-div-h6">Wok Boyz</h6>
                        <p className="advertise-5-contener-box-div-p2">Dubai</p>
                    </div>
                </div>

                <div className="advertise-5-contener-box">
                    <img src={GaregImg} alt="img"/>
                    <div className="advertise-5-contener-box-div">
                        <p className="advertise-5-contener-box-div-p1">Garage Inc. as has benefitted from Zomato since the day it started. Zomato ads and Zomato Gold has proved to be an excellent spring board to take a quantum leap towards it's brand building.</p>
                        <h6 className="advertise-5-contener-box-div-h6">Garage Inc</h6>
                        <p className="advertise-5-contener-box-div-p2">Mumbai and Delhi</p>
                    </div>
                </div>

             </div>
        </div>
        <div className="advertise-6" id="advertise-6">
            <div className="advertise-6-box1" >
                <h3>Want to know more?</h3>
                <p>Please leave your contact details here and we'll get back to you within 24 hours</p>
            </div>
            <div className="advertise-6-box2" >
                <form action='https://formspree.io/f/mbjnvwvz' method='POST' >
                    <h6 className="advertise-6-box2-h61">Your contact details</h6>
                    <input type='text' name="City" placeholder='City' required/>
                    <input type='text' name="Restaurent Name"placeholder='Restaurent Name' required/>
                    <input type='text'name="Full Nmae" placeholder='Full Nmae' required/>
                    <input type='email' name="Email Id" placeholder='Email Id'  id="emailinput" required/>
                    <input type='number'name="phone Number" placeholder='phone Number'  id="numberinput" required/>
                    <button  id="btnform100" type="submit" >Submit</button>


                </form>

            </div>

        </div>
        <Footer/>

        </>
        
        )
}