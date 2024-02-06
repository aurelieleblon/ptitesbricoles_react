import React, { useState } from 'react';
import '../Styles/Header.css';
import image from "../Assets/logo-removebg-preview.png";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // État initial : déconnecté

    // Fonction pour se déconnecter
    const handleLogout = () => {
        // Code pour la déconnexion, probablement une requête au backend pour invalider le token JWT
        // Une fois la déconnexion réussie, mettre à jour l'état isLoggedIn à false
        setIsLoggedIn(false);
    };

    return (
        <>
            <div className='header'>
                <div className='titre'>
                    <h1>Mes p'tites bricoles</h1> 
                </div>
                <div className='logo'>
                    <img className='logo' alt='logo' src={image}/>
                </div>
                <div className='barre'> 
                    <Link to={"/PageAccueil"}> Accueil </Link>
                    <Link to={"/Creations"}> Créations </Link>
                    <Link to={"/PageContact"}> Contact</Link>
                    
                    <Link to={"/connexion"} > S'inscrire </Link>
                    <Link to={"/PagePanier"}> Panier </Link>
                    
                   
                    <Link to={"/PageVideo"}> Vidéos </Link>
                </div>
            </div>  
        </>
    );
};

export default Header;
