import React from 'react';
import ProduitService from '../Services/ProduitService';
import ProduitComp from '../Components/ProduitComp';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/StyleProduit.css';



const PageProduit = () => {
    const { PR_ID } = useParams()
    const [produit, setProduit] = useState([]);
    
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

    const GetProduitById = async () => {
        try {
            const response = await ProduitService.GetProduitById(PR_ID);
            console.log(response)
            setProduit(response.data.data)
            console.log(response.data.data)
        } catch (e) {
            console.log(e)
        }
    }
    
    const addToCart = (newItem) => {
        // const updatedCart = [...cart, prod];
        // setCart(updatedCart);
       var newCart = cart;

        newCart.push(newItem)

        setCart(newCart)
       

        // // Stocker les données du panier dans localStorage
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    
useEffect(() => {
        GetProduitById()
    }, []);

    return <>
       
      
        <div className="imgproduit-container">
        {produit.map((prod) => (
    <div className='imgproduit' key={prod.PR_ID}>
        <div className="produit-card">
            <ProduitComp produit={prod} />

            <div className="images-container">
                {prod.PR_Image1 && (
                    <img
                        src={process.env.PUBLIC_URL + `/Assets/images/` + prod.PR_Image1}
                        alt="image 1 produit" 
                    />
                    
                )}

                {prod.PR_Image2 && (
                    <img
                        src={process.env.PUBLIC_URL + `/Assets/images/` + prod.PR_Image2}
                        alt="image 2 produit"
                    />
                )}

                {prod.PR_Image3 && (
                    <img
                        src={process.env.PUBLIC_URL + `/Assets/images/` + prod.PR_Image3}
                        alt="image 3 produit"
                    />
                )}

                {prod.PR_Image4 && (
                    <img
                        src={process.env.PUBLIC_URL + `/Assets/images/` + prod.PR_Image4}
                        alt="image 4 produit"
                    />
                )}

                {prod.PR_Image5 && (
                    <img
                        src={process.env.PUBLIC_URL + `/Assets/images/` + prod.PR_Image5}
                        alt="image 5 produit"
                    />
                )}



            </div>

            <div className='description'>
                <p>{prod.PR_Nom}</p>
                <p>{prod.PR_Description}</p>
                <p>{prod.PR_Prix}€</p>
            </div>
           
            <Link to="/PagePanier">
            <button className='boutonpanier' onClick={() => addToCart(prod)}>Ajouter au panier</button>
            </Link>

          {/* <div className='link'> <Link to="/PageContact"> Acheter </Link></div>   */}
        </div>
    </div>
))}</div>
</>}
export default PageProduit;