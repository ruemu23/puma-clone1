import { useState} from "react";
import { FiGrid} from 'react-icons/fi';
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

const GridController = () => {
    const [grider, setGrider] = useState(true);

    const handleGrider = () => {
        setGrider(true);
    }
    const handleGrider1 = () => {
      setGrider(false);
  }
// const { 
      
//     grider,
//     handleGrider,
//     handleGrider1
//    } = useToggleElement();
  return (
<>
<div className='grid1' onClick={() => handleGrider1()}><FiGrid /></div>
             <div className='grid2' onClick={() => handleGrider()}><TfiLayoutGrid4Alt /></div>
</>
  )
}

export default GridController