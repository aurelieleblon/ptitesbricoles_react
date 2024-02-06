import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/PagePanier.css"




const PanierPage = (prod) => {
    const [panier, setPanier] = useState(JSON.parse(localStorage.getItem("cart")));
    useEffect(() => {
 // Récupérer les données du panier depuis le localStorage
        // const cartData = localStorage.getItem('cart');
        console.log(panier)
    
        // // Vérifier si des données existent dans le localStorage
        if (panier) {
        //     // Convertir les données récupérées en objet JavaScript
        const panierString = JSON.stringify(panier); // Convertir l'objet panier en une chaîne JSON
        
          
        const parsedCart = JSON.parse(panierString);// Analyser la chaîne JSON en un objet JavaScript
            console.log(parsedCart)
    
           // Mettre à jour la quantité à 1 pour chaque produit si la propriété quantite n'existe pas
            const updatedCart = parsedCart.map(prod => {
                if (!prod.hasOwnProperty('quantite')) {
                    return { ...prod, quantite: 1 };
                }
                return prod;
            });
    
            // Mettre à jour l'état du panier avec les données récupérées
            setPanier(updatedCart);
        }
    
}, []);
 

    
    const augmenterQuantite = (id) => {
        const nouveauPanier = panier.map(prod => {
            if (prod.PR_ID === id) {
                return {
                    ...prod,
                    quantite: prod.quantite + 1 // Augmenter la quantité
                };
            }
            console.log(prod.quantite)
            return prod;
        });


        setPanier(nouveauPanier);
        localStorage.setItem('cart', JSON.stringify(nouveauPanier));
       
    };
    
       // Fonction pour supprimer un produit du panier
       const supprimerDuPanier = (id) => {
        const nouveauPanier = panier.filter(prod => prod.PR_ID !== id);
        setPanier(nouveauPanier);
        // Mettre à jour le localStorage avec le nouveau panier après la suppression
        localStorage.setItem('cart', JSON.stringify(nouveauPanier));
    };

    // Calcul du total du panier
    const totalPanier = panier.reduce((total, prod) => total + (prod.PR_Prix * prod.quantite), 0);
    console.log(prod);   
  
    
    return (
        <div className='monpanier'>
            <h1>Mon Panier</h1>
            <br></br>
            <ul>
                {panier.map(prod => (
                    <div className='panier' key={prod.id}>
                        <img
                        src={process.env.PUBLIC_URL + `/Assets/images/` + prod.PR_Image1}
                        alt="image 1 produit"  />
                       
                        <div className='paniernom'>
                    <span>{prod.PR_Nom}</span>
                    <span>{prod.PR_Prix}€</span>
                    <span>Quantité: {prod.quantite}</span> 
                        </div>

                    <button className='augmenter' onClick={() => augmenterQuantite(prod.PR_ID)}>+1</button>
                    <button className='supprimer' onClick={() => supprimerDuPanier(prod.PR_ID)}>Supprimer</button>
                    </div>
                ))}
            </ul>
            <p>Total: {totalPanier}€</p>
              {/* Utiliser un lien pour permettre à l'utilisateur de continuer ses achats */}
              <Link to="/Creations">
                <button className='continuer'>Continuer mes achats</button>
                </Link>
            <button className='caisse'>Paiement</button>
        </div>
    );
};

export default PanierPage;
