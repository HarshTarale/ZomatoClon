import { NotConplite } from '../NotComplit/NotComplit'
import './RegulaeGstin.css'


 export default function  RegulaeGstin(){

    return(
        <>
        
     <div className="hero-Regula">

        <div className="hero-Regula1">

        </div>
        
        <div className="hero-Regula2">
            <h3>Need help with GST Registration?</h3>
            <hr/>
            <p className="hero-Regula2-p1">@gmail.com <a href="@">Switch accounts</a></p>
            <hr/>
            <p className="hero-Regula2-p2">* Indicates required question</p>

        </div>
        
        <div className="hero-Regula3">
            <p>Do you have a valid GST registration Number? *</p>            
            <p>GST registration number is a PAN-linked unique 15 digit number for your restaurant</p>
            <label>
            <input type="radio" name="ok"  />  Yes
            </label>
            
            <br/>
            <label>
            <input type="radio" name="ok"  />  No
            </label>

        </div>
        
        <div className="hero-Regula4">
            <div>
                <button onClick={NotConplite}>Next</button>
                <p onClick={NotConplite}>Clear form</p>
            </div>
            <p>Never Submit Passwords through google form</p>
           <center> <p>This form was created inside Zomato.<a href="@">  Report Abuse</a></p></center>
           <center><h4>Google Form</h4></center> 
            

        </div>
        
     </div>

         </>
    )


}