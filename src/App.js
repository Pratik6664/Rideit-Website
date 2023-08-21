import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus"
import Help from "./Help"
import RequestAccountRemoval from "./RequestAccountRemoval";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndCondition from "./TermsAndCondition";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/contact" element={<Contactus/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/removeAccount" element={<RequestAccountRemoval/>} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/termsAndCondition" element={<TermsAndCondition/>} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
