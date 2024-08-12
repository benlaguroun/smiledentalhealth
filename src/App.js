import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import Schedule from './components/Schedule';
import Hero from './components/Hero';
import Blog from './components/Blog';
import OurServices from './components/OurServices';
import Product from './components/Product';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import OfferPricing from './components/OfferPricing';
import GeneralDentistry from './pages/GeneralDentistry';
import CosmeticDentistry from './pages/CosmeticDentistry';
import Xrays from './pages/Xrays';
import OralSurgery from './pages/OralSurgery';
import Orthodontics from './pages/Orthodontics';
import EmergencyCare from './pages/EmergencyCare';
import Blog1 from './pages/Blog1'; // Import individual blog pages
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import ScheduleButton from './components/ScheduleButton'; // Import the ScheduleButton component
import './App.css';
import './custom.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SocialMedia />
                <Hero />
                <OurServices />
                <Product />
                <Testimonials />
                <Blog />
                <OfferPricing />
                <ContactUs />
                <Footer />
                <ScheduleButton /> {/* Include the ScheduleButton component */}
              </>
            }
          />
          <Route path="/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/schedule" element={<Schedule />} /> {/* Corrected Route */}
          <Route path="/x-rays" element={<Xrays />} />
          <Route path="/oral-surgery" element={<OralSurgery />} />
          <Route path="/orthodontics" element={<Orthodontics />} />
          <Route path="/emergency-care" element={<EmergencyCare />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/1" element={<Blog1 />} /> {/* Route for Blog1 */}
          <Route path="/blog/2" element={<Blog2 />} /> {/* Route for Blog2 */}
          <Route path="/blog/3" element={<Blog3 />} /> {/* Route for Blog3 */}
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
