import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import React from 'react';
import './index.css'; // Assuming you have an index.css for global styles

const App = () => {
  return (
    <div className="App">
      <div className="white-gradient">
        <Header />
        <Hero />
        {/* Other components can be added here, like Features, Testimonials, etc. */}
        <Features />
        <Footer />
      </div>
    </div>
  )
}

export default App;
