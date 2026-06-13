import { Route, Routes } from 'react-router-dom';
import Homepage from "../Pages/Homepage";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import FAQ from "../Pages/FAQ";


function AppRoutes() {
    return (
      <Routes>
  <Route path="/" element={<Homepage/>} />
  <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
  <Route path="/faqs" element={<FAQ/>} />
   
      
</Routes>
  );
}

export default AppRoutes;