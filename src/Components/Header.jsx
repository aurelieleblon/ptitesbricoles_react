import React, { useState, useContext } from 'react';
import '../Styles/Header.css';
import image from "../Assets/logo-removebg-preview.png";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import context from '../context.js/context';



const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);// État initial : déconnecté
    const { user, setUser, isConnected, setIsConnected } = useContext(context)
    // console.log("user", user)
    // console.log("isConnected", isConnected)
    const navigate = useNavigate()

   const deconnexion = () => {
    setUser(null)
    setIsConnected(false)
    setTimeout(() => {
        
        navigate("/PageAccueil");
    }, 1000);
    setTimeout(() => {
        window.location.reload();
    }, 500);
      }
    return (
        <>
            <div className='header'>
                <div className='titre'>
                    <h1>Mes p'tites bricoles</h1>
                </div>
                <div className='logo'>
                    <img className='logo' alt='logo' src={image} />
                </div>
                <div className='barre'>
                    <Link to={"/PageAccueil"}> Accueil </Link>
                    <Link to={"/Creations"}> Créations </Link>
                    <Link to={"/PageVideo"}> Vidéos </Link>
                    <Link to={"/connexion"} > S'inscrire </Link>
                    
                    { isConnected === false ? (
                    <Link to={"/PageConnexion"}> Se connecter </Link>)
                    :( <Link onClick={deconnexion}> Se déconnecter </Link>)}


                    <Link to={"/PageContact"}> Contact</Link>
                    <Link to={"/PagePanier"}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span>Panier</span>
                    </Link>

                    {user && user.role === "admin" ?
                    <Link to={"/PageAdmin"}> Admin </Link>
                    : "" }
                </div>
            </div>
        </>
    );
};

export default Header;
