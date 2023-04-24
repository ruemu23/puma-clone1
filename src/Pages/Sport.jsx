import { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { MdGridView } from 'react-icons/md';
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import {Filter,SportProductionCarousel} from './Imports';

const Sport = () => {
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
        <p className='painter'>Home</p> <p className="fanta"><FontAwesomeIcon icon={faCircle} className="iconic" /></p> <p className='painter'>Collaborations</p> <p className="fanta"><FontAwesomeIcon icon={faCircle} className="iconic" /></p> <p>SHOP All Sport</p>
      </div>
  
      <div className='shopall'><h1>SHOP ALL SPORT</h1></div>
  
      <Filter />
  
      <div className='prodlist'>
           <div className='prodtext'>719 PRODUCTS</div>
           <div className='prod1'>
           <div className='grid1' onClick={() => handleGrider1()}><MdGridView /></div>
               <div className='grid2' onClick={() => handleGrider()}><TfiLayoutGrid4Alt /></div>
           </div>
      </div>
  
      <SportProductionCarousel grider={grider} />
  
  </div>
  )
}

export default Sport