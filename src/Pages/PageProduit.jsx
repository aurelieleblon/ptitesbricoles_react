import React from 'react';
import ProduitService from '../Services/ProduitService';
import ProduitComp from '../Components/ProduitComp';
import { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/StyleProduit.css';
import context from '../context.js/context';
import PageCommandeService from '../Services/PageCommandeService';
import { toast } from 'react-toastify';



const PageProduit = () => {
    const { PR_ID } = useParams()
    const [produit, setProduit] = useState([]);
    
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))
    const { isConnected } = useContext(context); // Récupérez l'état de connexion de l'utilisateur depuis le contexte

     const storedUser = JSON.parse(localStorage.getItem("user"))

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
        if (isConnected) { // Vérifiez si l'utilisateur est connecté
            var newCart = cart ? [...cart] : []; // Créez une copie du panier existant ou initialisez un nouveau panier
            newCart.push(newItem);
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart)); // Stockez les données du panier dans localStorage
        } else {            
            <Link to={"/PageConnexion"}> </Link>
            toast.error('Veuillez vous connecter pour effectuer un achat');
            // Vous pouvez également rediriger l'utilisateur vers la page de connexion ici
        } 
    }

    const handleAchat = (produitId) => {
        console.log(produitId.PR_ID)
        if (isConnected) {
            // Effectuer l'achat en utilisant la fonction addCommande du service CommandeService
            const newCommande = {
                UT_ID: storedUser.UT_ID,
                PR_ID: produitId.PR_ID,
                             
                               
            };

            PageCommandeService.addCommande(newCommande)
                .then(response => {
                    console.log(response);
                    toast.success('Votre article a bien été commandé'); 
                    
                    // Traitement réussi
                    // console.log(Achat du produit ${produitId} effectué avec succès.);
                    // Ajoutez ici toute autre logique nécessaire après l'achat
                })
                .catch(error => {
                    // Gestion des erreurs
                    console.error(error);
                    // Ajoutez ici toute autre logique nécessaire en cas d'échec de l'achat
                });
        } else {
            toast.error('Veuillez vous connecter pour effectuer un achat')
        }
    };


    
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
<button className='boutonpanier' onClick={() => handleAchat(prod)}>Achat immédiat</button>

          {/* <div className='link'> <Link to="/PageContact"> Acheter </Link></div>   */}
        </div>
    </div>
))}</div>
</>}
export default PageProduit;