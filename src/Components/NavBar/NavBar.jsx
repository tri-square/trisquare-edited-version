import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

function NavBar() {
  
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  return (
    <div>

    { dimensions.width>851 ? <div className="headerDiv">
        {/* NAV */}
        <a style={{ textDecoration: "none", color: "white" }} href="/">
          <div className="logoDiv">TriSquare</div>
        </a>

        <div className="pageSwitchDiv">
   
          <Link 
          to={"/"}>
            <button type="button" className="switchBtn">
              Home
            </button>
          </Link>

          <Link 
          to={"/about"}>
            <button type="button" className="switchBtn">
              About
            </button>
          </Link>

    

          <Link 
          to={"/contact"}>
            <button type="button" className="switchBtn">
              Contact
            </button>
          </Link>
        </div>
        {/* NAV END */}
      </div> :
      <Hamburger/>
      }
    </div>
  );
}

export default NavBar;
