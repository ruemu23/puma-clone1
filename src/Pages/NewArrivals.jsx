import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FaChevronDown, FaSlidersH, FaChevronUp} from 'react-icons/fa';
import { FiGrid,FiCheck } from 'react-icons/fi';
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import {Advert,Filter, GridController, ArrivalProductCarousel} from './Imports';

const NewArrivals = () => {
  const [grider, setGrider] = useState(true);

  const handleGrider = () => {
      setGrider(true);
  }
  const handleGrider1 = () => {
    setGrider(false);
}
  return (
  
<div className='section3'>
  {/* <Advert /> */}
    
  <div className='women1'>
      <p className='painter'>Home</p> <p className="fanta"><FontAwesomeIcon icon={faCircle} className="iconic" /></p> <p className='painter'>New Arrivals</p> <p className="fanta"><FontAwesomeIcon icon={faCircle} className="iconic" /></p> <p>Shop All New Arrivals</p>
    </div>

    <div className='shopall'><h1>SHOP ALL NEW ARRIVALS</h1></div>

    <Filter />

    <div className='prodlist'>
         <div className='prodtext'>637 PRODUCTS</div>
         <div className='prod1'>
         <div className='grid1' onClick={() => handleGrider1()}><FiGrid /></div>
             <div className='grid2' onClick={() => handleGrider()}><TfiLayoutGrid4Alt /></div>
         </div>
    </div>

    <ArrivalProductCarousel grider={grider} />

</div>

  )
}

export default NewArrivals