import React, { useState, useRef, useEffect } from 'react';
import {FaChevronRight,FaChevronLeft} from 'react-icons/fa';
import prof1 from '../images/pum1.webp';
import prof2 from '../images/pum2.webp';

import prof3 from '../images/pum3.webp';


import prof4 from '../images/pum4.webp';
import prof5 from '../images/pum5.webp';
import prof6 from '../images/pum6.webp';
import prof7 from '../images/pum7.webp';
import prof8 from '../images/pum8.webp';
import prof9 from '../images/pum9.webp';
import prof10 from '../images/pum10.webp';
// import '../css/style.css'

const AnotherCarousel = () => {
      
  const [scrollPosition, setScrollPosition] = useState(0);


  
  const carouselRef = useRef(null);


  

  const handleScroll = (scrollOffset) => {
    const container = carouselRef.current;
    if (container) {
      const newScrollPosition = scrollPosition + scrollOffset;
      setScrollPosition(newScrollPosition);
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  
    const products = [
        { name: 'Fast-R NITRO Elite', imageUrl: prof1,price: 123 },
        { name: 'Deviate NITRO Elite 2 Fireglow', imageUrl: prof2,price: 93},
        { name: 'Deviate NITRO 2 Run 75 Running', imageUrl: prof3,price: 223},
        { name: 'Electrify NITRO 2 75th', imageUrl: prof4,price: 523},
        { name: 'Deviate NITRO 2 75th',imageUrl: prof5,price: 53},
        { name: 'Velocity NITRO 2 75th', imageUrl: prof6,price: 103},
        { name: 'Fast-R NITRO Elite', imageUrl: prof7,price: 183 },
        { name: 'Deviate NITRO Elite 2 Fireglow', imageUrl: prof8,price: 105},
        { name: 'Deviate NITRO 2 Run 75 Running', imageUrl: prof9,price: 323},
        { name: 'Electrify NITRO 2 75th', imageUrl: prof10,price: 423},

      ];


      // const isFirstPosition = (position) => {
      //   return position === 0;
      // };
    
      // const isLastPosition = (position, containerWidth, contentWidth) => {
      //   return position >= contentWidth - containerWidth;
      // };

      const isFirstPosition = (scrollPos) => scrollPos === 0;
      const isLastPosition = (scrollPosition) => {
        const container = carouselRef.current;
        if (container) {
          return scrollPosition === container.scrollWidth - container.clientWidth;
        }
        return false;
      };
    
      useEffect(() => {
        const handleScrollEvent = () => {
          setScrollPosition(carouselRef.current.scrollLeft);
        };
        const container = carouselRef.current;
        container.addEventListener('scroll', handleScrollEvent);
        return () => {
          container.removeEventListener('scroll', handleScrollEvent);
        };
      }, []);
  return (
    <>



    <div className='newme'>
                      <div className='insider' ref={carouselRef}>
                      
                      
                      {products.map((product, index) => (
                        <div className='flex-item' key={index}>
                        
                           <div className='tope1'>
                             <img src={product.imageUrl} alt={product.name} />
                           </div>
                           <div className='tope2'><span>{product.name}</span><span>${product.price}</span></div>
         
                        </div>     
                        ))}
    
    
                      </div>
    
                      {!isFirstPosition(scrollPosition) &&
              <div className="prebtn" onClick={() => handleScroll(-100)}>
                <FaChevronLeft />
              </div>
            }
            {!isLastPosition(scrollPosition, carouselRef.current?.clientWidth, carouselRef.current?.scrollWidth) &&
              <div className="nextbtn" onClick={() => handleScroll(100)}>
                <FaChevronRight />
              </div>
            }
    </div>
    
    
    
    </>
  )
}

export default AnotherCarousel