import React from 'react';
import Header from '../components/Navbar';
import DonorListForm from '../components/DonorList';
import Footer from '../components/Footer';


const DonorRegistration = () => {
  return (
    <div>
      <Header />
      <DonorListForm />
      <Footer />
    </div>
  );
};

export default DonorRegistration;