
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import DonorRegistration from './pages/DonorRegistration';
import NgoRegistrationPage from './pages/NgoRegistration';
import DonorListingPage from './pages/DonorListingPage';
import Dash from './pages/Dash';
<Dash />

function App() {
  return (
    <div className='bg-gradient-to-r from-[rgba(55,35,56,1)] to-[rgba(111,39,64,1)]' >
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/donor-registration' element={<DonorRegistration />} />
            <Route path='/ngo-registration' element={<NgoRegistrationPage />} />
            <Route path='/donor-listing' element={<DonorListingPage />} />
            <Route path='/dash' element={<Dash />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;