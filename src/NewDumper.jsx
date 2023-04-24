import React, { useRef, useState, useEffect } from 'react';
import { FaUserAlt,FaCartPlus,FaHeart,FaSearch,FaChevronRight,FaChevronLeft,FaChevronDown,FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube,FaCcVisa,FaCcMastercard,FaCcDiscover,FaCcPaypal,FaApplePay,FaGooglePay,FaBitcoin,FaTimes } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

import { SiAmericanexpress } from 'react-icons/si';
import '../css/style.css';
import logo from '../images/puma-logo-cover-removebg-preview.png'
import ilogo from '../images/PUMA_Logo_Cat_black-removebg-preview.png'
import image1 from '../images/puma32.webp';
import image2 from '../images/puma3d.jpeg';
import image5 from '../images/copy1.jpeg';
import image6 from '../images/copy3.avif';
import image7 from '../images/shoe1.jpeg';
import image8 from '../images/shoe2.jpeg';
import image9 from '../images/shoe3.jpeg';
import 'element-closest';

import { Outlet } from 'react-router-dom'

import { 
  // React, 
  // useState,
  // useEffect, 
  // useRef,
  Link,
  AnotherCarousel,
  Carousel,
  Footer,
  Mobiledropdown,
  RightMenu,
  MyHeader,
  Fixer
} from './Imports';

import { useToggleElement } from "../Common";
// import Fixer from '../Components/Fixer';

const Layout = () => {

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
    {/* <div className={`${colorChanger ? "iwrapper" : "wrapper"}`}> */}
    <div className='wrapper'>
   <MyHeader dropElement={dropElement} mytoggledropElement={mytoggledropElement} colorChanger={colorChanger} mytogglecolorChanger={mytogglecolorChanger}/>



<Outlet />







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

export default Layout