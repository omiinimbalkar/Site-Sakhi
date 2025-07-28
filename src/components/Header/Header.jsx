import React, { useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" }
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="/logo.png" alt="Site Sakhi Logo" width={70} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}>
            <>
              <Link to="/">Home</Link>
              <Link to="/templates">Templates</Link>
              <Link to="/features">Features</Link>
              <Link to="/login">Sign In</Link>
              <Link to="/success-stories">Success Stories</Link>
              <button className="button">
                <Link to="/get">Get Started</Link>
              </button>
            </>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>

    </section>
  );
};

export default Header