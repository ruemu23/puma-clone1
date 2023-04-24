import React from 'react';

import '../css/style.css';

import 'element-closest';

import { Outlet } from 'react-router-dom'

import { 
 
 
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
       dropdownRef,
     colorChanger,
     mytogglecolorChanger
    
   } = useToggleElement();


  return (
    <>
    <div className={`${colorChanger ? "iwrapper" : "wrapper"}`}>
   
   <MyHeader dropElement={dropElement} mytoggledropElement={mytoggledropElement} colorChanger={colorChanger} mytogglecolorChanger={mytogglecolorChanger}/>



<Outlet />





<Fixer />

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