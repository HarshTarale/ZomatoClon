import { NotConplite } from '../NotComplit/NotComplit'
import './Footer.css'
import indianimg from './india.webp'
import uaeimg   from './uae.png'




 export default function Footer(){





  
  
    return(

       
<>
      <div className="footer">
        <div className="top-1">
            <h3>zomato</h3>
            <div className="footer-btn"> 
              <button> <img src={indianimg} alt='img'/> india <i class="fa-solid fa-angle-down"></i>   
               <div className="country"  onClick={NotConplite} > 
                <div>
                    <img src={indianimg} alt='img'/>
                    <p>India</p>
                </div>
                <div>
                    <img src={uaeimg} alt='img'/>
                    <p>UAE</p>
                </div>
               </div>
              </button>
            
              <button   onClick={NotConplite} ><i class="fa-solid fa-earth-americas"></i> English <i class="fa-solid fa-angle-down"></i></button>
            </div>
        </div>
        <div className="top-2">
            <div>
                <h4><b>ABOUT ZOMATO</b></h4>
                <li><a href="@"  onClick={NotConplite}  > Who We Are </a>   </li>
                <li><a href="@"  onClick={NotConplite}> Blog</a>   </li>
                <li><a href="@" onClick={NotConplite}> Work With Us</a>   </li>
                <li><a href="@" onClick={NotConplite}> Investor Relstion</a>   </li>
                <li><a href="@" onClick={NotConplite}> Report Fraud</a>   </li>
                <li><a href="@" onClick={NotConplite}> Press Kit</a>   </li>
                <li><a href="@" onClick={NotConplite}> Contact Us</a>   </li>
            </div>
            <div>
                <h4><b>ZOMAVERSE</b></h4>
            <li><a href="@" onClick={NotConplite}> Zomato</a>   </li>
            <li><a href="@" onClick={NotConplite}> Blinkit </a>   </li>
            <li><a href="@" onClick={NotConplite}> Feeding India</a>   </li>
            <li><a href="@" onClick={NotConplite}> Hyperpure</a>   </li>
            <li><a href="@" onClick={NotConplite}> Zomaland</a>   </li>
            
            </div>
            <div>
            <h4><b>FOR RESTAURANTS</b></h4>
            <li><a href="@" onClick={NotConplite}>Partner With Us</a>   </li>
            <li><a href="@" onClick={NotConplite}>Apps For You </a>   </li>

            </div>
            <div>
            <h4><b>LEARN MORE</b></h4>
            <li><a href="@" onClick={NotConplite}>Privacy</a>   </li>
            <li><a href="@" onClick={NotConplite}>Security </a>   </li>
            <li><a href="@" onClick={NotConplite}>Terms </a>   </li>
            <li><a href="@" onClick={NotConplite}>Sitemap </a>   </li>

            </div> 
            <div>
              <h4><b>SOCIAL LINKS</b></h4>
              <li>
                <a href="https://www.linkedin.com/company/zomato/?originalSubdomain=in"><i className="fa-brands fa-linkedin" style={{ color: "#000000" }} /></a>{" "}
                <a href="https://www.instagram.com/zomato/?hl=en"><i className="fa-brands fa-square-instagram" style={{ color: "#000000" }} /></a>{" "}
                <a href="https://x.com/zomato?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fa-brands fa-square-twitter" style={{ color: "#000000" }}/>{" "}</a>
                <a href="https://www.youtube.com/channel/UCD7kbZQyYIR6RgJQYW9w0Tg"><i className="fa-brands fa-youtube" style={{ color: "#000000" }} /></a>{"   "}
                <a href="https://www.facebook.com/zomato/"><i className="fa-brands fa-facebook" style={{ color: "#000000" }} /></a>
              </li>

                  <div className="store" onClick={()=>{ window.location.href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"}}>
                  <i className="fa-brands fa-apple" style={{ color: "#ffffff" }} />


                     <div>
                       <p>Download on the</p>
                       <h6>App Store</h6>
                     </div>
                  </div>
                  <div className="store" onClick={()=>{window.location.href="https://play.google.com/store/apps/details?id=com.application.zomato&hl=en_IN&gl=US&pli=1"}}>
                  <i className="fa-brands fa-google-play" style={{ color: "#ffb35c" }} />

                     <div>
                       <p>GIT IT ON</p>
                       <h6>Google Play</h6>
                     </div>
                  </div>
            </div>


        </div>
        <hr/>
        <p className='footer-bottem-p'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2019 © Zomato™ Media Pvt Ltd. All rights reserved.</p>

      </div>



</>

    )

}
