import React, { useState, useEffect } from 'react';
import {FaChevronRight,FaChevronLeft } from 'react-icons/fa';


const Mobiledropdown = () => {

   
   


    
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const [isMenuOpen1, setIsMenuOpen1] = useState(null);
    const [isMenuOpen2, setIsMenuOpen2] = useState(null);
    const [isMenuOpen3, setIsMenuOpen3] = useState(null);
    const [isMenuOpen4, setIsMenuOpen4] = useState(null);
    const [isMenuOpen5, setIsMenuOpen5] = useState(null);
    const [isMenuOpen6, setIsMenuOpen6] = useState(null);

  useEffect(() => {
    setIsMenuOpen(null);
    setIsMenuOpen1(null);
    setIsMenuOpen2(null);
    setIsMenuOpen3(null);
    setIsMenuOpen4(null);
    setIsMenuOpen5(null);
    setIsMenuOpen6(null);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1);
  };
   
  const toggleMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
  };
   
  const toggleMenu3 = () => {
    setIsMenuOpen3(!isMenuOpen3);
  };
  const toggleMenu4 = () => {
    setIsMenuOpen4(!isMenuOpen4);
  };
  const toggleMenu5 = () => {
    setIsMenuOpen5(!isMenuOpen5);
  }; 
  const toggleMenu6 = () => {
    setIsMenuOpen6(!isMenuOpen6);
  }; 
  return (
    <>
    
    <div className='menu-content'>
   
        <div className='newy' onClick={toggleMenu}>
            <div>New Arrivals</div>
            <div><FaChevronRight /></div>
        </div>
        <div className='newy' onClick={toggleMenu1}>
            <div>Women</div>
            <div><FaChevronRight /></div>
        </div>
        <div className='newy' onClick={toggleMenu2}>
            <div>Men</div>
            <div><FaChevronRight /></div>
        </div>
        <div className='newy' onClick={toggleMenu3}>
            <div>Kids</div>
            <div><FaChevronRight /></div>
        </div>
        <div className='newy' onClick={toggleMenu4}>
            <div>Collaborations</div>
            <div><FaChevronRight /></div>
        </div>
        <div className='newy' onClick={toggleMenu5}>
            <div>Sport</div>
            <div><FaChevronRight /></div>
        </div>
        <div className='newy' onClick={toggleMenu6}>
            <div>Sale</div>
            <div><FaChevronRight /></div>
        </div>
        <div className='mother'>
            <div>Mother's Day Gift Guide</div>
            <div>My Account</div>
        </div>
        <div className='ford1'>Check Order or Return</div>
        <div className='ford1'>Contact Us</div>
        <div className='ford1'>Wishlist</div>
        <div className='langme'>
            <div>Language</div>
            <div>🇬🇧</div>
        </div>

        <button className="button1">LOGIN</button>
       <button className="button2">REGISTER HERE</button>
    </div>
 


    <div className={`imenu-content ${isMenuOpen === null ? '' : isMenuOpen ? 'active' : 'reverse'}`}>

        <div className='inewy' onClick={toggleMenu}>
        <div><FaChevronLeft /></div>
        <div>New Arrivals</div>
          
        </div>
        <div >
            <p className="linkers">Explore More</p>
           
        </div>
        <div className='mother1'>
            <div>Launch Calender</div>
          
        </div>
        <div className='mother1'>
            <div>Women's New Arrivals</div>
       
        </div>
        <div className='mother1'>
            <div>Men's New Arrivals</div>
        
        </div>
        <div className='mother1'>
            <div>Kids' New Arrivals</div>
         
        </div>
        <div className='mother1'>
            <div>Shop All New Arrivals</div>
            
        </div>
        <div className='mother1'>
            <div>75th Anniversary Running</div>
           
        </div>
      
        <div className='mother1'>
            <div>Pursuit Pack</div>
           
        </div>
        <div className='mother1'>
            <div>PUMA x THE RAGGED PRIEST</div>
           
        </div>
        <div className='mother1'>
            <div>PUMA x COCOMELON</div>
           
        </div>
        <div className='mother1'>
            <div>PUMA x RHUIGI</div>
           
        </div>
        <div className='mother1'>
            <div>NYC Fanshop</div>
           
        </div>
        <div className='mother1'>
            <div>MB Collection</div>
           
        </div>
        <div className='mother1'>
            <div>PUMA x SPONGEBOB</div>
           
        </div>
        <div className='mother1'>
            <div>Spring Fling Pack</div>
           
        </div>
        <div className='mother1'>
            <div>Mother's Day Gift Guide</div>
           
        </div>
        <div className='mother1'>
            <div>Only at PUMA</div>
           
        </div>
    </div>
  



<div className={`imenu-content ${isMenuOpen1 === null ? '' : isMenuOpen1 ? 'active' : 'reverse'}`}>
        <div className='inewy' onClick={toggleMenu1}>
        <div><FaChevronLeft /></div>
        <div>Women</div>
          
        </div>
        <div >
            <p className="linkers">EXPLORE MORE</p>
           
        </div>
        <div className='mother1'>
            <div>Shoes</div>
          
        </div>
        <div className='mother1'>
            <div>Clothing</div>
       
        </div>
        <div className='mother1'>
            <div>Accessories</div>
        
        </div>
        <div className='mother1'>
            <div>Sports</div>
         
        </div>
        <div className='mother1'>
            <div>New Arrivals</div>
            
        </div>
        <div className='mother1'>
            <div>Best Sellers</div>
           
        </div>
      
        <div className='mother1'>
            <div>Spring Break</div>
           
        </div>
        <div className='mother1'>
            <div>Dresses & Skirts</div>
           
        </div>
        <div className='mother1'>
            <div>Mids</div>
           
        </div>
        <div className='mother1'>
            <div>Neutral Tones</div>
           
        </div>
        <div className='mother1'>
            <div>Dad Shoes</div>
           
        </div>
        <div className='mother1'>
            <div>NYC Shop</div>
           
        </div>
        <div className='mother1'>
            <div>Mother's Day Gift Guide</div>
           
        </div>
        <div className='mother1'>
            <div>Sale</div>
           
        </div>
       
    </div>
 


    <div className={`imenu-content ${isMenuOpen2 === null ? '' : isMenuOpen2 ? 'active' : 'reverse'}`}>
        <div className='inewy' onClick={toggleMenu2}>
        <div><FaChevronLeft /></div>
        <div>Men</div>
          
        </div>
        <div >
            <p className="linkers">EXPLORE MORE</p>
           
        </div>
        <div className='mother1'>
            <div>Shoes</div>
          
        </div>
        <div className='mother1'>
            <div>Clothing</div>
       
        </div>
        <div className='mother1'>
            <div>Accessories</div>
        
        </div>
        <div className='mother1'>
            <div>Sports</div>
         
        </div>
        <div className='mother1'>
            <div>New Arrivals</div>
            
        </div>
        <div className='mother1'>
            <div>Best Sellers</div>
           
        </div>
      
        <div className='mother1'>
            <div>Spring Break</div>
           
        </div>
        <div className='mother1'>
            <div>PUMA x SPONGEBOB</div>
           
        </div>
        <div className='mother1'>
            <div>Dad Shoes</div>
           
        </div>
        <div className='mother1'>
            <div>Neutral Tones</div>
           
        </div>
        <div className='mother1'>
            <div>Motorsport</div>
           
        </div>
        <div className='mother1'>
            <div>NYC Shop</div>
           
        </div>
        <div className='mother1'>
            <div>Sale</div>
           
        </div>
       
    </div>
   



    <div className={`imenu-content ${isMenuOpen3 === null ? '' : isMenuOpen3 ? 'active' : 'reverse'}`}>
        <div className='inewy' onClick={toggleMenu3}>
        <div><FaChevronLeft /></div>
        <div>Kids</div>
          
        </div>
        <div >
            <p className="linkers">EXPLORE MORE</p>
           
        </div>
        <div className='mother1'>
            <div>Boys</div>
          
        </div>
        <div className='mother1'>
            <div>Girls</div>
       
        </div>
        <div className='mother1'>
            <div>Shop By Size</div>
        
        </div>
        <div className='mother1'>
            <div>New Arrivals</div>
         
        </div>
        <div className='mother1'>
            <div>Best Sellers</div>
           
        </div>
      
        <div className='mother1'>
            <div>Matching Sets</div>
           
        </div>
        <div className='mother1'>
            <div>Kids Soccer Looks</div>
           
        </div>
        <div className='mother1'>
            <div>PUMA x COCOMELON</div>
           
        </div>
        <div className='mother1'>
            <div>PUMA x SPONGEBOB</div>
           
        </div>
        <div className='mother1'>
            <div>Sale</div>
           
        </div>
       
    </div>



    <div className={`imenu-content ${isMenuOpen4 === null ? '' : isMenuOpen4 ? 'active' : 'reverse'}`} >
        <div className='inewy' onClick={toggleMenu4}>
        <div><FaChevronLeft /></div>
        <div>Collaborations</div>
          
        </div>
        <div >
            <p className="linkers">EXPLORE MORE</p>
           
        </div>
        <div className='mother1'>
            <div>Select</div>
          
        </div>
        <div className='mother1'>
            <div>Patnerships</div>
       
        </div>
     
        
       
    </div>
 



 <div className={`imenu-content ${isMenuOpen5 === null ? '' : isMenuOpen5 ? 'active' : 'reverse'}`} >
        <div className='inewy' onClick={toggleMenu5}>
        <div><FaChevronLeft /></div>
        <div>Sport</div>
          
        </div>
        <div >
            <p className="linkers">EXPLORE MORE</p>
           
        </div>
        <div className='mother1'>
            <div>Basket</div>
          
        </div>
        <div className='mother1'>
            <div>Running</div>
       
        </div>
        <div className='mother1'>
            <div>Training</div>
       
        </div>
        <div className='mother1'>
            <div>Motorsport</div>
       
        </div>
        <div className='mother1'>
            <div>Soccer</div>
       
        </div>
    </div>
  



    <div className={`imenu-content ${isMenuOpen6 === null ? '' : isMenuOpen6 ? 'active' : 'reverse'}`} >
        <div className='inewy' onClick={toggleMenu6}>
        <div><FaChevronLeft /></div>
        <div>Sale</div>
          
        </div>
        <div >
            <p className="linkers">EXPLORE MORE</p>
           
        </div>
        <div className='mother1'>
            <div>Women</div>
          
        </div>
        <div className='mother1'>
            <div>Men</div>
       
        </div>
        <div className='mother1'>
            <div>Kids</div>
       
        </div>
        <div className='mother1'>
            <div>Sports</div>
       
        </div>
        <div className='mother1'>
            <div>New to Sale</div>
       
        </div>
        <div className='mother1'>
            <div>Best to Sale</div>
       
        </div>
        <div className='mother1'>
            <div>Boots + Mids</div>
       
        </div>
        <div className='mother1'>
            <div>Running + Training</div>
       
        </div>
        <div className='mother1'>
            <div>Easy On & Off kids' Shoes</div>
       
        </div>
        <div className='mother1'>
            <div>Wide Shoes</div>
       
        </div>
        <div className='mother1'>
            <div>Everyday Favorites</div>
       
        </div>
        <div className='mother1'>
            <div>Slide & Sandals</div>
       
        </div>
    </div>
    
    </>
  )
}

export default Mobiledropdown