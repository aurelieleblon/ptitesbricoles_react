import React from 'react';

import "../Styles/PageCreation.css";
import { Link } from 'react-router-dom';




const PageCreation = () => {
    return (
        <>
     
     <div className='imagesrang1'>
    <div className="image-row">
       
        <Link to={`/produit/1`} >       
            <div className="image-container">
            <img src={process.env.PUBLIC_URL + `/Assets/images/foulard/foul1.jpg`} alt="catégorie foulard" />
            <div className="text-overlay">Foulards</div>
            </div>
        </Link>
            </div>

        <Link to={`/produit/2`}>
                <div className="image-container">
                <img src={process.env.PUBLIC_URL + `/Assets/images/headband/headbandtete.jpg`} alt="catégorie headband" />
                 <div className="text-overlay">Headband</div>
                </div>
         </Link>


         <Link to={`/produit/3`}> 
            <div className="image-container">
            <img src={process.env.PUBLIC_URL + `/Assets/images/headbandjersey/hbjersey3.jpg`} alt="catégorie headband jersey" />
            <div className="text-overlay">Headband jersey</div>
            </div>
        </Link>

    </div>
    <div className="image-row">

    <Link to={`/produit/4`}>
        <div className="image-container">
         <img src={process.env.PUBLIC_URL + `/Assets/images/lingdem/ling_dem8.jpg`} alt="Autre image 1" />
        <div className="text-overlay">Lingettes démaquillantes</div>
        </div>
    </Link>

        
    <Link to={`/produit/5`}>  
        <div className="image-container">
            <img src={process.env.PUBLIC_URL + `/Assets/images/noeudelas/noeud_el5.jpg`} alt="Autre image 2" />
            <div className="text-overlay">Noeuds sur élastique</div>
        </div>
    </Link> 

    <Link to={`/produit/7`}>  
        <div className="image-container">
            <img src={process.env.PUBLIC_URL + `/Assets/images/noeudpince/noeud_pince6.jpg`} alt="Autre image 2" />
            <div className="text-overlay">Noeuds sur pince</div>
        </div>
    </Link> 

    <Link to={`/produit/6`}> 
      <div className="image-container">
            <img src={process.env.PUBLIC_URL + `/Assets/images/portecarte/pc_rose_1.jpg`} alt="Autre image 3" />
            <div className="text-overlay">Porte cartes</div>
        </div>
    </Link> 
    
    
    </div>
    
</>

    
   

    )
}

export default PageCreation;