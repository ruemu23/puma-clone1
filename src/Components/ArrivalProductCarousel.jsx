import React, { useState } from "react";
import image1 from '../images/cu1.webp';
import image2 from "../images/cu2.webp";
import image3 from "../images/cu3.webp";
import image4 from "../images/cu4.webp";
import image5 from "../images/cu5.webp";
import image6 from "../images/cu6.webp";
import image7 from '../images/cu7.webp';
import image8 from "../images/cu8.webp";
import image9 from "../images/cu9.webp";
import image10 from "../images/cu10.webp";
import image11 from "../images/cu11.webp";
import image12 from "../images/cu12.webp";
import image13 from "../images/cu13.jpeg";
import image14 from '../images/cu14.jpeg';
import image15 from "../images/cu15.jpeg";
import image16 from "../images/cu16.webp";
import image17 from "../images/cu17.webp";
import image18 from "../images/cu18.webp";
import image19 from "../images/cu19.webp";
import image20 from "../images/cu20.webp";
import image21 from "../images/cu21.webp";
import image22 from "../images/cu22.webp";
import image23 from "../images/cu23.webp";
import image24 from '../images/cu24.webp';
import image25 from "../images/cu25.webp";
import image26 from "../images/cu26.webp";
import image27 from "../images/cu27.webp";



const products = [
  {
    name: "PUMA x FIRST MILE Velocity",
    price: 130,
    color: "1 COLOR",
    images: [image1, image2, image3],
  },
  {
    name: "PUMA x FIRST MILE Run XX",
    price: 140,
    color: "2 COLORS",
    images: [image4, image5, image6],
  },
  {
    name: "FUTURE ULTIMATE FG/AG Men's Soccer ",
    price: 220,
    color: "2 COLORS",
    images: [image7, image8, image9],
  },
  {
    name: "PUMA NYC Roma Skyline Flagship",
    price: 140,
    color: "1 COLOR",
    images: [image10, image11, image12],
  },
  {
    name: "PUMA x COCOMELON RS-X Toddlers'",
    price: 75,
    color: "1 COLOR",
    images: [image13, image14, image15],
  },
  {
    name: "PUMA x COCOMELON Toddlers'  ",
    price: 38,
    color: "1 COLOR",
    images: [image16, image17],
  },
  {
    name: "PUMA Fit Logo Graphic Men's ",
    price: 35,
    color: "3 COLOR",
    images: [image18, image19],
  },
  {
    name: "PIconic T7 Women's Leggings",
    price: 40,
    color: "1 COLOR",
    images: [image20, image21],
  },
];

const ProductCarousel = ({ product, grider }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handlePrevClick = () => {
    const newIndex = currentImageIndex === 0 ? product.images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentImageIndex === product.images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setShowButtons(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={`${grider ? "imgprod" : "imgprodi"}`} >
      {showButtons && (
          <>
            <button className="prebtns" onClick={handlePrevClick}>
              &#10094;
            </button>
            <button className="nextbtns" onClick={handleNextClick}>
              &#10095;
            </button>
          </>
        )}
        <img src={product.images[currentImageIndex]} alt={product.name} />
       
      </div>
      <div className={`${grider ? "colorprod" : "icolorprod"}`}>
        <p>{product.color}</p>
      </div>
      <div className={`${grider ? "descprod" : "idescprod"}`}>
        <div className={`${grider ? "descr1" : "idescr1"}`}>
          <p>{product.name}</p>
        </div>
        <div className={`${grider ? "pricy" : "ipricy"}`}>
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
      <div className={`${grider ? "appprod" : "iappprod"}`}>
        <div className={`${grider ? "booky" : "ibooky"}`}>APP EXCLUSIVE</div>
      </div>
    </div>
  );
};

const ArrivalProductCarousel = (props) => {
  const grider = props.grider;
 
  

  return (
    <div className={`${grider ? "carolist" : "icarolist"}`}>
      {products.map((product, index) => (
        <ProductCarousel key={index} product={product} grider={grider} />
      ))}
    </div>
  );
};

export default ArrivalProductCarousel;
