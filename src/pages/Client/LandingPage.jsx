import React from 'react';
import Navbar from '../../components/Client/Navbar';
import Herotext from '../../components/Client/Herotext';
import About from '../../components/Client/About';
import Accordion from '../../components/Client/Accordion';
import Partners from '../../components/Client/Partners';
import Footer from '../../components/Client/Footer';
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Herotext />
      <About />
      <Partners />
      <Accordion />
      <Footer />
    </>
  );
}
