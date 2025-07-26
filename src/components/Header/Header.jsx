import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="/logo.png" alt="Site Sakhi Logo" width={100} />


        <div className="flexCenter h-menu">
          <a href="#home">Home</a>
          <a href="#templates">Templates</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#success-stories">Success Stories</a>
          <button className="button">
            <a href="#get-started">Get Started</a>
          </button>
        </div>
      </div>

    </section>
  );
};

export default Header