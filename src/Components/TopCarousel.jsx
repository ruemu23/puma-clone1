import React, { useState, useEffect } from 'react';
// import '../css/style.css'

const TopCarousel = () => {
    const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex(slideIndex => slideIndex + 1);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const slides = document.getElementsByClassName('mySlides');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  if (slideIndex >= slides.length) {
    setSlideIndex(0);
  }
  slides[slideIndex].style.display = 'block';
  return (
    <div className='joby'>
    <div className='mySlides'>
      <span>JOIN THE PUMA FAM. EXPLORE CAREERS AT PUMA.</span>
      <span>
        <a href="#">CLICK HERE</a>
      </span>
    </div>
    <div className='mySlides'>
      <span>FREE SHIPPING ON ORDERS OVER $50.</span>
      <span>
        <a href="#">LEARN MORE</a>
      </span>
    </div>
    <div className='mySlides'>
      <span>FREE AND EASY RETURNS.</span>
      <span>
        <a href="#">SEE DETAILS</a>
      </span>
    </div>
  </div>
  )
}

export default TopCarousel