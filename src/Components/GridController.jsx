import { useState} from "react";
import { TfiLayoutGrid4Alt} from 'react-icons/tfi';
// import { TfiLayoutGrid4Alt } from "react-icons/tfi";

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
<div className='grid1' onClick={() => handleGrider1()}><TfiLayoutGrid4Alt /></div>
             <div className='grid2' onClick={() => handleGrider()}><TfiLayoutGrid4Alt /></div>
</>
  )
}

export default GridController