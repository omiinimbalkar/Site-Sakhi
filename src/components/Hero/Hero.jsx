import React from 'react'
import './Hero.css'; // Assuming you have a Hero.css for styles
import CountUp from 'react-countup'; // Make sure to install this package
import { Link } from 'react-router-dom'; // For navigation links

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                {/* left side */}
                <div className="flexColStart hero-left">
                    <span className="text-xs text-primary -mt-1 font-medium">✨ Empowering Women Entrepreneurs</span>
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <h1>Build Your Dream Website <br /> No Coding Required</h1>
                    </div>

                    <div className="flexColStart hero-desc">
                        <span>Site-Sakhi helps women entrepreneurs launch professional
                            <br />
                            sites in minutes with smart AI tools and beautiful templates.</span>
                    </div>

                    <div className="btn1">
                        <button>Start Building With Site-Sakhi</button>
                        <Link to="/templates">
                            <button>View Templates</button>
                        </Link>
                    </div>

                    {/* <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>   
                            </span>
                            <span className='secondaryText'>Women <br />
                                Entrepreneurs <br />
                                Empowered</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>10 mins</span>
                            <span className='secondaryText'>Average
                                <br />
                                Time to Build
                                <br />
                                a Website</span>
                        </div>

                        <div className="flexColCenter stat">
                            <span>98%</span>
                            <span className='secondaryText'>User <br />
                                Satisfaction Rate</span>
                        </div>
                    </div> */}


                </div>

                {/* Right Side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero.png" alt="women png" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
