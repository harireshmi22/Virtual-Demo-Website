import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import './App.css'; // Assuming you have a global CSS file for styles
import './index.css'; // Importing Tailwind CSS styles
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Font from './components/font'; // Assuming this is a component for custom fonts

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
