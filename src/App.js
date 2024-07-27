import AddtoReastaurant from "./zomato-india/AddtoRestaurent/hii";
import Error from "./component/error/error";
import Advertise from "./zomato-india/Advertise/Advertise";
import SignIn from "./component/Sign/SignIn";
import Login from "./component/login/loginn";
import PrivacyPolicy from "./component/privecy/privacyPolecy";
import { Mein } from "./zomato-india/mainpage/main";
import { Routes, Route } from "react-router-dom";
import FssaiLicenseCopy from "./component/FassailicenseCopy/FassaiLicenseCopy";
import RegulaeGstin from "./component/RegularGstin/regulaeGstin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mein/>}/>
      <Route path="/partner-with-us" element={<AddtoReastaurant/>}/>
      <Route path="/business/advertise" element={<Advertise/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/Fssai-Test" element={<FssaiLicenseCopy/>} />
      <Route path="/viewform" element={<RegulaeGstin/>}/>

      <Route path="/login" element={<Login/>}/>
      <Route path="/*" element={<Error/>}/>

    

          
    </Routes>
     
    
  );
}

export default App;
