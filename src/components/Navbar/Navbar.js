// import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  // const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="navbar">
      <h1>Country Insights</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="navbar-menu">
        {/* <a href="#" onClick={() => setOpenMenu(!openMenu)}>
          <GiHamburgerMenu />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
