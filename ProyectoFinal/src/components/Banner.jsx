import React from 'react';
import Bticino from "../images/Bticino.png";
import FranklinElectric from "../images/FranklinElectric.png";
import Generac from "../images/Generac.png"
import Hubbell from "../images/Hubbell.png"
import PhelpsDodge from "../images/PhelpsDodge.png"
import Tecnolite from "../images/Tecnolite.png"
import '../styles/Banner.css'

const Banner = () => {
  const brands = [
    { id: 1, name: 'Bticino', img: Bticino },
    { id: 2, name: 'FranklinElectric', img: FranklinElectric },
    { id: 3, name: 'Generac', img: Generac },
    { id: 4, name: 'Hubbell', img: Hubbell },
    { id: 5, name: 'PhelpsDodge', img: PhelpsDodge },
    { id: 6, name: 'Tecnolite', img: Tecnolite },
  ];

  return (
    <div className="banner">
      <div className="banner-track">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-item">
            <img src={brand.img} alt={brand.name} />
          </div>
        ))}

        {brands.map((brand) => (
          <div key={brand.id + '-clone'} className="brand-item">
            <img src={brand.img} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
