import { NotConplite } from '../NotComplit/NotComplit'
import './SignInn.css'
import   Googleicon from './googleicon.png'



export  default function SignIn (){


    function userSignup(){
        alert("Sign up functionality is not implemented yet. (Go Back)")
    }
  




    return(  
        <>
        
        <div className="sign-fo">
            <div className="sign-form">
                <form   className="sign-form-m" onSubmit={userSignup}>
                   <label  className="sign-form-label"><b>Signup</b></label>
                    <input type="text" placeholder="Full Name" required/>   
                    <input type="email"  id='sign-form-email' placeholder="Email"  required />   
                    <div className="sign-form-div1">
                         <input type='checkbox'  required/>
                         <p>I agree to Zomato's <a href='/privacy-policy' target='_blank'>Terms of Service</a>, <a href='/privacy-policy'  target='_blank'>Privacy Policy</a> and <a href='/privacy-policy'  target='_blank'>Content Policies</a> </p>
                    </div>
                     <button className='sign-form-btn1' >Create Account</button>
                </form>
                <hr/> 
                 <center><p className="sign-form-p1">or</p> </center>   
                <button className='sign-form-btn2' onClick={NotConplite} > <img src={Googleicon} width="15vw"/> Sign in with Google   </button>  
                <hr/> 
                <p className="sign-form-p2"> Already have an account? <a href='/login'> Login</a></p> 
            </div>
        </div>
        </>
 )
}