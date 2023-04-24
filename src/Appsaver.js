import React, { useRef, useState, useEffect } from 'react';
import { FaUserAlt,FaCartPlus,FaHeart,FaSearch,FaChevronRight,FaChevronLeft,FaChevronDown,FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube,FaCcVisa,FaCcMastercard,FaCcDiscover,FaCcPaypal,FaApplePay,FaGooglePay,FaBitcoin,FaTimes } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

import { SiAmericanexpress } from 'react-icons/si';
import './css/style.css';
import logo from './images/puma-logo-cover-removebg-preview.png'
import ilogo from './images/PUMA_Logo_Cat_black-removebg-preview.png'
import RightMenu from './Components/RightMenu';
import image1 from '../src/images/puma32.webp';
import image2 from '../src/images/puma3d.jpeg';
import image5 from '../src/images/copy1.jpeg';
import image6 from '../src/images/copy3.avif';
import image7 from '../src/images/shoe1.jpeg';
import image8 from '../src/images/shoe2.jpeg';
import image9 from '../src/images/shoe3.jpeg';


import 'element-closest';
import Carousel from './Components/Carousel';
import AnotherCarousel from './Components/AnotherCarousel';
import Mobiledropdown from './Components/Mobiledropdown'

import Footer from './Components/Footer';
import { useToggleElement } from './Common';
import MyHeader from './Components/MyHeader';

// const Appsaver = () => {
    function Appsaver() {

    const { 
 
        dropElement,
           mytoggledropElement,
         //   setdropElement,
           dropdownRef,
         //   handleClickOutside,
         containerRef,
         handleScroll,
         handlePrevClick,
         handleNextClick,
         fixerPosition,
         setFixerPosition,
         colorChanger,
         mytogglecolorChanger,
         slideIndex,
         slideRefs
       } = useToggleElement();
     
     


  return (
    <>
    <div className={`${colorChanger ? "iwrapper" : "wrapper"}`}>
   <MyHeader dropElement={dropElement} mytoggledropElement={mytoggledropElement} colorChanger={colorChanger} mytogglecolorChanger={mytogglecolorChanger}/>



<div className='content'>

  

           <div className='section3'>
  <div className="ese1">
       <div className='sole'>SALE - UP TO 40% OFF</div>
       <div className='snow'>SHOP NOW</div>
  </div>

  <div className="ese2">


          <div className="myEse11">
           


              <div className="myEse1">
                  <div className="tega">
                    <span className='run1'>RUN. BOSTON.</span>
                    <span className='run2'>GET READY FOR THE BIG RACE</span>
                  </div>
                  <div className="run3"><button className="runbtn">SHOP RUNNING</button> <button className="runbtn">LEARN MORE</button></div> 
              </div>

          </div> 
    
    
    
    
     <div className='hello'>
         <img src={image1} alt="Earthly Jay" />
        <div className="myname">EDNA KIPLAGAT</div>
     </div>
  </div>



   
          
          
        
   
   <Carousel />       
    

    <div className='kick'>
      <div className='kickers'>
          <div className='kickme'> KICK IT INTO STYLE  </div>
          <div className='refr'>REFRESH YOUR SHOE COLLECTION</div>
          <div className='mybutt'>
            <button className='shopme'>SHOP MEN</button>
            <button className='shopme'>SHOP WOMEN</button>
            <button className='shopme'>SHOP KIDS</button>
          </div>
      </div>
    </div>  

    <div className="baller">
      <div className='bigman'></div>
      <div className='playoff'>
          <div className='kickme'>KICK IT INTO STYLE </div>
          <div className='refr'>REFRESH YOUR SHOE COLLECTION</div>
          <div className='mybutt'>
            <button className='shopme'>SHOP MEN</button>
            <button className='shopme'>SHOP WOMEN</button>
            <button className='shopme'>SHOP KIDS</button>
          </div>
      </div>
    </div>
          
     <AnotherCarousel />

     <div className='chic'>
       <div className='looke'>CHIC LOOKS FOR SPRING</div>
       <div className='bloom'>BLOOM INTO BRIGHT COLORS</div>
       <div className='jones'>
            <div>
                  <div className='imagp1'>  <img src={image5} alt="Earthly Jay" /></div>
                  <div className='butter'>
                    <button className='yoyo'>SHOP MEN</button>
                  </div>
            </div>
            <div>
                  <div className='imagp2'><img src={image6} alt="Earthly Jay" /></div>
                  <div className='butter'>
                  <button className='yoyo'>SHOP MEN</button>
                  </div>
            </div>
       </div>

      </div>  


     <div className='chicken'>
     <div className='looke'>KICK BACK & LOOK SHARP</div>
       <div className='bloom'>SEE WHAT'S TRENDING</div>
       <div className='jk'>
        
        
        <div className='tube'>
             <div className='tube1'><img src={image7} alt="Earthly Jay" /></div>
             <div className='tube2'>PUMA x THE RAGGED PRIEST</div>
             <div className='tube3'>SPORTSWEAR MEETS SUBCULTURE</div>
             <div className='tube4'>  <button className='yoyo'>SHOP BEST SELLERS</button></div>
        </div>
        <div className='tube'>
             <div className='tube1'><img src={image8} alt="Earthly Jay" /></div>
             <div className='tube2'>PUMA x COCOMELON</div>
             <div className='tube3'>ALL-DAY FUN</div>
             <div className='tube4'> <button className='yoyo'>SHOP NEW ARRIVALS</button></div>
        </div>
        <div className='tube'>
             <div className='tube1'><img src={image9} alt="Earthly Jay" /></div>
             <div className='tube2'>PUMA x RHUIGI</div>
             <div className='tube3'>NEW YORK WORLDWIDE</div>
             <div className='tube4'> <button className='yoyo'>SHOP COLLABORATIONS</button></div>
        </div>
        
        </div> 

     </div>



    
     <div className="fixer" style={{ top: fixerPosition,zIndex: '4' }} >
      GET 20% OFF X
     </div>


 

 </div>







 </div>







          <Footer />


           {dropElement && (
          <div ref={dropdownRef}>
            <RightMenu />
          </div>
        )}

{colorChanger && (
          <div>
            <Mobiledropdown />
          </div>
        )}





      </div>

  
    </>
  )
}

export default Appsaver