
import './FassaiLicenseCopy.css'


 export default function  FssaiLicenseCopy(){


    function Submit(){
        alert("no impliment this function go back")
    }



    return(
        <>
        <div className="fssai-hero">
            <div className="fssai-hero-content">
                
               <div className="fssai-hero-content-box1">
                <h1><b>zomato</b></h1>
                <h3>Need help with FSSAI License Registration/Renewal?</h3>
                <p>For businesses partnering with Zomato, obtaining FSSAI license is a pre-requisite. Zomato upholds these standards to ensure that the food served through our platform meets regulatory requirements and prioritises consumer safety.</p>

        
                </div>
                <div className="fssai-hero-content-box2">
                <from action='https://formspree.io/f/xyyrqkpe' method='POST'>

                    <span className='fssai-hero-content-box2-ol1'>
                        
                        <p>Is your restaurant live on Zomato? *</p>
                        
                            <label >
                            <input type="radio" name="live on Zomato?" value="Yes, I am an existing Zomato restaurant partner."/>Yes, I am an existing Zomato restaurant partner.
                            </label>

                            <label >
                            <input type="radio" name="live on Zomato?" value="No, I am a new restaurant partner."/>No, I am a new restaurant partner
                            </label>
                        

                    </span>
                    
                    <span className='fssai-hero-content-box2-ol2'>
                        <p>IDo you have a valid FSSAI license.  * </p>
                        
                            <label>
                            <input type="radio" name="valid FSSAI license?" value="Yes, I have a valid FSSAI license"  />Yes, I have a valid FSSAI license

                            </label>
                        
                      

                    </span>
                    <span className='fssai-hero-content-box2-ol2-div'>
                        <p>Kindly provide your FSSAI license number. *</p>
                        <input type='text' name='license no.' maxLength={14} placeholder='14 Digit license no.'/>
                    </span>


                    <center><button type='submit' onClick={Submit}>Submit Feedback</button></center>


                     
                    </from>

                </div>
        



            </div>

        </div>
        </>
    )
}