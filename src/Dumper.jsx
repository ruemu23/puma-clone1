import React, { useRef, useState, useEffect } from 'react';
import { FaUserAlt,FaCartPlus,FaHeart,FaSearch,FaChevronRight,FaChevronLeft,FaChevronDown,FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube,FaCcVisa,FaCcMastercard,FaCcDiscover,FaCcPaypal,FaApplePay,FaGooglePay,FaBitcoin,FaTimes } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import logo from '../images/puma-logo-cover-removebg-preview.png'
import ilogo from '../images/PUMA_Logo_Cat_black-removebg-preview.png'
import { useToggleElement } from '../Common';
import { Link, NavLink } from 'react-router-dom';
  



const MyHeader = (props) => {
 const mytoggledropElement= props.mytoggledropElement;
const dropElement = props.dropElement;

const colorChanger = props.colorChanger;
const mytogglecolorChanger = props.mytogglecolorChanger;



  const { 
    showArrival,
    showWomen,
    showMen,
    showKids,
    showCollaborations,
    showSports,
    showSale,
    arrivalRef,
    womenRef,
    menRef,
    kidsRef,
    collaborationsRef,
    sportsRef,
    saleRef,
    handleMouseEnter,
    setArrival,
    setShowWomen,
    setShowMen,
    setShowKids,
    setShowCollaborations,
    setShowSports,
    setShowSale,
    handleMouseLeave,
    // dropElement,
    //   mytoggledropElement,
  //     setdropElement,
  //     dropdownRef,
  //     handleClickOutside,
    containerRef,
    handleScroll,
    handlePrevClick,
    handleNextClick,
    fixerPosition,
    setFixerPosition,
   // colorChanger,
   // mytogglecolorChanger,
    slideIndex,
    slideRefs,} = useToggleElement();



  return (
    <>
     <div className={`${colorChanger ? "iheader" : "header"}`}  onMouseEnter={() => {
        setArrival(false);
        setShowWomen(false);
        setShowMen(false);
        setShowKids(false);
        setShowCollaborations(false);
        setShowSports(false);
        setShowSale(false);
      }}>
         
    {/* <TopCarousel /> */}
    <div className='slideshow-container'>
        <div className="mySlides" ref={(el) => (slideRefs.current[0] = el)}>
          <span>JOIN THE PUMA FAM. EXPLORE CAREERS AT PUMA.</span>
          <span>
            <a href="#">CLICK HERE</a>
          </span>
        </div>
        <div className="mySlides" ref={(el) => (slideRefs.current[1] = el)}>
          <span>FREE SHIPPING ON ORDERS OVER $50.</span>
          <span>
            <a href="#">LEARN MORE</a>
          </span>
        </div>
        <div className="mySlides" ref={(el) => (slideRefs.current[2] = el)}>
          <span>FREE AND EASY RETURNS.</span>
          <span>
            <a href="#">SEE DETAILS</a>
          </span>
        </div>
      </div>
    
              </div>
    
      <div className={`${colorChanger ? "isection2" : "section2"}`}>
    
          <div className='mysec1'>
          <NavLink to="/"  className="navstyle"> <div className='logo'>
             <img src={colorChanger ? ilogo : logo} style={colorChanger ? { height: '100%', width: '70px' } : null}/>
            </div> </NavLink> 
            <div className='hider kate' onMouseEnter={() => handleMouseEnter(setArrival, arrivalRef)}
            onMouseLeave={(event) => handleMouseLeave(setArrival, arrivalRef, event)}><NavLink to="/newarrivals"  className="navstyle">New Arrivals</NavLink>
             {showArrival && (
              <div
                className='dropdown section22'
                ref={arrivalRef}
                 >
                  <div className="myarrival">
                    <div>  
                        <div>Launch Calender </div>
                        <div>Women's New Arrival </div>
                        <div>Men's New Arrival </div>
                         <div>Kid's New Arrival</div>
                    </div>
                    <div> 
                        <div>Shop All new Arrival </div>
                        <div>75TH anniversary running </div>
                        <div>Pursuit Pack</div>
                         <div>Puma and the Ragged Priest</div>
                    </div>
                    <div> 
                         <div>PUMA And Cocomelon </div>
                         <div>PUMA AND RHIUGI </div>
                        <div>PUMA NYC Fanshop </div>
                         <div>MB COLLECTION</div>
                    </div>
                    <div>
                        <div>PUMA AND SPONGEBOB </div>
                        <div>Only at PUMA </div>
                        <div> </div>
                        <div></div>
                    </div>
                  </div>
    
    
    
              </div>
            )}
            </div>
            <div
            className='hider kate'
            onMouseEnter={() => handleMouseEnter(setShowWomen, womenRef)}
            onMouseLeave={(event) => handleMouseLeave(setShowWomen, womenRef, event)}
          >
           <NavLink to="/women"  className="navstyle"> Women </NavLink>
            {showWomen && (
              <div
                className='dropdown section22'
                ref={womenRef}>
            
    
            <div className="myarrival1">
                    <div className="div1">  
                        <div>New Arrivals </div>
                        <div>Best Sellers </div>
                        <div>Spring Break </div>
                         <div>Dressses & Skirts</div>
                         <div>Mids </div>
                        <div>Styles in White </div>
                        <div>Dad Shoes </div>
                         <div>NYC Shop</div>
                         <div style={{color:"red"}}>Sale</div>
                    </div>
                    <div className="div2"> 
                        <div className="myhead">Shoes </div>
                        <div>Classics </div>
                        <div>Suede</div>
                         <div>Cali</div>
                         <div>RS Collection</div>
                        <div>Rider Pack </div>
                        <div>Mayze</div>
                         <div>Lifestyle</div>
                         <div>Training + Gym</div>
                        <div>Running </div>
                        <div>Basketball</div>
                         <div>Motosport</div>
                         <div>Slide + Sandals </div>
                        <div>Boots & Mids </div>
                     
                    </div>
                    <div className="div2"> 
                        <div className="myhead">Clothing </div>
                        <div>Classics </div>
                        <div>Hoodies + Sweatshirts</div>
                         <div>T-shirts + Tops</div>
                         <div>Leggings </div>
                        <div>Dresses + Skirts </div>
                        <div>Shorts</div>
                         <div>Bras</div>
                         <div>Tracksuits</div>
                        <div>Jackets + Outerwear </div>
                        <div>Pants</div>
                         <div>Loungewear</div>
                         <div>Matching Sets </div>
                        <div>Maternity </div>
                    </div>
                    <div className="div2">
                        <div className="myhead">Accessories </div>
                        <div>Bags + Backspace </div>
                        <div>Hats</div>
                         <div>Socks</div>
                         <div>Face Masks + Gaiters </div>
                        <div>Watches </div>
                        <div>Sunglasses</div>
                         <div>Sports Equipment</div>
                         <div>Soccer Balls </div>
                      
                    </div>
                    <div className="div2">
                        <div className="myhead">Sports </div>
                        <div>Running </div>
                        <div>Training + Gym</div>
                         <div>Basketball</div>
                         <div>Motosport </div>
                        <div>Golf </div>
                        <div>Yoga</div>
                         <div>Soccer</div>
                         <div>Racquet  Sport</div>
                       
                    </div>
                  </div>
    
    
    
    
              </div>
            )}
          </div>
            <div className='hider kate'
             onMouseEnter={() => handleMouseEnter(setShowMen, menRef)}
             onMouseLeave={(event) => handleMouseLeave(setShowMen, menRef, event)}
            >
               <NavLink to="/men"  className="navstyle">Men</NavLink>
            {showMen && (
              <div
                className='dropdown section22'
                ref={menRef}
                
              >
            <div className="myarrival1">
                    <div className="div1">  
                        <div>New Arrivals </div>
                        <div>Best Sellers </div>
                        <div>Spring Break </div>
                         <div>Dressses & Skirts</div>
                         <div>Mids </div>
                        <div>Styles in White </div>
                        <div>Dad Shoes </div>
                         <div>NYC Shop</div>
                         <div style={{color:"red"}}>Sale</div>
                    </div>
                    <div className="div2"> 
                        <div className="myhead">Shoes </div>
                        <div>Classics </div>
                        <div>Suede</div>
                         <div>Cali</div>
                         <div>RS Collection</div>
                        <div>Rider Pack </div>
                        <div>Mayze</div>
                         <div>Lifestyle</div>
                         <div>Training + Gym</div>
                        <div>Running </div>
                        <div>Basketball</div>
                         <div>Motosport</div>
                         <div>Slide + Sandals </div>
                        <div>Boots & Mids </div>
                     
                    </div>
                    <div className="div2"> 
                        <div className="myhead">Clothing </div>
                        <div>Classics </div>
                        <div>Hoodies + Sweatshirts</div>
                         <div>T-shirts + Tops</div>
                         <div>Polos </div>
                        
                        <div>Shorts</div>
                         <div>Team Jerseys</div>
                         <div>Tracksuits</div>
                        <div>Jackets + Outerwear </div>
                        <div>Pants</div>
                         <div>Loungewear</div>
                         <div>Matching Sets </div>
                        <div>Big & Tall </div>
                    </div>
                    <div className="div2">
                        <div className="myhead">Accessories </div>
                        <div>Socks + Underwear </div>
                        <div>Hats</div>
                         <div>Socks</div>
                         <div>Face Masks + Gaiters </div>
                        <div>Watches </div>
                        <div>Sunglasses</div>
                         <div>Sports Equipment</div>
                         <div>Soccer Balls </div>
                      
                    </div>
                    <div className="div2">
                        <div className="myhead">Sports </div>
                        <div>Running </div>
                        <div>Training + Gym</div>
                         <div>Basketball</div>
                         <div>Motosport </div>
                        <div>Golf </div>
                        <div>Yoga</div>
                         <div>Soccer</div>
                         <div>Racquet  Sport</div>
                       
                    </div>
                  </div>
             
             
             
             
              </div>
            )}
            </div>
            <div className='hider kate' onMouseEnter={() => handleMouseEnter(setShowKids, kidsRef)}
             onMouseLeave={(event) => handleMouseLeave(setShowKids, kidsRef, event)}>
              <NavLink to="/kids"  className="navstyle">Kids</NavLink>
              {showKids && (
              <div
                className='dropdown section22'
                ref={kidsRef}>
          <div className="myarrival1">
                    <div className="div1">  
                        <div>New Arrivals </div>
                        <div>Best Sellers </div>
                        <div>Kids Soccer Looks </div>
                         <div>PUMA X COCOMELON</div>
                         <div>PUMA x SPONGEBOB </div>
                        <div>Matching Sets</div>
                         <div style={{color:"red"}}>Sale</div>
                    </div>
                    <div className="div2"> 
                        <div className="myhead">Boys </div>
                        <div className='bigger'>Shoes </div>
                        <div>Classics </div>
                        <div>Lifestyle </div>
                        <div>Suede</div>
                         <div>Cali</div>
                         <div>RS Collection</div>
                     
                         <div className='bigger'>Clothing</div>
                         <div>Classics </div>
                         <div>Hoodies + Sweatshirts</div>
                        <div>Pants + Shorts</div>
                         <div>T-Shirts + Tops</div>
                         <div className='bigger'>Sport </div>
                         <div>Basketball </div>
                       
                        <div className='bigger'>Accessories </div>
                     
                    </div>
                    <div className="div2"> 
                        <div className="myhead">Girls </div>
                        <div className='bigger'>Shoes </div>
                        <div>Classics</div>
                         <div>Lifestyle</div>
                         <div>Suede </div>
                        
                        <div>RS Collection</div>
                         <div>Performance</div>
                         <div>Easy On & off Shoes</div>
                        <div className='bigger'>Clothing </div>
                        <div>Classics</div>
                         <div>Hoodies + Sweatshirts</div>
                    
    
                        <div className='bigger'>Sport</div>
                        <div>Basketball</div>
                        <div>Running</div>
                         <div className='bigger'>Accessories</div>
                      
                    </div>
                    <div className="div2">
                        <div className="myhead">Shop By Size </div>
                        <div className='bigger'>Kids' Shoes </div>
                        <div>Toddler Sizes 4 - 10</div>
                         <div>Little Kids Sizes 10.5-3.5</div>
                         <div>Big Kids Sizes 4-7 </div>
                        <div className='bigger'>Kids' Clothing</div>
                        <div>Infant + Toddler Sizes 0M - 4T</div>
                         <div>Little Kids Sizes 4-7</div>
                         <div>Big Kids Sizes S-XL </div>
                      
                    </div>
                    
                  </div>
    
    
    
    
    
              </div>
            )}
            </div>
            <div className='hider kate' onMouseEnter={() => handleMouseEnter(setShowCollaborations, collaborationsRef)}
             onMouseLeave={(event) => handleMouseLeave(setShowCollaborations, collaborationsRef, event)}><NavLink to="/collaborations"  className="navstyle">Collaborations </NavLink>
              {showCollaborations && (
              <div
                className='dropdown section22'
                ref={collaborationsRef}
                
              >
           <div className="myarrival1">
                    
                    <div className="div2"> 
                        <div className="myhead">Select </div>
                        <div>PUMA x RHUIGI </div>
                       
                      
                     
                    </div>
                     
                    <div className="div2"> 
                        <div className="myhead">Patnerships </div>
                        <div>PUMA x THE RAGGED PRIEST</div>
                        <div>PUMA x COCOMELON</div>
                        <div>PUMA x SPONGEBOB</div>
                     
                    </div>
                 
                  </div>
              </div>
            )}
             </div>
            <div className='hider kate' onMouseEnter={() => handleMouseEnter(setShowSports, sportsRef)}
             onMouseLeave={(event) => handleMouseLeave(setShowSports, sportsRef, event)}>
              <NavLink to="/sport"  className="navstyle">Sport </NavLink> {showSports && (
              <div
                className='dropdown section22'
                ref={sportsRef}
                
              >
             <div className="myarrival1">
                    <div className="div1">  
                        <div>New Arrivals </div>
                        <div>Best Sellers </div>
                        <div>Spring Break </div>
                         <div>Dressses & Skirts</div>
                         <div>Mids </div>
                        <div>Styles in White </div>
                        <div>Dad Shoes </div>
                         <div>NYC Shop</div>
                         <div style={{color:"red"}}>Sale</div>
                    </div>
                    <div className="div2"> 
                        <div className="myhead">Shoes </div>
                        <div>Classics </div>
                        <div>Suede</div>
                         <div>Cali</div>
                         <div>RS Collection</div>
                        <div>Rider Pack </div>
                        <div>Mayze</div>
                         <div>Lifestyle</div>
                         <div>Training + Gym</div>
                        <div>Running </div>
                        <div>Basketball</div>
                         <div>Motosport</div>
                         <div>Slide + Sandals </div>
                        <div>Boots & Mids </div>
                     
                    </div>
                    <div className="div2"> 
                        <div className="myhead">Clothing </div>
                        <div>Classics </div>
                        <div>Hoodies + Sweatshirts</div>
                         <div>T-shirts + Tops</div>
                         <div>Polos </div>
                        
                        <div>Shorts</div>
                         <div>Team Jerseys</div>
                         <div>Tracksuits</div>
                        <div>Jackets + Outerwear </div>
                        <div>Pants</div>
                         <div>Loungewear</div>
                         <div>Matching Sets </div>
                        <div>Big & Tall </div>
                    </div>
                    <div className="div2">
                        <div className="myhead">Accessories </div>
                        <div>Socks + Underwear </div>
                        <div>Hats</div>
                         <div>Socks</div>
                         <div>Face Masks + Gaiters </div>
                        <div>Watches </div>
                        <div>Sunglasses</div>
                         <div>Sports Equipment</div>
                         <div>Soccer Balls </div>
                      
                    </div>
                    <div className="div2">
                        <div className="myhead">Sports </div>
                        <div>Running </div>
                        <div>Training + Gym</div>
                         <div>Basketball</div>
                         <div>Motosport </div>
                        <div>Golf </div>
                        <div>Yoga</div>
                         <div>Soccer</div>
                         <div>Racquet  Sport</div>
                       
                    </div>
                  </div>
              </div>
            )}
            </div>
            <div className='hider kate' onMouseEnter={() => handleMouseEnter(setShowSale, saleRef)}
             onMouseLeave={(event) => handleMouseLeave(setShowSale, saleRef, event)}>
             <NavLink to="/sale"  className="navstyle">Sale </NavLink>  {showSale && (
              <div
                className='dropdown section22'
                ref={saleRef}
                
              >
              <div className="myarrival1">
                    <div className="div1">  
                        <div>New Arrivals </div>
                        <div>Best Sellers </div>
                        <div>Spring Break </div>
                         <div>Dressses & Skirts</div>
                         <div>Mids </div>
                        <div>Styles in White </div>
                        <div>Dad Shoes </div>
                         <div>NYC Shop</div>
                         <div style={{color:"red"}}>Sale</div>
                    </div>
                    <div className="div2"> 
                        <div className="myhead">Shoes </div>
                        <div>Classics </div>
                        <div>Suede</div>
                         <div>Cali</div>
                         <div>RS Collection</div>
                        <div>Rider Pack </div>
                        <div>Mayze</div>
                         <div>Lifestyle</div>
                         <div>Training + Gym</div>
                        <div>Running </div>
                        <div>Basketball</div>
                         <div>Motosport</div>
                         <div>Slide + Sandals </div>
                        <div>Boots & Mids </div>
                     
                    </div>
                    <div className="div2"> 
                        <div className="myhead">Clothing </div>
                        <div>Classics </div>
                        <div>Hoodies + Sweatshirts</div>
                         <div>T-shirts + Tops</div>
                         <div>Polos </div>
                        
                        <div>Shorts</div>
                         <div>Team Jerseys</div>
                         <div>Tracksuits</div>
                        <div>Jackets + Outerwear </div>
                        <div>Pants</div>
                         <div>Loungewear</div>
                         <div>Matching Sets </div>
                        <div>Big & Tall </div>
                    </div>
                    <div className="div2">
                        <div className="myhead">Accessories </div>
                        <div>Socks + Underwear </div>
                        <div>Hats</div>
                         <div>Socks</div>
                         <div>Face Masks + Gaiters </div>
                        <div>Watches </div>
                        <div>Sunglasses</div>
                         <div>Sports Equipment</div>
                         <div>Soccer Balls </div>
                      
                    </div>
                    <div className="div2">
                        <div className="myhead">Sports </div>
                        <div>Running </div>
                        <div>Training + Gym</div>
                         <div>Basketball</div>
                         <div>Motosport </div>
                        <div>Golf </div>
                        <div>Yoga</div>
                         <div>Soccer</div>
                         <div>Racquet  Sport</div>
                       
                    </div>
                  </div>
              </div>
            )}</div>
          </div>
          <div className='mysec2'>
             <div className='mysec2a'> 
              <FaSearch  className='falla'/> 
              <input placeholder="SEARCH PUMA.COM" className='inputer' /> 
             </div>
             
                <div className={`${colorChanger ? "imission" : "mission"}`}><FaSearch /></div>
                 <div className={`${colorChanger ? "ibala" : "bala"}`}><FaHeart /></div>
                 <div className={`${colorChanger ? "ibala" : "bala"}`}><FaCartPlus /></div>
                 <div className="mypic"  onClick={mytoggledropElement}><FaUserAlt className="fa-user-alt" /></div>
                 <div className={`${colorChanger ? "imission" : "mission"}`} onClick={mytogglecolorChanger}><span className='sizer1'>{colorChanger ?  <FaTimes /> : <FiMenu />}</span><span className='sizer'>MENU</span></div>
            
          </div>
          
    
    
    
      </div>
      </>
  )
}

export default MyHeader