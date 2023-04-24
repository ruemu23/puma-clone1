import React, { useState} from "react";
import image1 from '../images/du1.webp';
import image2 from "../images/du2.webp";
import image3 from "../images/du3.webp";
import image4 from "../images/du4.webp";
import image5 from "../images/du5.webp";
import image6 from "../images/du6.webp";
import image7 from '../images/du7.webp';
import image8 from "../images/du8.webp";
import image9 from "../images/du9.webp";
import image10 from "../images/du10.webp";
import image11 from "../images/du11.webp";
import image12 from "../images/du12.webp";
import image13 from '../images/du13.webp';
import image14 from "../images/du14.webp";
import image15 from "../images/du15.webp";
import image16 from "../images/du16.webp";
import image17 from "../images/du17.webp";
import image18 from "../images/du18.webp";
import image19 from "../images/du1.webp";
import image20 from "../images/du2.webp";
import image21 from "../images/du3.webp";
import image22 from "../images/du4.webp";
import image23 from '../images/du5.webp';
import image24 from "../images/du6.webp";
import image25 from "../images/du7.webp";
import image26 from "../images/du8.webp";
import image27 from "../images/du9.webp";
import image28 from "../images/du10.webp";
import image29 from "../images/du11.webp";
import image30 from "../images/du12.webp";
import image31 from "../images/du13.webp";
import image32 from "../images/du14.webp";
import image33 from '../images/du15.webp';



const products = [
    {
      name: "PUMA x FIRST MILE Velocity NITRO 2 Women's Running Shoes",
      price: 130,
      color: "1 COLOR",
      images: [image1, image2, image3, image4, image5, image6]
    },
    {
      name: "PUMA x FIRST MILE Run XX NITRO Women's Running Shoes",
      price: 140,
      color: "2 COLORS",
      images: [image13, image14, image15, image10, image11, image12]
    },
    {
      name: "PUMA x FIRST MILE Women's 7/8 Running Leggings",
      price: 55,
      color: "2 COLORS",
      images: [image16, image17, image5, image6, image1, image2]
    },
    {
      name: "PUMA x FIRST MILE Women's 7/8 Running Leggings",
      price: 55,
      color: "1 COLOR",
      images: [image18, image19, image6, image1, image2, image3]
    },
    {
        name: "PUMA x FIRST MILE Women's Running Shorts",
        price: 40,
        color: "2 COLORS",
        images: [image20, image21, image3, image4, image5, image6]
      },
      {
        name: "PUMA x FIRST MILE Women's Running Shorts",
        price: 40,
        color: "2 COLORS",
        images: [image22, image23, image4, image5, image6, image1]
      },
      {
        name: "PUMA x FIRST MILE Women's Running Tee",
        price: 35,
        color: "3 COLORS",
        images: [image24, image25, image5, image6, image1, image2]
      },
      {
        name: "PUMA x FIRST MILE Women's Running Tee",
        price: 35,
        color: "3 COLORS",
        images: [image26, image5, image6, image1, image2, image3]
      },
      {
        name: "PUMA x FIRST MILE Women's Running Tee",
        price: 35,
        color: "3 COLORS",
        images: [image27, image2, image3, image4, image5, image6]
      },
      {
        name: "PUMA x FIRST MILE Women's High Impact Running Bra",
        price: 45,
        color: "2 COLORS",
        images: [image28, image3, image4, image5, image6, image1]
      },
      {
        name: "PUMA x FIRST MILE Women's High Impact Running Bra",
        price: 45,
        color: "3 COLORS",
        images: [image29, image4, image5, image6, image1, image2]
      },
      {
        name: "PUMA x FIRST MILE Women's Running Tank Top",
        price: 35,
        color: "2 COLORS",
        images: [image30, image5, image6, image1, image2, image3]
      },
      {
        name: "PUMA x FIRST MILE Women's Running Tank Top",
        price: 35,
        color: "1 COLOR",
        images: [image31, image2, image3, image4, image5, image6]
      },
      {
        name: "PUMA x FIRST MILE Woven Womens Running Jacket",
        price: 99,
        color: "2 COLORS",
        images: [image32, image3, image4, image5, image6, image1]
      },
      {
        name: "Third Product",
        price: 85,
        color: "3 COLORS",
        images: [image33, image4, image5, image6, image1, image2]
      },
      {
        name: "PUMA x FIRST MILE Woven Women's Running Jacket",
        price: 85,
        color: "2 COLORS",
        images: [image11, image5, image6, image1, image2, image3]
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
          <div className="descr1">
            <p>{product.name}</p>
          </div>
          <div className="pricy">
            <p>${product.price.toFixed(2)}</p>
          </div>
        </div>
        <div className={`${grider ? "appprod" : "iappprod"}`}>
          <div className={`${grider ? "booky" : "ibooky"}`}>APP EXCLUSIVE</div>
        </div>
      </div>
    );
  };
  
  const MenProductCarousel = (props) => {
    const grider = props.grider;
   
    
  
    return (
      <div className={`${grider ? "carolist" : "icarolist"}`}>
        {products.map((product, index) => (
          <ProductCarousel key={index} product={product} grider={grider} />
        ))}
      </div>
    );
  };
  
  export default MenProductCarousel;