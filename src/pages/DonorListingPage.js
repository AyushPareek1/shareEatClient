import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import ListingsOfDonor from '../components/ListingsOfDonor';


const DonorListingPage = () => {
  return (
    <div>
      <Header />
      <ListingsOfDonor />
      <Footer />
    </div>
  );
};

export default DonorListingPage;