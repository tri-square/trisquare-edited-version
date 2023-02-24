import React,{useState,useEffect} from 'react'
import './Hamburger.css'
function Hamburger() {
      const [hamState, setHamState] = useState(false)

    const clickHamIcon=()=>{
       setHamState(!hamState)
    }
   
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

  
  let navLinksStyle = {
    color: "white",
    textDecoration: "none",
  };


  
  if (scrollPosition > 600) {
   
    navLinksStyle.color = "black";

  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])
  return (
    <div>

   
    <div className="hamburgerContainer">
     
   
    <div style={navLinksStyle} className="logo">
              Tri<span className="fed">Square</span>
            </div>


    <div onClick={clickHamIcon} className="hamburgerIconContainer">
      
      <img className='hamburgerIcon' src={process.env.PUBLIC_URL + 'hamburgerIcon.png'} alt="menu" />
    </div>
    </div>
    
{ hamState &&
    <div className="hamburgerMenuContainer">
    <ul className="hamNav-links" >
             
             
               <li>
                 <a className='hamMenuLink' href="/">Home</a>
               </li>
               <li>
                 <a className='hamMenuLink' href="/about">About</a>
               </li>

               <li>
                 <a className='hamMenuLink' href="/jobs">Vacancies</a>
               </li>
               <li>
                 <a className='hamMenuLink' href="/contact">Contact</a>
               </li>
           
           </ul>
    </div>}
    </div>
  )
}

export default Hamburger