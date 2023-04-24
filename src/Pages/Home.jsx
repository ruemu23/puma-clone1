import React from 'react'
import image1 from '../images/puma32.webp';
import image5 from '../images/copy1.jpeg';
import image6 from '../images/copy3.avif';
import image7 from '../images/shoe1.jpeg';
import image8 from '../images/shoe2.jpeg';
import image9 from '../images/shoe3.jpeg';
import {AnotherCarousel,Carousel,Advert} from './Imports';
const Home = () => {
  return (
   

  

    <div className='section3'>
<Advert />

<div className="ese2">


   <div className="myEse11">
    


       <div className="myEse1">
           <div className="tega">
             <span className='run1'>RUN. BOSTON.</span>
             <span className='run2'>GET READY FOR THE BIG RACE</span>
           </div>
           <div className="run3"><button className="runbtn">SHOP RUNNING</button> <button className="runbtn">LEARN MORE</button></div> 
       </div>

   </div> 




<div className='hello'>
  <img src={image1} alt="Earthly Jay" />
 <div className="myname">EDNA KIPLAGAT</div>
</div>
</div>




   
   
 

<Carousel />       


<div className='kick'>
<div className='kickers'>
   <div className='kickme'> KICK IT INTO STYLE  </div>
   <div className='refr'>REFRESH YOUR SHOE COLLECTION</div>
   <div className='mybutt'>
     <button className='shopme'>SHOP MEN</button>
     <button className='shopme'>SHOP WOMEN</button>
     <button className='shopme'>SHOP KIDS</button>
   </div>
</div>
</div>  

<div className="baller">
<div className='bigman'></div>
<div className='playoff'>
   <div className='kickme'>KICK IT INTO STYLE </div>
   <div className='refr'>REFRESH YOUR SHOE COLLECTION</div>
   <div className='mybutt'>
     <button className='shopme'>SHOP MEN</button>
     <button className='shopme'>SHOP WOMEN</button>
     <button className='shopme'>SHOP KIDS</button>
   </div>
</div>
</div>
   
<AnotherCarousel />

<div className='chic'>
<div className='looke'>CHIC LOOKS FOR SPRING</div>
<div className='bloom'>BLOOM INTO BRIGHT COLORS</div>
<div className='jones'>
     <div>
           <div className='imagp1'>  <img src={image5} alt="Earthly Jay" /></div>
           <div className='butter'>
             <button className='yoyo'>SHOP MEN</button>
           </div>
     </div>
     <div>
           <div className='imagp2'><img src={image6} alt="Earthly Jay" /></div>
           <div className='butter'>
           <button className='yoyo'>SHOP MEN</button>
           </div>
     </div>
</div>

</div>  


<div className='chicken'>
<div className='looke'>KICK BACK & LOOK SHARP</div>
<div className='bloom'>SEE WHAT'S TRENDING</div>
<div className='jk'>
 
 
 <div className='tube'>
      <div className='tube1'><img src={image7} alt="Earthly Jay" /></div>
      <div className='tube2'>PUMA x THE RAGGED PRIEST</div>
      <div className='tube3'>SPORTSWEAR MEETS SUBCULTURE</div>
      <div className='tube4'>  <button className='yoyo'>SHOP BEST SELLERS</button></div>
 </div>
 <div className='tube'>
      <div className='tube1'><img src={image8} alt="Earthly Jay" /></div>
      <div className='tube2'>PUMA x COCOMELON</div>
      <div className='tube3'>ALL-DAY FUN</div>
      <div className='tube4'> <button className='yoyo'>SHOP NEW ARRIVALS</button></div>
 </div>
 <div className='tube'>
      <div className='tube1'><img src={image9} alt="Earthly Jay" /></div>
      <div className='tube2'>PUMA x RHUIGI</div>
      <div className='tube3'>NEW YORK WORLDWIDE</div>
      <div className='tube4'> <button className='yoyo'>SHOP COLLABORATIONS</button></div>
 </div>
 
 </div> 

</div>









</div>










  )
}

export default Home