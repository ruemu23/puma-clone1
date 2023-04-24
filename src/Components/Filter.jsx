import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FaChevronDown, FaSlidersH, FaChevronUp} from 'react-icons/fa';
import { FiGrid,FiCheck } from 'react-icons/fi';
import { TfiLayoutGrid4Alt } from "react-icons/tfi";

const Filter = () => {
    const [show, setShow] = useState({
        category: false,
        style: false,
        size: false,
        color: false,
        price: false,
        sporty: false,
        sorted: false
      });
    
      const regiRef = useRef(null);
      
      const handleOnclick = (key) => {
        setShow(prevShow => ({
          category: key === "category" ? !prevShow.category : false,
          style: key === "style" ? !prevShow.style : false,
          size: key === "size" ? !prevShow.size : false,
          color: key === "color" ? !prevShow.color : false,
          price: key === "price" ? !prevShow.price : false,
          sporty: key === "sporty" ? !prevShow.sporty : false,
          sorted: key === "sorted" ? !prevShow.sorted : false,
          [key]: !prevShow[key],
        }));
      }
      
      useEffect(() => {
        function handleClickOutsides(event) {
          if (regiRef.current && !regiRef.current.contains(event.target)) {
            setShow({
              category: false,
              style: false,
              size: false,
              color: false,
              price: false,
              sporty: false,
              sorted: false
            });
          }
        }
        document.addEventListener("mousedown", handleClickOutsides);
        return () => {
          document.removeEventListener("mousedown", handleClickOutsides);
        };
      }, [regiRef]);
  return (
    <div className='cate'>
    <div className='cate1'>
    <div className='tecla1'><span> </span><span ><FaSlidersH /> </span></div>
        <div className='regi' ref={regiRef}>
       <div className={`${show.category ? "itecla" : "tecla"}`} onClick={() => handleOnclick('category')}><span>Category </span><span className='pusher'>{show.category ?  <FaChevronUp /> : <FaChevronDown />} </span></div>
       {show.category && (   
       <div className='regi1' ref={regiRef}>  
       <div className="remover" onClick={() => handleOnclick('category')}>x</div>
        <div className="gameboy">
       <div><input type="checkbox" className="checker" />
<label className="fading"> Clothing <span className="fader"> [519] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Footwear <span className="fader"> [380] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Clothing <span className="fader"> [234] </span></label></div>
        </div>

       </div>
       )}
       </div>



       <div className='regi' ref={regiRef}>
       <div className={`${show.style ? "itecla" : "tecla"}`} onClick={() => handleOnclick('style')}><span>Style </span><span className='pusher'>{show.style ?  <FaChevronUp /> : <FaChevronDown />} </span></div>
       {show.style && (     
       <div className='regi2' ref={regiRef}> 
       <div className="remover" onClick={() => handleOnclick('style')}>x</div>
       
       <div className="gameboy">

       <div><input type="checkbox" className="checker" />
<label className="fading"> Lows <span className="fader"> [328] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Tees <span className="fader"> [122] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Hats <span className="fader"> [106] </span></label></div>
<div><input type="checkbox" className="checker" />
<label className="fading"> Hoodies and Sweatshirts <span className="fader"> [96] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Tights <span className="fader"> [57] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Shorts <span className="fader"> [48] </span></label></div>

<div><input type="checkbox" className="checker" />
<label className="fading"> Jackets <span className="fader"> [40] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Pants <span className="fader"> [69] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Sandals <span className="fader"> [29] </span></label></div>

<div><input type="checkbox" className="checker" />
<label className="fading"> Crop Tops <span className="fader"> [24] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Sport Bras <span className="fader"> [17] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Socks <span className="fader"> [15] </span></label></div>



        </div>

        </div>
       )}

        </div>


        <div className='regi' ref={regiRef}>

       <div className={`${show.size ? "itecla" : "tecla"}`} onClick={() => handleOnclick('size')}><span>Size </span><span className='pusher'>{show.size ?  <FaChevronUp /> : <FaChevronDown />} </span></div>
       {show.size && (     
       <div className='regi3' ref={regiRef}>  
       
       <div className="remover" onClick={() => handleOnclick('size')}>x</div>
       
       <div className="gameboy1">
       <div>OSFA</div>
<div>XXS</div>
<div>XS</div>  
<div>S</div>
<div>M</div>
<div>L</div>  
<div>XL</div>
<div>XXL</div>
 <div>Youth</div>
<div>3</div>
<div>4</div>  
<div>4.5</div>
<div>5</div>
<div>5.5</div>  
<div>6</div>
<div>6.5</div>
<div>7</div>
<div>7.5</div>
<div>8</div>  
<div>8.5</div>
<div>9</div>
<div>10</div>  
<div>10.5</div>
<div>11</div>
 <div>11.5</div>
<div>12</div>
<div>12.5</div>  
<div>13</div>
<div>13.5</div>
<div>14</div>  
<div>14.5</div>
<div>15</div>
<div>15.5</div>
<div>16</div>  
<div>16.5</div>
<div>17</div>
<div>17.5</div>  
<div>18</div>
<div>26</div>
<div>28</div>
<div>30</div>
<div>32</div>  
<div>34</div>
<div>10-13</div>
<div>1X</div>  
<div>2X</div>
<div>3X</div>
 <div>3XL</div>
<div>9-11</div>
<div>Adult</div>  
<div>Kids</div>
<div>L/XL</div>
<div>Mini</div>  
<div>S/M</div>









        </div>


       </div>
       )}
       </div>



       <div className='regi' ref={regiRef}>
       <div className={`${show.color ? "itecla" : "tecla"}`} onClick={() => handleOnclick('color')}><span>Color </span><span className='pusher'>{show.color ?  <FaChevronUp /> : <FaChevronDown />} </span></div>
       {show.color && (     
       <div className='regi3' ref={regiRef}> 
             <div className="remover" onClick={() => handleOnclick('color')}>x</div>
             <div className="gameboy2">
       <div className="bridge">
            <div className="blackcolor"></div>
            <div>Black [364]</div>
       </div>

       <div className="bridge">
            <div className="graycolor"></div>
            <div>Gray [82]</div>
       </div>

       <div className="bridge">
            <div className="metalliccolor"></div>
            <div>Metallic [6]</div>
       </div>

       <div className="bridge">
            <div className="browncolor"></div>
            <div>Brown [14]</div>
       </div>
     
       <div className="bridge">
            <div className="bluecolor"></div>
            <div>Blue [106]</div>
       </div>

       <div className="bridge">
            <div className="greencolor"></div>
            <div>Green [77]</div>
       </div>

       <div className="bridge">
            <div className="orangecolor"></div>
            <div>Orange [21]</div>
       </div>

       <div className="bridge">
            <div className="tancolor"></div>
            <div>Tan [52]</div>
       </div>

       <div className="bridge">
            <div className="yellowcolor"></div>
            <div>Yellow [22]</div>
       </div>

       <div className="bridge">
            <div className="redcolor"></div>
            <div>Red [31]</div>
       </div>
     
       <div className="bridge">
            <div className="pinkcolor"></div>
            <div>Pink [79]</div>
       </div>

       <div className="bridge">
            <div className="purplecolor"></div>
            <div>Purple [64]</div>
       </div>


       <div className="bridge">
            <div className="whitecolor"></div>
            <div>White [209]</div>
       </div>

       <div className="bridge">
            <div className="coloredcolor"></div>
            <div>Colored [18]</div>
       </div>








        </div>
        </div>
       )}
       </div>


       <div className='regi' ref={regiRef}>

       <div className={`${show.price ? "itecla" : "tecla"}`} onClick={() => handleOnclick('price')}><span>Price </span><span className='pusher'>{show.price ?  <FaChevronUp /> : <FaChevronDown />} </span></div>
       {show.price && (     
       <div className='regi1' ref={regiRef}> 
              <div className="remover" onClick={() => handleOnclick('price')}>x</div>
       
              <div className="gameboy">
       <div><input type="radio" className="checker" />
<label className="fading"> $0 - $25 </label></div>
       <div><input type="radio" className="checker"/>
<label className="fading"> $25 - $50 </label></div>
       <div><input type="radio" className="checker"/>
<label className="fading"> $50 - $100 </label></div>

<div><input type="radio" className="checker" />
<label className="fading"> $100 - $150 </label></div>
       <div><input type="radio" className="checker"/>
<label className="fading"> $150 - $200 </label></div>
       <div><input type="radio" className="checker"/>
<label className="fading"> $200 and up </label></div>

        </div>

        </div>
       )}
       </div>


       <div className='regi' ref={regiRef}>

       <div className={`${show.sporty ? "itecla" : "tecla"}`} onClick={() => handleOnclick('sporty')}><span>Sport </span><span className='pusher'>{show.sporty ?  <FaChevronUp /> : <FaChevronDown />} </span></div>
       {show.sporty && (     
       <div className='regi1' ref={regiRef}> 
       
       <div className="remover" onClick={() => handleOnclick('sporty')}>x</div>
        <div className="gameboy">
       <div><input type="checkbox" className="checker" />
<label className="fading"> Running <span className="fader"> [127] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Training <span className="fader"> [105] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Basketball <span className="fader"> [61] </span></label></div>
<div><input type="checkbox" className="checker" />
<label className="fading">Soccer <span className="fader"> [56] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Motorsport <span className="fader"> [27] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Studio <span className="fader"> [12] </span></label></div>
<div><input type="checkbox" className="checker" />
<label className="fading">Tennis <span className="fader"> [12] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Swimming/Beach <span className="fader"> [5] </span></label></div>
       <div><input type="checkbox" className="checker"/>
<label className="fading"> Indoor <span className="fader"> [3] </span></label></div>
        </div>
       
        </div>
       )}
       </div>


    </div>
    <div>
    <div className='regi' ref={regiRef}>
    <div className={`${show.sorted ? "itecla" : "tecla"}`} onClick={() => handleOnclick('sorted')}><span>Sort By </span><span className='pusher'>{show.sorted ?  <FaChevronUp /> : <FaChevronDown />} </span></div>
    {show.sorted && (     
       <div className='regi10' ref={regiRef}> 
       <div className="faders"><FiCheck /> Sorted by</div>
       <div>Price Low To High</div>
       <div>Price High To Low</div>
       <div>Newest</div>
       <div>Top Sellers</div>
       
        </div>
       )}
   </div>
   
    </div>
  </div>
  )
}

export default Filter