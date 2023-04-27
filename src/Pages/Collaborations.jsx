import { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { MdGridView } from 'react-icons/md';
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaChevronLeft, FaRegSquare} from 'react-icons/fa';
import {Filter,CollabProductCarousel} from './Imports';

const Collaborations = () => {
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
   
        <p className='hider painter'>Home</p> <p className="hider fanta"><FontAwesomeIcon icon={faCircle} className="iconic" /></p> <p className="mission fanta"><FaChevronLeft /></p> <p className='painter'>Collaborations</p> <p className="hider fanta"><FontAwesomeIcon icon={faCircle} className="iconic" /></p> <p className="hider">SHOP ALL COLLABORATIONS</p>
      </div>
  
      <div className='shopall'><h1 className="shopmez">SHOP ALL COLLABORATIONS</h1></div>
  
      <Filter />
  
      <div className='prodlist'>
         <div className='prodtext'>657 PRODUCTS</div>
         <div className='prod1'>
         <div className='grid1 mission' onClick={() => handleGrider()}><FaRegSquare /></div>
         <div className='grid1' onClick={() => handleGrider1()}><MdGridView /></div>
             <div className='grid2 hider' onClick={() => handleGrider()}><TfiLayoutGrid4Alt /></div>
         </div>
      </div>
  
      <CollabProductCarousel grider={grider} />
  
  </div>
  )
}

export default Collaborations