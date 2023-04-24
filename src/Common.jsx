import { useState, useRef, useEffect } from "react";

export const useToggleElement = () => {
  

  const [showArrival, setArrival] = useState(false);
  const [showWomen, setShowWomen] = useState(false);
  const [showMen, setShowMen] = useState(false);
  const [showKids, setShowKids] = useState(false);
  const [showCollaborations, setShowCollaborations] = useState(false);
  const [showSports, setShowSports] = useState(false);
  const [showSale, setShowSale] = useState(false);
  
  const arrivalRef = useRef(null);
  const womenRef = useRef(null);
  const menRef = useRef(null);
  const kidsRef = useRef(null);
  const collaborationsRef = useRef(null);
  const sportsRef = useRef(null);
  const saleRef = useRef(null);
  
  
  const handleMouseEnter = (setter) => {
    setArrival(false);
    setShowWomen(false);
    setShowMen(false);
    setShowKids(false);
    setShowCollaborations(false);
    setShowSports(false);
    setShowSale(false);
   setter(true);
   
  };

  const handleMouseLeave = () => {
    setArrival(false);
    setShowWomen(false);
    setShowMen(false);
    setShowKids(false);
    setShowCollaborations(false);
    setShowSports(false);
    setShowSale(false);
  
   
  };


  const handleMouseEnterHeader = () => {
    setArrival(false);
    setShowWomen(false);
    setShowMen(false);
    setShowKids(false);
    setShowCollaborations(false);
    setShowSports(false);
    setShowSale(false);
  
   
  };


  
  // const handleMouseLeave = (setter, ref, event) => {
  //   const target = event.target;
  //   const relatedTarget = event.relatedTarget;
    
  //   if (!target) {
  //     setter(false);
    

  //     ref.current.style.display = 'none';
  //     return;
  //   }

  //   if (!relatedTarget) {
     
  //     setter(false);
     
  //     ref.current.style.display = 'none';
  //     return;
  //   }
  
  //   const isMouseOverSec = target.classList.contains('mysec1') || relatedTarget.closest('.mysec1') !== null;
  //   const isMouseOverHider = target.classList.contains('hider') || relatedTarget.closest('.hider') !== null;
  //   const isMouseOverDropdown = target.classList.contains('dropdown') || relatedTarget.closest('.dropdown') !== null;
  //   const isMouseOverChild = ref.current && event.relatedTarget instanceof Element && ref.current.contains(event.relatedTarget);
    
  //   if (!isMouseOverSec && !isMouseOverHider && !isMouseOverDropdown && !isMouseOverChild) {
  //     setter(false);
  //     ref.current.style.display = 'none';
  //   }
  // };
  
  
  
  
  
  
  const [dropElement, setdropElement] = useState(false);
  
  const mytoggledropElement = () => {
    setdropElement(!dropElement);
  };
  
 const dropdownRef = useRef(null);
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.classList.contains("mypic") 
      &&
      !event.target.closest('.fa-user-alt')
    ) {
      setdropElement(false);
    }
  };
  
  
  
//start here

const containerRef = useRef(null);

function handleScroll() {
  // logic to determine when to show/hide the navigation buttons
  const container = containerRef.current;
  const scrollPosition = container.scrollLeft;
  const maxScroll = container.scrollWidth - container.clientWidth;
  const prevButton = container.querySelector('.prebtn');
  const nextButton = container.querySelector('.nextbtn');

  if (scrollPosition === 0) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'block';
  } else if (scrollPosition === maxScroll) {
    prevButton.style.display = 'block';
    nextButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';
  }
}

function handlePrevClick() {
  containerRef.current.scrollBy({
    left: -containerRef.current.clientWidth,
    behavior: 'smooth',
  });
}

function handleNextClick() {
  containerRef.current.scrollBy({
    left: containerRef.current.clientWidth,
    behavior: 'smooth',
  });
}


const [fixerPosition, setFixerPosition] = useState('90vh');



useEffect(() => {
  const footer = document.querySelector('.footer');
  const footerTop = footer.offsetTop;
  const windowHeight = window.innerHeight;

  function handleScroll() {
    const fixer = document.querySelector('.fixer');

    if (window.pageYOffset + windowHeight >= footerTop) {
      setFixerPosition('15vh');
      fixer.style.animation = 'none';
    
    } else {
      setFixerPosition('90vh');
      fixer.style.animation = 'border-animation 4s linear forwards';
    }

    if (fixerPosition === '15vh') {
      setTimeout(() => {
        fixer.style.animation = 'border-animation 4s linear forwards';
      }, 1000);
    }
  }

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);

//here stop

  const [colorChanger, setcolorChanger] = useState(false);
    
    const mytogglecolorChanger = () => {
      setcolorChanger(!colorChanger);
    };
  
    const [slideIndex, setSlideIndex] = useState(0);
    const slideRefs = useRef([]);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setSlideIndex((slideIndex) => (slideIndex + 1) % slideRefs.current.length);
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    useEffect(() => {
      if (slideRefs.current.length) {
        slideRefs.current.forEach((slide, index) => {
          if (index === slideIndex) {
            slide.style.display = 'block';
          } else {
            slide.style.display = 'none';
          }
        });
      }
    }, [slideIndex]);

    const [grider, setGrider] = useState(true);

    const handleGrider = () => {
        setGrider(true);
    }
    const handleGrider1 = () => {
      setGrider(false);
  }

    return {
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
       dropElement,
        mytoggledropElement,
      // setdropElement,
      dropdownRef,
      // handleClickOutside,
      containerRef,
      handleScroll,
      handlePrevClick,
      handleNextClick,
      fixerPosition,
      setFixerPosition,
      colorChanger,
      mytogglecolorChanger,
      slideIndex,
      slideRefs,
      handleMouseEnterHeader,
      grider,
      handleGrider,
      handleGrider1,
    };
      
    
};