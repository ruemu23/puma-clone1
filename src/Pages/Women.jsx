import { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { MdGridView } from 'react-icons/md';
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import {WomenCarousel,Filter} from './Imports';




const Women = () => {

  // const { 
      
  //   grider
  

  //  } = useToggleElement();
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
      <p className='painter'>Home</p> <p className="fanta"><FontAwesomeIcon icon={faCircle} className="iconic" /></p> <p className='painter'>Women</p> <p className="fanta"><FontAwesomeIcon icon={faCircle} className="iconic" /></p> <p>Shop All Women's</p>
    </div>
    
    <div className="women2">
  <div className='women21'>
    <h1 className='sizeme'>FOR MOM, WITH LOVE</h1>
    <p className='sizeme2'>GIFTS AND MORE FOR MOTHER'S DAY</p>
  </div>
  <div className='women22'></div>

    </div>
    
    <div className='shopall'><h1>SHOP ALL WOMEN'S STYLES</h1></div>

    <Filter />
    
    <div className='prodlist'>
         <div className='prodtext'>1137 PRODUCTS</div>
         <div className='prod1'>
         <div className='grid1' onClick={() => handleGrider1()}><MdGridView /></div>
             <div className='grid2' onClick={() => handleGrider()}><TfiLayoutGrid4Alt /></div>
         </div>
    </div>


    <WomenCarousel grider={grider} />
    
    </div>
    
  )
}

export default Women