import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/PagePanier.css"
import PageCommandeService from '../Services/PageCommandeService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import GlobalContext from '../context.js/context';





const PanierPage = (prod) => {
    const [panier, setPanier] = useState(JSON.parse(localStorage.getItem("cart")));
    // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); //État de connexion utilisateur
   
    const storedUser = JSON.parse(localStorage.getItem("user"))
    console.log(storedUser)

    const {isConnected} = useContext(GlobalContext)
  

// Fonction pour vérifier si l'utilisateur est connecté

// const checkUserLogin = () => {
    // Vérifiez votre système d'authentification pour voir si l'utilisateur est connecté
    // Par exemple, vous pourriez vérifier l'existence d'un jeton d'authentification dans le localStorage
    const token = localStorage.getItem('token');
    // return !!token; // Renvoie true si un jeton existe, sinon false
// };

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
        // const userLoggedIn = checkUserLogin() /* Votre logique de connexion ici */
        // setIsUserLoggedIn(userLoggedIn);
    
}, []);
 

    
    const augmenterQuantite = (id) => {
        if (isConnected) {
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
       
    } else { // Afficher un message ou effectuer une redirection vers la page de connexion
        alert("Veuillez vous connecter pour ajouter des articles au panier.");
        // Vous pouvez également rediriger l'utilisateur vers la page de connexion
        // en utilisant react-router-dom history.push ou Link
        // Exemple : history.push('/connexion') ou <Link to="/connexion">Connexion</Link>};
    }
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
  
    // Fonction pour enregistrer le panier en base de données

    // const handleAchat = (produitId) => {
    //     if (isConnected) {
    //         // Effectuer l'achat en utilisant la fonction addCommande du service CommandeService
    //         const newCommande = {
    //             UT_ID: storedUser.UT_ID,
    //             PR_ID: produitId,
    //             CMD_DateAchat: new Date(),
                
    //         };

    //         PageCommandeService.addCommande(newCommande)
    //             .then(response => {
    //                 console.log(response);
    //                 // Traitement réussi
    //                 // console.log(Achat du produit ${produitId} effectué avec succès.);
    //                 // Ajoutez ici toute autre logique nécessaire après l'achat
    //             })
    //             .catch(error => {
    //                 // Gestion des erreurs
    //                 console.error(error);
    //                 // Ajoutez ici toute autre logique nécessaire en cas d'échec de l'achat
    //             });
    //     } else {
    //         // Redirigez vers la page de connexion si l'utilisateur n'est pas connecté
    //         // console.log('L'utilisateur n'est pas connecté. Redirection vers la page de connexion.');
    //         // Ajoutez ici la logique pour rediriger l'utilisateur vers la page de connexion si nécessaire
    //     }
    // };

    
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
        
        </div>
    );
};

export default PanierPage;
