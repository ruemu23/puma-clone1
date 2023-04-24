import React, { useState, useRef, useEffect } from 'react';
import {FaChevronRight,FaChevronLeft} from 'react-icons/fa';
import profile1 from '../images/pumashoe.webp';
import profile2 from '../images/puma1.webp';

import profile4 from '../images/puma3.webp';


import profile7 from '../images/puma6.webp';
import profile8 from '../images/puma7.webp';
import profile9 from '../images/puma8.webp';
import profile10 from '../images/puma9.webp';
import profile11 from '../images/puma12.webp';

const Carousel = () => {
  
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
        { name: 'Fast-R NITRO Elite', description: 'Elektrocharged Women',imageUrl: profile1,price: 123 },
        { name: 'Deviate NITRO Elite 2 Fireglow', description: 'Mens Running Shoes', imageUrl: profile2,price: 93},
        { name: 'Deviate NITRO 2 Run 75 Running', description: 'Velocity NITRO 2 75th',imageUrl: profile4,price: 223},
        { name: 'Electrify NITRO 2 75th', description: 'Anniversary Women\'s Runnin' ,imageUrl: profile11,price: 523},
        { name: 'Deviate NITRO 2 75th', description: 'Anniversary Womens Runnin',imageUrl: profile1,price: 53},
        { name: 'Velocity NITRO 2 75th', description: 'Anniversary Mens Running',imageUrl: profile7,price: 103},
        { name: 'Fast-R NITRO Elite', description: 'Elektrocharged Women',imageUrl: profile8,price: 183 },
        { name: 'Deviate NITRO Elite 2 Fireglow', description: 'Mens Running Shoes', imageUrl: profile9,price: 105},
        { name: 'Deviate NITRO 2 Run 75 Running', description: 'Velocity NITRO 2 75th',imageUrl: profile10,price: 323},
        { name: 'Electrify NITRO 2 75th', description: 'Anniversary Women\'s Runnin' ,imageUrl: profile11,price: 423},
        { name: 'Deviate NITRO 2 75th', description: 'Anniversary Womens Runnin',imageUrl: profile1,price: 223},
        { name: 'Velocity NITRO 2 75th', description: 'Anniversary Mens Running ',imageUrl: profile2,price: 193},
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
                       <div className='tope3'>{product.description}</div>
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

export default Carousel

