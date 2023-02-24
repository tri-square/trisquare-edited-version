import React, { useState, useEffect } from "react";
import Hamburger from "../Hamburger/Hamburger";

function NavPrimary() {



  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  let navContainerStyle = {
    background: "transparent",
    backdropFilter: "",
    transition: "",
    width: "100%",
    alignItems: "center",
    maxWidth: "100%",
    position: "fixed",
    paddingTop: "5px",
    zIndex: "5",
  };

  let navLinksStyle = {
    color: "white",
    textDecoration: "none",
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dimensions
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

  

  // Dimensions

  function changeNavStyleOnScroll() {
    navContainerStyle.backdropFilter = "blur(15px)";
    navContainerStyle.transition = "background 0.5s ease 0s";
  }

  function changeNavStyleTwo() {
    navContainerStyle.backdropFilter = "";
    navContainerStyle.background = "white";
    navContainerStyle.transition = "";
    navLinksStyle.color = "black";
  }
  if (scrollPosition > 2) {
    console.log("scrolling");
    changeNavStyleOnScroll();
  }
  if (scrollPosition > 780) {
    changeNavStyleTwo();
  }
  return (
    <div>
      
      <div className="navContainer" style={navContainerStyle}>
        {dimensions.width > 851 ? (
          <nav className="navbar">
           <a href="/ -"><div style={navLinksStyle} className="logo">
              Tri<span className="fed">Square</span>
            </div> </a> 

            <div className="navRightSide">
              <ul className="nav-links" style={navLinksStyle}>
                <div className="menu">
                  <li>
                    <a style={navLinksStyle} href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a style={navLinksStyle} href="/about">
                      About
                    </a>
                  </li>
                  <li>
                    <a style={navLinksStyle} href="/services">
                      Services
                    </a>
                  </li>

                  <li>
                    <a style={navLinksStyle} href="/jobs">
                      Vacancies
                    </a>
                  </li>
                  <li>
                    <a style={navLinksStyle} href="/contact">
                      Contact
                    </a>
                  </li>
                </div>
              </ul>

              {/* <div className="socialIcons">
                <div
                  onClick={() => {
                    redirectToSocialMedia("facebook.com");
                  }}
                  className="icon"
                >
                  <img src={process.env.PUBLIC_URL + "/facebook.svg"} alt='fb' />
                </div>

                <div
                  onClick={() => {
                    redirectToSocialMedia("twitter.com");
                  }}
                  className="icon"
                >
                  <img src={process.env.PUBLIC_URL + "/twitter.svg"}  alt='twtr'/>
                </div>
                <div
                  onClick={() => {
                    redirectToSocialMedia("instagram.com");
                  }}
                  className="icon"
                >
                  <img src={process.env.PUBLIC_URL + "/instagram.svg"} alt='insta' />
                </div>
              </div> */}
            </div>
          </nav>
        ) : (
     
            <Hamburger />
        
        )}
      </div>
    </div>
  );
}

export default NavPrimary;
