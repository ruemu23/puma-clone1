import React, { useState , useEffect } from 'react';

const Fixer = () => {

const [fixerPosition, setFixerPosition] = useState('90vh');



useEffect(() => {
  const footer = document.querySelector('.footer');
  const footerTop = footer.offsetTop;
  const windowHeight = window.innerHeight;

  function handleScroll() {
    const fixer = document.querySelector('.fixer');

    if (window.pageYOffset + windowHeight >= footerTop) {
      setFixerPosition('25vh');
      fixer.style.animation = 'none';
    
    } else {
      setFixerPosition('90vh');
      fixer.style.animation = 'border-animation 4s linear forwards';
    }

    if (fixerPosition === '25vh') {
      setTimeout(() => {
        fixer.style.animation = 'border-animation 4s linear forwards';
      }, 1000);
    }
  }

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className="fixer" style={{ top: fixerPosition}} >
    GET 20% OFF X
   </div>
  )
}

export default Fixer