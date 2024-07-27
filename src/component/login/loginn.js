import './style.css'
import {useState} from 'react'
import  Googleicon from './googleicon.png'
 import { NotConplite } from '../NotComplit/NotComplit'

            export default  function Login(){

                const [numbersValue,numberSetValu] = useState(
                    {
                        MobailNo:" "
                    }
                )

                function onchangenum(event){
                  const inputNumber=  event.target.value;
                  numberSetValu({...numbersValue,MobailNo:inputNumber});

                }

                function Submitnum(e){
                    e.preventDefault();

                    if (numbersValue.MobailNo.length=="10"){
                        alert(`Log in no:${numbersValue.MobailNo} Not Ready this page to log in Go Back `);

                    }else{
                        alert(`Not Log in Enter The 10 no.`);




                    }
                    
                }

  
                return(
                    <>
                    <div className="hero-fo">
                        <div className="hero-form">
                        <form  className="hero-form-m" onSubmit={Submitnum}>
                            <label><b>Login</b></label>
                            <input type="number" placeholder="Phone"  onChange={onchangenum} id="hiip"  required/>   
                            <button style={{backgroundColor:"rgb(255, 7, 50)", color:"white", fontSize:"1.2vw"}}>Send One Time Password</button>  
                            </form>

                            <hr/> 
                            <p className="hero-form-p1">or</p>      
                            <button onClick={NotConplite}>   <i className="fa-solid fa-envelope" style={{color: "#ff8800"}}></i> Continue with Email  </button>   
                            <button onClick={NotConplite}> <img src={Googleicon} width="15vw"/> Sign in with Google   </button>  
                            <hr/> 
                            <p className="hero-form-p2"> New to Zomato? <a href='/SignIn'> Create account</a></p> 
            
                        </div>

                    </div>
                    </>
                )
            }