import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Services from '../components/Services';
import Estimates from '../components/Estimates';
import Checklist from '../components/Checklist';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <Services />
      <Estimates />
      <Checklist />
      <Contact />
      <Footer />

    </div>
  );
}

export default Home; 