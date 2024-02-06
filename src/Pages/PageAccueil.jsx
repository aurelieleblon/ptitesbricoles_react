import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer'
import '../Styles/PageAccueil.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ImageSlider = () => {
  localStorage.setItem('cart', JSON.stringify([]));
  const settings = {

    
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true, // Active le défilement automatique
  autoplaySpeed: 3000, 
  };

  return (
    <div className='slider'>
      <Slider {...settings}>
        <div className='container-sliderimage'>
        <img src={process.env.PUBLIC_URL + `/Assets/images/foulard/foul12.jpg`} alt="Image 1" /></div>
        <div className='container-sliderimage'>
        <img src={process.env.PUBLIC_URL + `/Assets/images/noeudelas/noeud_el16.jpg`}  alt="Image 2" /></div>
        <div className='container-sliderimage'>
        <img src={process.env.PUBLIC_URL + `/Assets/images/headband/headband_img1.jpg`}  alt="Image 3" /></div>
        <div className='container-sliderimage'>
        <img src={process.env.PUBLIC_URL + `/Assets/images/portecarte/pc_cuivre_4.jpg`}  alt="Image 3" /></div>
        <div className='container-sliderimage'>
        <img src={process.env.PUBLIC_URL + `/Assets/images/lingdem/ling_dem14.jpg`}  alt="Image 3" /></div>
       
      </Slider>

      <div className="content">
        <p>L'ensemble des réalisations de Mes p'tites bricoles provient essentiellement de chutes de tissu, 
          de laine et de cuir. L'idée est que "rien ne se perd,..." dans un souci éthique et responsable. 
          Les modèles créés sont donc en quantités limitées voire uniques pour certains.</p>
      
      </div>
    </div>
  );
};

const PageAccueil = () => {
  return (
    <>
        
        <ImageSlider /> 
        
    </>
  );
};

export default PageAccueil;