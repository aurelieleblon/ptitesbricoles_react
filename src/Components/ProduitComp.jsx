import React from 'react';
import '../Styles/StyleProduit.css'


const Produit = (prod) => {
    return <> 
    <div className='img'>
    <img src={process.env.PUBLIC_URL + `/Assets/images/${prod.PR_Image1}`} width={"150px"} alt="" />
    </div>
    </>;
}
 
export default Produit;